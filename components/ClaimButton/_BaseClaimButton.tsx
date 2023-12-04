import LoadingButton from "@mui/lab/LoadingButton"
import { PontemL2, useEthers } from "@usedapp/core"
import { isNil } from "lodash"
import Link from "next/link"
import { hasMetamask } from "../../hooks/hasMetamask"
import { claimTokens, retrieveNonce } from "../../services/HttpClient"
import { messageTemplate } from "../../utils/textMessage"
import { Button } from './Button';

type BaseClaimButtonProps = {
  onSuccess: () => void
  onError: (message: string) => void
  retrieveCaptcha: () => Promise<string>
}

export const BaseClaimButton = ({ onSuccess, onError, retrieveCaptcha }: BaseClaimButtonProps) => {
  const { account, library, isLoading: loading, activateBrowserWallet, switchNetwork, chainId } = useEthers()
  const installed = hasMetamask()

  const claimPontemL2Eth = async () => {
    try {
      if (isNil(library) || isNil(account)) {
        throw new Error("Wallet is not connected")
      }

      const captchaToken = await retrieveCaptcha()

      const nonce = await retrieveNonce()
      const message = messageTemplate(nonce)

      const signer = library.getSigner()
      const signature = await signer.signMessage(message)

      await claimTokens(account as string, message, signature, captchaToken)
      onSuccess()
    } catch (e: any) {
      if (e.name === "AxiosError" && e.response.data.message) {
        onError(e.response.data.message)
        return
      }

      console.log(e);

      onError(e?.message || "Something went wrong")
    }
  }

  if (!installed) {
    return (
      <Link href="https://metamask.io/download/" passHref>
        <Button >
          Install MetaMask
        </Button>
      </Link>
    )
  }

  if (loading) {
    return <LoadingButton variant="contained" loading  />
  }

  if (!account) {
    return (
      <Button onClick={() => activateBrowserWallet()} >
        Connect wallet
      </Button>
    )
  }

  if (chainId !== PontemL2.chainId) {
    return (
      <Button onClick={() => switchNetwork(PontemL2.chainId)} >
        Switch to PONTEM L2 network
      </Button>
    )
  }

  return (
    <Button onClick={claimPontemL2Eth} >
      Claim PONTEM L2 ETH
    </Button>
  )
}
