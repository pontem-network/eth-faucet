export class WalletAlreadyFunded extends Error {
  code = 403
  message = "Your wallet has received Lumio L2 ETH from us already. You need to wait 24 hours to claim tokens again."
}
