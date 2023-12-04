import { Chain } from '../../constants'
import { getAddressLink, getTransactionLink } from '../../helpers/chainExplorerLink'

const PontemL2explorer = 'http://13.58.56.126/' //temp explorer link

export const PontemL2: Chain = {
  chainId: 901,
  chainName: 'Pontem L2 testnet',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  rpcUrl: 'https://magic.devops.mom/proxyd',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrl: PontemL2explorer,
  getExplorerAddressLink: getAddressLink(PontemL2explorer),
  getExplorerTransactionLink: getTransactionLink(PontemL2explorer),
}