import { ethers } from "ethers"

import { privilegedWallets } from "../consts/wallets"
import { Ethereum } from "../services/Ethereum"
import { TimestampNonce } from "../services/TimestampNonce"
import { WalletClassification } from "../services/WalletClassification"
import { bootstrapTransactionHistory, TransactionHistoryType } from "./bootstrapTransactionHistory"
import { CHAIN_URL, CHAIN_ID } from "../constants";

export const bootstrapEthereum = (chainId: number = Number(CHAIN_ID)) => {
  // Wallet Classification Service
  const classificationService = new WalletClassification(privilegedWallets)

  // Transaction History Service
  const enabledTransactionChecks = process.env.ENABLE_TRANSACTION_CHECKS as TransactionHistoryType
  const transactionHistoryService = bootstrapTransactionHistory(enabledTransactionChecks, { chainId })

  // Nonce Service
  const nonceService = new TimestampNonce()

  // Blockchain Service
  const provider = new ethers.providers.JsonRpcProvider(CHAIN_URL || "", chainId)
  const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY || "", provider)
  const ethereum = new Ethereum(wallet, nonceService, classificationService, transactionHistoryService)

  return ethereum
}
