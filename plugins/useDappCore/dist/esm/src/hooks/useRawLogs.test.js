import { constants, BigNumber, ethers, utils } from 'ethers';
import { expect } from 'chai';
import { ERC20MockInterface } from '../constants';
import { deployMockToken, MOCK_TOKEN_INITIAL_BALANCE, renderDAppHook, SECOND_MOCK_TOKEN_INITIAL_BALANCE, setupTestingConfig, } from '../testing';
import { useRawLogs } from './useRawLogs';
import { useSendTransaction } from './useSendTransaction';
const AddressZero = constants.AddressZero;
const { defaultAbiCoder, getAddress, hexStripZeros } = utils;
describe('useRawLogs', () => {
    let token;
    let secondToken;
    let config;
    let network1;
    let network2;
    const eventTopic = ethers.utils.id('Transfer(address,address,uint256)');
    beforeEach(async () => {
        ;
        ({ config, network1, network2 } = await setupTestingConfig());
        token = await deployMockToken(network1.deployer);
        secondToken = await deployMockToken(network2.deployer, SECOND_MOCK_TOKEN_INITIAL_BALANCE);
    });
    async function sendToken(signer, to, amount) {
        const { result, waitForCurrent, waitForNextUpdate } = await renderDAppHook(() => useSendTransaction({
            signer,
        }), { config });
        await waitForNextUpdate();
        const txData = ERC20MockInterface.encodeFunctionData('transfer(address,uint)', [to, amount]);
        const tx = {
            to: token.address,
            value: BigNumber.from(0),
            data: txData,
        };
        await result.current.sendTransaction(tx);
        await waitForCurrent((val) => val.state !== undefined);
        expect(result.current.state.status).to.eq('Success');
    }
    function extractAddress(address) {
        let result;
        result = hexStripZeros(address);
        while (result.length != 42)
            result = '0x0' + result.substring(2);
        return result;
    }
    it('Can get only the recent token transfer log', async () => {
        var _a;
        const blockNumber = await network1.provider.getBlockNumber();
        const from = network1.deployer;
        const to = network1.wallets[0];
        const fromAddress = from.address;
        const toAddress = to.address;
        const amount = BigNumber.from(1);
        await sendToken(from, toAddress, amount);
        const filter = {
            address: token.address,
            fromBlock: blockNumber + 1,
            toBlock: blockNumber + 2,
            topics: [eventTopic],
        };
        const { result, waitForCurrent } = await renderDAppHook(() => useRawLogs(filter), { config });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.length).to.equal(1, 'Number of logs');
        const log = result.current[0];
        expect(log.topics[0]).to.equal(eventTopic, 'Event topic');
        expect(getAddress(extractAddress(log.topics[1]))).to.equal(getAddress(fromAddress), 'From');
        expect(getAddress(extractAddress(log.topics[2]))).to.equal(getAddress(toAddress), 'To');
        const decodedData = defaultAbiCoder.decode(['uint'], log.data);
        expect(decodedData[0]).to.equal(amount, 'Amount');
    });
    it('Can get all token transfer logs', async () => {
        var _a;
        const from = network1.deployer;
        const to = network1.wallets[0];
        const fromAddress = from.address;
        const toAddress = to.address;
        const amount = BigNumber.from(1);
        await sendToken(from, toAddress, amount);
        const filter = {
            address: token.address,
            fromBlock: 0,
            toBlock: 'latest',
            topics: [eventTopic],
        };
        const { result, waitForCurrent } = await renderDAppHook(() => useRawLogs(filter), { config });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.length).to.equal(2, 'Number of logs');
        // Mint transfer event
        const log1 = result.current[0];
        expect(log1.topics[0]).to.equal(eventTopic, 'Event topic');
        expect(getAddress(extractAddress(log1.topics[1]))).to.equal(getAddress(AddressZero), 'From');
        expect(getAddress(extractAddress(log1.topics[2]))).to.equal(getAddress(network1.deployer.address), 'To');
        const decodedData1 = defaultAbiCoder.decode(['uint'], log1.data);
        expect(decodedData1[0]).to.equal(MOCK_TOKEN_INITIAL_BALANCE, 'Amount');
        // Recent transfer transaction log
        const log = result.current[1];
        expect(log.topics[0]).to.equal(eventTopic, 'Event topic');
        expect(getAddress(extractAddress(log.topics[1]))).to.equal(getAddress(fromAddress), 'From');
        expect(getAddress(extractAddress(log.topics[2]))).to.equal(getAddress(toAddress), 'To');
        const decodedData = defaultAbiCoder.decode(['uint'], log.data);
        expect(decodedData[0]).to.equal(amount, 'Amount');
    });
    it('Can get the mint transfer log', async () => {
        var _a;
        const filter = {
            address: token.address,
            fromBlock: 0,
            toBlock: 'latest',
            topics: [eventTopic],
        };
        const { result, waitForCurrent } = await renderDAppHook(() => useRawLogs(filter), { config });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.length).to.equal(1, 'Number of logs');
        const log = result.current[0];
        expect(log.topics[0]).to.equal(eventTopic, 'Event topic');
        expect(getAddress(extractAddress(log.topics[1]))).to.equal(getAddress(AddressZero), 'From');
        expect(getAddress(extractAddress(log.topics[2]))).to.equal(getAddress(network1.deployer.address), 'To');
        const decodedData = defaultAbiCoder.decode(['uint'], log.data);
        expect(decodedData[0]).to.equal(MOCK_TOKEN_INITIAL_BALANCE, 'Amount');
    });
    it('Can get the mint transfer log on the alternative chain', async () => {
        var _a;
        const filter = {
            address: secondToken.address,
            fromBlock: 0,
            toBlock: 'latest',
            topics: [eventTopic],
        };
        const { result, waitForCurrent } = await renderDAppHook(() => useRawLogs(filter), {
            config: Object.assign(Object.assign({}, config), { readOnlyChainId: network2.chainId }),
        });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.length).to.equal(1, 'Number of logs');
        const log = result.current[0];
        expect(log.topics[0]).to.equal(eventTopic, 'Event topic');
        expect(getAddress(extractAddress(log.topics[1]))).to.equal(getAddress(AddressZero), 'From');
        expect(getAddress(extractAddress(log.topics[2]))).to.equal(getAddress(network2.deployer.address), 'To');
        const decodedData = defaultAbiCoder.decode(['uint'], log.data);
        expect(decodedData[0]).to.equal(SECOND_MOCK_TOKEN_INITIAL_BALANCE, 'Amount');
    });
    it('Works if there are no logs', async () => {
        var _a;
        const filter = {
            address: secondToken.address,
            fromBlock: 0,
            toBlock: 'latest',
            topics: [eventTopic],
        };
        const { result, waitForCurrent } = await renderDAppHook(() => useRawLogs(filter), { config });
        await waitForCurrent((val) => val !== undefined);
        expect(result.error).to.be.undefined;
        expect((_a = result.current) === null || _a === void 0 ? void 0 : _a.length).to.equal(0, 'Number of logs');
    });
});
//# sourceMappingURL=useRawLogs.test.js.map