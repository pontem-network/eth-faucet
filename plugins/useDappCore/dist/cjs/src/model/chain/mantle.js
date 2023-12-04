"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MantleTestnet = void 0;
const chainExplorerLink_1 = require("../../helpers/chainExplorerLink");
const mantleExplorerUrl = 'https://explorer.testnet.mantle.xyz';
exports.MantleTestnet = {
    chainId: 5001,
    chainName: 'Mantle Testnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x7eeFb76E4D201Eb7157c140F39E2992D53F71da7',
    multicall2Address: '0xd875b6E583cba79183be68E0af7cBad053338C95',
    rpcUrl: 'https://rpc.testnet.mantle.xyz',
    nativeCurrency: {
        name: 'Testnet BitDAO',
        symbol: 'BIT',
        decimals: 18,
    },
    blockExplorerUrl: mantleExplorerUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(mantleExplorerUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(mantleExplorerUrl),
};
exports.default = { MantleTestnet: exports.MantleTestnet };
//# sourceMappingURL=mantle.js.map