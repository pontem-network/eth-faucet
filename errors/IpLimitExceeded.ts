export class IpLimitExceeded extends Error {
  code = 403
  message = "Your IP address has already received Lumio L2 ETH from us. You need to wait 24 hours to receive token again."
}
