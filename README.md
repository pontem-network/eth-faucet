The `eth-faucet` is a developer tool to get testnet Ether (ETH) in order to test and troubleshoot your decentralized application (DApp) before going live on Ethereum mainnet, where you must use real ETH.
<img width="1677" alt="Screenshot 2023-12-05 at 06 55 09" src="https://github.com/pontem-network/eth-faucet/assets/25219331/c4a1c0f5-9cd0-4853-93b4-cc9c649a1a95">

## Getting Started

1. Unzip useDappCore alongside with project directory. ("useDappCore" should be neighbour to "eth-faucet" dir) This build contains Pontem Network L2 config. 
[useDappCore.zip](https://github.com/pontem-network/eth-faucet/files/13684971/useDappCore.zip)



2. Go to useDappCore ans install dependencies via
```bash
"npm install"
```

3. Go to eth-faucet and install dependencies via
```bash
yarn install 
```

4. Create a new Ethereum wallet:

```bash
yarn create-wallet
```

You should receive wallet credentials printed to your console:

```
export WALLET_ADDRESS=0x0000000000000000000000000000000000000000
export WALLET_MNEMONIC_PHRASE=fluffy kitten hates cats although it is a cat
export WALLET_PRIVATE_KEY=0x0000000000000000000000000000000000000000000000000000000000000000
```

**Write those credentials down**, you will need it!

5. Now, you need to find the Ethereum API for network. You can use Infura and you can use it as well. Just [create a free account](https://infura.io) and generate API keys for any network.
6. Once you have your API keys, create a `.env.local` file, and specify the following variables:

```
WALLET_PRIVATE_KEY=0x0000000000000000000000000000000000000000000000000000000000000000
NEXT_PUBLIC_ETH_API_URL=https://goerli.infura.io/v3/00000000000000000000000000000000
NEXT_PUBLIC_DEFAULT_WALLET_ETH_AMOUNT=0.25 # Optional
NEXT_PUBLIC_PRIVILEGED_WALLET_ETH_AMOUNT=1 # Optional
REDIS_URL=redis://localhost:6379
```

7. Finally, we can run our app:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see it.

## How to top up the wallet with ETH?

You can use [this faucet](https://goerli-faucet.mudit.blog/) to request some testnet Ethereum.

## How to change amount of distributed ETH?

Set the `NEXT_PUBLIC_DEFAULT_WALLET_ETH_AMOUNT` variable in your `.env` file. For example:

```
NEXT_PUBLIC_DEFAULT_WALLET_ETH_AMOUNT=5 # 5 ETH per claim
```

## Use captcha

If you want to prevent bots from draining your wallet, you should use some captcha verification system. You can do it by setting `NEXT_PUBLIC_ENABLE_CAPTCHA` in your `.env` file. At the moment we support only Google ReCaptcha v3.

| Parameter                    | Type                             | Description                  |
| :--------------------------- | :------------------------------- | :--------------------------- |
| `NEXT_PUBLIC_ENABLE_CAPTCHA` | `none` (default), `recaptcha_v3` | Enables captcha verification |

### Google ReCaptcha v3

If you want to use Google ReCaptcha v3 to verify captchas. Just set `NEXT_PUBLIC_ENABLE_CAPTCHA` to `recaptcha_v3`, than add `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` in your `.env` file.

| Parameter                        | Type     | Description                     |
| :------------------------------- | :------- | :------------------------------ |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | `string` | **Required**. Front-end API key |
| `RECAPTCHA_SECRET_KEY`           | `string` | **Required**. Back-end API key  |

```
NEXT_PUBLIC_ENABLE_CAPTCHA=recaptcha_v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=0000000000000000000000000000000000000000
RECAPTCHA_SECRET_KEY=0000000000000000000000000000000000000000
```

You can [create a new API Key here](https://www.google.com/recaptcha/intro/v3.html). It’s free of charge (there are some limits though).

## Restricting users to claim ETH once per day

If you want to restrict users from draining your wallet, you should enable transaction checks. You can do it by setting `ENABLE_TRANSACTION_CHECKS` in your `.env` file. The supported transaction history scanners you can find here:

| Parameter                   | Type                                   | Description                                                           |
| :-------------------------- | :------------------------------------- | :-------------------------------------------------------------------- |
| `ENABLE_TRANSACTION_CHECKS` | `none` (default), `etherscan`, `redis` | Enables transaction checks to prevent users from draining your wallet |

### Etherscan

To scan blockchain history for transactions you should use Etherscan History API. Just set `ENABLE_TRANSACTION_CHECKS` to `etherscan` and add `ETHERSCAN_API_KEY` in your `.env` file.

| Parameter           | Type     | Description                                       |
| :------------------ | :------- | :------------------------------------------------ |
| `ETHERSCAN_API_KEY` | `string` | **Required**. Etherscan API key for Görli testnet |

```
ENABLE_TRANSACTION_CHECKS=etherscan
ETHERSCAN_API_KEY=00000000000000000000000000000000
```

You can [create a new API Key on Etherscan](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics). It’s free of charge.

### Redis

If you want to record transaction history in database I recommend to use Redis. Just set `ENABLE_TRANSACTION_CHECKS` to `redis` and add `REDIS_URL` in your `.env` file.

| Parameter   | Type     | Description                           |
| :---------- | :------- | :------------------------------------ |
| `REDIS_URL` | `string` | **Required**. Redis connection string |

```
ENABLE_TRANSACTION_CHECKS=redis
REDIS_URL=rediss://user:password@redis:6379
```

You can [create a Redis database on Upstash.com](https://upstash.com/). It’s free for the first 10.000 requests per month.

## Privileged wallets

From now on, the faucet supports priviledged wallets. The riviledged wallet can receive higher amounts of tokens per request and the limits are not apply to them.

### How to define amount of distributed ETH to privileged wallets?

Set the `NEXT_PUBLIC_PRIVILEGED_WALLET_ETH_AMOUNT` variable in your `.env` file. For example:

```
NEXT_PUBLIC_PRIVILEGED_WALLET_ETH_AMOUNT=64 # 64 ETH per claim
```

### How to define privileged wallets?

At the current moment, you will need to fork this repository and add wallet addresses into [consts/wallets.ts](consts/wallets.ts) file.

```
# Example
export const privilegedWallets = [
  "0x0000000000000000000000000000000000000000000000000000000000000001",
  "0x0000000000000000000000000000000000000000000000000000000000000002",
  "0x0000000000000000000000000000000000000000000000000000000000000003",
  ...,
  "0x0000000000000000000000000000000000000000000000000000000000009999"
]
```
