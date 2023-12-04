"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PontemL2 = void 0;
const chainExplorerLink_1 = require("../../helpers/chainExplorerLink");
const PontemL2explorer = 'http://13.58.56.126/'; //temp explorer link
exports.PontemL2 = {
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
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(PontemL2explorer),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(PontemL2explorer),
};
//# sourceMappingURL=ponteml2.js.map