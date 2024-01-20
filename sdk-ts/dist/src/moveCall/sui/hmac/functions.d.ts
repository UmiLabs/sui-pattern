import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface HmacSha3256Args {
    key: Array<number | TransactionArgument> | TransactionArgument;
    msg: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function hmacSha3256(txb: TransactionBlock, args: HmacSha3256Args): import("@mysten/sui.js/transactions").TransactionResult;
