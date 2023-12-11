import requestIp from "request-ip"
import type { NextApiRequest, NextApiResponse } from "next"
import { InsufficientFundsError } from "../../errors/InsufficientFundsError"
import { InvalidCaptcha } from "../../errors/InvalidCaptcha"
import { IpLimitExceeded } from "../../errors/IpLimitExceeded"
import { NonceExpiredError } from "../../errors/NonceExpiredError"
import { NonEmptyWalletError } from "../../errors/NonEmptyWalletError"
import { SignatureMismatchError } from "../../errors/SignatureMismatchError"
import { WalletAlreadyFunded } from "../../errors/WalletAlreadyFunded"
import { InvalidWalletAddress } from "../../errors/InvalidWalletAddress"
import { TransactionHistory } from "../../interfaces/TransactionHistory"
import { DefaultResponse } from "../../interfaces/Response"
import { bootstrapCaptcha } from "../../utils/bootstrapCaptcha"
import { bootstrapEthereum } from "../../utils/bootstrapEthereum"
import { bootstrapTransactionHistory } from "../../utils/bootstrapTransactionHistory"

type ClaimParams = {
  address: string
  message: string
  signature: string
  captcha: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<DefaultResponse>) => {
  try {
    const ethereum = bootstrapEthereum()
    const captcha = bootstrapCaptcha()

    const { address, message, signature, captcha: captchaToken }: ClaimParams = req.body

    // TODO(mateusz): Refactor bootstrapTransactionHistory. The current implementation is hairy
    // Start of IP detection
    const whiteListResponse = await fetch(
      'https://raw.githubusercontent.com/pontem-network/eth-faucet-whitelist/main/src/evm.whiteList.json',
      {cache: "no-store"}
    );

    if (whiteListResponse.ok) {
      const whiteList = await whiteListResponse.json();

      if (!whiteList.includes(address)) { //is not if whitelist
        throw new InvalidWalletAddress()
      }
    }

    console.log('1');

    const ipDetection = bootstrapTransactionHistory("ip") as TransactionHistory
    const ipAddress = requestIp.getClientIp(req)
    if (ipAddress) {
      const hasReceivedTokens = await ipDetection.hasReceivedTokens(ipAddress)
      if (hasReceivedTokens) {
        throw new IpLimitExceeded()
      }
    }
    // End of IP detection

    if (captcha) {
      await captcha.verifyCaptcha(captchaToken)
    }
    await ethereum.verifyMessage(address, message, signature)
    await ethereum.isEligible(address)
    await ethereum.fundWallet(address)
    // IP Detection
    if (ipAddress) {
      await ipDetection.recordTransaction(ipAddress)
    }

    return res.status(200).json({ status: "ok" })
  } catch (e) {
    if (
      e instanceof InvalidCaptcha ||
      e instanceof IpLimitExceeded ||
      e instanceof NonceExpiredError ||
      e instanceof SignatureMismatchError ||
      e instanceof InsufficientFundsError ||
      e instanceof NonEmptyWalletError ||
      e instanceof WalletAlreadyFunded ||
      e instanceof InvalidWalletAddress
    ) {
      return res.status(e.code).json({ status: "error", message: e.message })
    }

    console.log('error', e);

    console.error(e)
    return res.status(500).json({ status: "error", message: "Something went wrong" })
  }
}

export default handler
