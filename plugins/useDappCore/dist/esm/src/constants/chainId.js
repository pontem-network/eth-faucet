// organize imports in alphabet order to sparse the conflict when adding a new chain
import { Localhost, Hardhat, Arbitrum, ArbitrumRinkeby, ArbitrumGoerli, ArbitrumNova, Avalanche, AvalancheTestnet, Aurora, AuroraTestnet, BSC, BSCTestnet, Canto, CantoTestnet, Celo, CeloAlfajores, Cronos, CronosTestnet, Fantom, FantomTestnet, Harmony, Mainnet, Ropsten, Rinkeby, Gnosis, Goerli, Kovan, Andromeda, Stardust, Moonriver, MoonbaseAlpha, Moonbeam, Palm, PalmTestnet, Polygon, PontemL2, Mumbai, OasisEmerald, OasisEmeraldTestnet, Songbird, Flare, FlareCostonTestnet, FlareCoston2Testnet, Theta, ThetaTestnet, ThunderCore, ThunderCoreTestnet, OptimismGoerli, OptimismKovan, Optimism, Velas, VelasTestnet, BaseGoerli, Base, ZkSync, ZkSyncTestnet, ArbitrumRedditTestnet, Sepolia, RootstockMainnet, RootstockTestnet, KlaytnTestnet, Klaytn, ScrollAlphaTestnet, ScrollSepoliaTestnet, Linea, LineaTestnet, MantleTestnet, KromaSepoliaTestnet, KromaMainnet, } from '../model';
// rough alphabet order (put network from the same chain together)
export const DEFAULT_SUPPORTED_CHAINS = [
    Localhost,
    Hardhat,
    Avalanche,
    AvalancheTestnet,
    Arbitrum,
    ArbitrumRinkeby,
    ArbitrumGoerli,
    ArbitrumNova,
    Aurora,
    AuroraTestnet,
    Mainnet,
    Ropsten,
    Rinkeby,
    Goerli,
    Kovan,
    BSC,
    BSCTestnet,
    Canto,
    CantoTestnet,
    Celo,
    CeloAlfajores,
    Cronos,
    CronosTestnet,
    Fantom,
    FantomTestnet,
    Gnosis,
    Harmony,
    Andromeda,
    Stardust,
    Moonriver,
    MoonbaseAlpha,
    Moonbeam,
    Palm,
    PalmTestnet,
    Polygon,
    PontemL2,
    Mumbai,
    OasisEmerald,
    OasisEmeraldTestnet,
    Sepolia,
    Songbird,
    Flare,
    FlareCostonTestnet,
    FlareCoston2Testnet,
    Theta,
    ThetaTestnet,
    ThunderCore,
    ThunderCoreTestnet,
    OptimismGoerli,
    OptimismKovan,
    Optimism,
    Velas,
    VelasTestnet,
    ZkSync,
    ZkSyncTestnet,
    ArbitrumRedditTestnet,
    RootstockMainnet,
    RootstockTestnet,
    KlaytnTestnet,
    Klaytn,
    BaseGoerli,
    Base,
    ScrollAlphaTestnet,
    ScrollSepoliaTestnet,
    Linea,
    LineaTestnet,
    MantleTestnet,
    KromaSepoliaTestnet,
    KromaMainnet,
];
export var ChainId;
(function (ChainId) {
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Goerli"] = 5] = "Goerli";
    ChainId[ChainId["Sepolia"] = 11155111] = "Sepolia";
    ChainId[ChainId["ThunderCoreTestnet"] = 18] = "ThunderCoreTestnet";
    ChainId[ChainId["Canto"] = 7700] = "Canto";
    ChainId[ChainId["CantoTestnet"] = 740] = "CantoTestnet";
    ChainId[ChainId["Cronos"] = 25] = "Cronos";
    ChainId[ChainId["CronosTestnet"] = 338] = "CronosTestnet";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["BSCTestnet"] = 97] = "BSCTestnet";
    ChainId[ChainId["xDai"] = 100] = "xDai";
    ChainId[ChainId["Gnosis"] = 100] = "Gnosis";
    ChainId[ChainId["ThunderCore"] = 108] = "ThunderCore";
    ChainId[ChainId["Polygon"] = 137] = "Polygon";
    ChainId[ChainId["Theta"] = 361] = "Theta";
    ChainId[ChainId["ThetaTestnet"] = 365] = "ThetaTestnet";
    ChainId[ChainId["Moonriver"] = 1285] = "Moonriver";
    ChainId[ChainId["Moonbeam"] = 1284] = "Moonbeam";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId["Harmony"] = 1666600000] = "Harmony";
    ChainId[ChainId["Palm"] = 11297108109] = "Palm";
    ChainId[ChainId["PalmTestnet"] = 11297108099] = "PalmTestnet";
    ChainId[ChainId["Localhost"] = 1337] = "Localhost";
    ChainId[ChainId["Hardhat"] = 31337] = "Hardhat";
    ChainId[ChainId["Fantom"] = 250] = "Fantom";
    ChainId[ChainId["FantomTestnet"] = 4002] = "FantomTestnet";
    ChainId[ChainId["Avalanche"] = 43114] = "Avalanche";
    ChainId[ChainId["AvalancheTestnet"] = 43113] = "AvalancheTestnet";
    ChainId[ChainId["Celo"] = 42220] = "Celo";
    ChainId[ChainId["CeloAlfajores"] = 44787] = "CeloAlfajores";
    ChainId[ChainId["Songbird"] = 19] = "Songbird";
    ChainId[ChainId["Flare"] = 14] = "Flare";
    ChainId[ChainId["FlareCostonTestnet"] = 16] = "FlareCostonTestnet";
    ChainId[ChainId["FlareCoston2Testnet"] = 114] = "FlareCoston2Testnet";
    ChainId[ChainId["MoonbaseAlpha"] = 1287] = "MoonbaseAlpha";
    ChainId[ChainId["OasisEmerald"] = 42262] = "OasisEmerald";
    ChainId[ChainId["OasisEmeraldTestnet"] = 42261] = "OasisEmeraldTestnet";
    ChainId[ChainId["Stardust"] = 588] = "Stardust";
    ChainId[ChainId["Andromeda"] = 1088] = "Andromeda";
    ChainId[ChainId["OptimismGoerli"] = 420] = "OptimismGoerli";
    ChainId[ChainId["OptimismKovan"] = 69] = "OptimismKovan";
    ChainId[ChainId["Optimism"] = 10] = "Optimism";
    ChainId[ChainId["Arbitrum"] = 42161] = "Arbitrum";
    ChainId[ChainId["ArbitrumRinkeby"] = 421611] = "ArbitrumRinkeby";
    ChainId[ChainId["ArbitrumGoerli"] = 421613] = "ArbitrumGoerli";
    ChainId[ChainId["Aurora"] = 1313161554] = "Aurora";
    ChainId[ChainId["AuroraTestnet"] = 1313161555] = "AuroraTestnet";
    ChainId[ChainId["Velas"] = 106] = "Velas";
    ChainId[ChainId["VelasTestnet"] = 111] = "VelasTestnet";
    ChainId[ChainId["ZkSync"] = 324] = "ZkSync";
    ChainId[ChainId["ZkSyncTestnet"] = 280] = "ZkSyncTestnet";
    ChainId[ChainId["ArbitrumRedditTestnet"] = 5391184] = "ArbitrumRedditTestnet";
    ChainId[ChainId["RootstockMainnet"] = 30] = "RootstockMainnet";
    ChainId[ChainId["RootstockTestnet"] = 31] = "RootstockTestnet";
    ChainId[ChainId["KlaytnTestnet"] = 1001] = "KlaytnTestnet";
    ChainId[ChainId["Klaytn"] = 8217] = "Klaytn";
    ChainId[ChainId["BaseGoerli"] = 84531] = "BaseGoerli";
    ChainId[ChainId["Base"] = 8453] = "Base";
    ChainId[ChainId["ScrollAlpha"] = 534353] = "ScrollAlpha";
    ChainId[ChainId["ScrollSepolia"] = 534351] = "ScrollSepolia";
    ChainId[ChainId["Linea"] = 59144] = "Linea";
    ChainId[ChainId["LineaTestnet"] = 59140] = "LineaTestnet";
    ChainId[ChainId["ArbitrumNova"] = 42170] = "ArbitrumNova";
    ChainId[ChainId["MantleTestnet"] = 5001] = "MantleTestnet";
    ChainId[ChainId["Kroma"] = 255] = "Kroma";
    ChainId[ChainId["KromaSepolia"] = 2358] = "KromaSepolia";
    ChainId[ChainId["PontemL2"] = 901] = "PontemL2";
})(ChainId || (ChainId = {}));
//# sourceMappingURL=chainId.js.map