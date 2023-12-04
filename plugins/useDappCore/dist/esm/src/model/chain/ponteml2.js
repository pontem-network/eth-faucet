import { getAddressLink, getTransactionLink } from '../../helpers/chainExplorerLink';
const PontemL2explorer = 'http://13.58.56.126/'; //temp explorer link
export const PontemL2 = {
    chainId: 901,
    chainName: 'Pontem L2 testnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xEb533ee5687044E622C69c58B1B12329F56eD9ad',
    rpcUrl: 'https://magic.devops.mom/proxyd',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    blockExplorerUrl: PontemL2explorer,
    getExplorerAddressLink: getAddressLink(PontemL2explorer),
    getExplorerTransactionLink: getTransactionLink(PontemL2explorer),
};
//# sourceMappingURL=ponteml2.js.map