export class InsufficientFundsError extends Error {
  code = 500
  message = "Our wallet run out of Pontem L2 ETH. Try again later."
}
