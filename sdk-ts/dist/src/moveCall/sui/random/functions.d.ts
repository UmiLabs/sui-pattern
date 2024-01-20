import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function create(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function loadInner(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function loadInnerMut(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateRandomnessStateArgs {
    self: ObjectArg;
    newRound: bigint | TransactionArgument;
    newBytes: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function updateRandomnessState(txb: TransactionBlock, args: UpdateRandomnessStateArgs): import("@mysten/sui.js/transactions").TransactionResult;
