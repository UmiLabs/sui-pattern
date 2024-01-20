import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface UpdateArgs {
    self: ObjectArg;
    url: string | TransactionArgument;
}
export declare function update(txb: TransactionBlock, args: UpdateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function innerUrl(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function newUnsafe(txb: TransactionBlock, url: string | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function newUnsafeFromBytes(txb: TransactionBlock, bytes: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
