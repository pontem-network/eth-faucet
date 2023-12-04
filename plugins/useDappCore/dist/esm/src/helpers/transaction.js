import { shortenString } from './common';
/**
 * @public
 */
export function shortenTransactionHash(transactionHash) {
    if (transactionHash.length < 10) {
        throw new TypeError('Invalid input, transaction hash need to have at least 10 characters');
    }
    return shortenString(transactionHash);
}
/**
 * @public
 */
export function shortenIfTransactionHash(transactionHash) {
    if (typeof transactionHash === 'string' && transactionHash.length > 0) {
        return shortenTransactionHash(transactionHash);
    }
    return '';
}
//# sourceMappingURL=transaction.js.map