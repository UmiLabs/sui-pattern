import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface BorrowArgs {
    t: ObjectArg;
    i: bigint | TransactionArgument;
}
export declare function borrow(txb: TransactionBlock, typeArg: Type, args: BorrowArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowMutArgs {
    t: ObjectArg;
    i: bigint | TransactionArgument;
}
export declare function borrowMut(txb: TransactionBlock, typeArg: Type, args: BorrowMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroyEmpty(txb: TransactionBlock, typeArg: Type, t: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function empty(txb: TransactionBlock, typeArg: Type): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isEmpty(txb: TransactionBlock, typeArg: Type, t: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function length(txb: TransactionBlock, typeArg: Type, t: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function popBack(txb: TransactionBlock, typeArg: Type, t: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface PushBackArgs {
    t: ObjectArg;
    e: GenericArg;
}
export declare function pushBack(txb: TransactionBlock, typeArg: Type, args: PushBackArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function singleton(txb: TransactionBlock, typeArg: Type, e: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface SwapArgs {
    t: ObjectArg;
    i: bigint | TransactionArgument;
    j: bigint | TransactionArgument;
}
export declare function swap(txb: TransactionBlock, typeArg: Type, args: SwapArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SwapRemoveArgs {
    t: ObjectArg;
    i: bigint | TransactionArgument;
}
export declare function swapRemove(txb: TransactionBlock, typeArg: Type, args: SwapRemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function drop(txb: TransactionBlock, typeArg: Type, t: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
