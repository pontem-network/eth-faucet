export class IpLimitExceeded extends Error {
  code = 403
  message = "Your IP address has received Pontem L2 ETH from us already. You need to wait 24 hours to claim tokens again."
}
