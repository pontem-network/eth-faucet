export class InvalidWalletAddress extends Error {
  code = 403
  message = "Your wallet address isn't in whitelist"
}
