import { BigNumber } from 'ethers';
export function supportBigNumber(Assertion, utils) {
    Assertion.overwriteMethod('equals', override('eq', 'equal', utils));
    Assertion.overwriteMethod('equal', override('eq', 'equal', utils));
    Assertion.overwriteMethod('eq', override('eq', 'equal', utils));
    Assertion.overwriteMethod('above', override('gt', 'above', utils));
    Assertion.overwriteMethod('gt', override('gt', 'greater than', utils));
    Assertion.overwriteMethod('below', override('lt', 'below', utils));
    Assertion.overwriteMethod('lt', override('lt', 'less than', utils));
    Assertion.overwriteMethod('least', override('gte', 'at least', utils));
    Assertion.overwriteMethod('gte', override('gte', 'greater than or equal', utils));
    Assertion.overwriteMethod('most', override('lte', 'at most', utils));
    Assertion.overwriteMethod('lte', override('lte', 'less than or equal', utils));
    Assertion.overwriteMethod('within', overrideWithin(utils));
    Assertion.overwriteMethod('closeTo', overrideCloseTo(utils));
}
function override(method, name, utils) {
    return (_super) => overwriteBigNumberFunction(method, name, _super, utils);
}
function overwriteBigNumberFunction(functionName, readableName, _super, chaiUtils) {
    return function (...args) {
        const [actual] = args;
        const expected = chaiUtils.flag(this, 'object');
        if (chaiUtils.flag(this, 'doLength') && BigNumber.isBigNumber(actual)) {
            _super.apply(this, [actual.toNumber()]);
            return;
        }
        if (BigNumber.isBigNumber(expected) || BigNumber.isBigNumber(actual)) {
            this.assert(BigNumber.from(expected)[functionName](actual), `Expected "${expected}" to be ${readableName} ${actual}`, `Expected "${expected}" NOT to be ${readableName} ${actual}`, expected, actual);
        }
        else {
            _super.apply(this, args);
        }
    };
}
function overrideWithin(utils) {
    return (_super) => overwriteBigNumberWithin(_super, utils);
}
function overwriteBigNumberWithin(_super, chaiUtils) {
    return function (...args) {
        const [start, finish] = args;
        const expected = chaiUtils.flag(this, 'object');
        if (BigNumber.isBigNumber(expected) || BigNumber.isBigNumber(start) || BigNumber.isBigNumber(finish)) {
            this.assert(BigNumber.from(start).lte(expected) && BigNumber.from(finish).gte(expected), `Expected "${expected}" to be within [${[start, finish]}]`, `Expected "${expected}" NOT to be within [${[start, finish]}]`, [start, finish], expected);
        }
        else {
            _super.apply(this, args);
        }
    };
}
function overrideCloseTo(utils) {
    return (_super) => overwriteBigNumberCloseTo(_super, utils);
}
function overwriteBigNumberCloseTo(_super, chaiUtils) {
    return function (...args) {
        const [actual, delta] = args;
        const expected = chaiUtils.flag(this, 'object');
        if (BigNumber.isBigNumber(expected) || BigNumber.isBigNumber(actual) || BigNumber.isBigNumber(delta)) {
            this.assert(BigNumber.from(expected).sub(actual).abs().lte(delta), `Expected "${expected}" to be within ${delta} of ${actual}`, `Expected "${expected}" NOT to be within ${delta} of ${actual}`, `A number between ${BigNumber.from(actual).sub(delta)} and ${BigNumber.from(actual).add(delta)}`, expected);
        }
        else {
            _super.apply(this, args);
        }
    };
}
//# sourceMappingURL=bignumber.js.map