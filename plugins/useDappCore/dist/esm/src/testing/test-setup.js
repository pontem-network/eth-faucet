import 'mock-local-storage';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { supportBigNumber } from './bignumber';
let jsdomCleanup;
before(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    jsdomCleanup = require('jsdom-global')(undefined, { url: 'http://localhost/' });
});
after(() => jsdomCleanup === null || jsdomCleanup === void 0 ? void 0 : jsdomCleanup());
chai.use(chaiAsPromised);
chai.use((chai, utils) => {
    supportBigNumber(chai.Assertion, utils);
});
//# sourceMappingURL=test-setup.js.map