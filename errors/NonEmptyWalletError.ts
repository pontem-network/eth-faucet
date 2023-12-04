export class NonEmptyWalletError extends Error {
  code = 403
  message = "Your wallet has enough Pontem L2 ETH."
}
