import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface InsertArgs {
    pq: ObjectArg;
    priority: bigint | TransactionArgument;
    value: GenericArg;
}
export declare function insert(txb: TransactionBlock, typeArg: Type, args: InsertArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function new_(txb: TransactionBlock, typeArg: Type, entries: Array<ObjectArg> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateEntriesArgs {
    p: Array<bigint | TransactionArgument> | TransactionArgument;
    v: Array<GenericArg> | TransactionArgument;
}
export declare function createEntries(txb: TransactionBlock, typeArg: Type, args: CreateEntriesArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface MaxHeapifyRecursiveArgs {
    v: Array<ObjectArg> | TransactionArgument;
    len: bigint | TransactionArgument;
    i: bigint | TransactionArgument;
}
export declare function maxHeapifyRecursive(txb: TransactionBlock, typeArg: Type, args: MaxHeapifyRecursiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface NewEntryArgs {
    priority: bigint | TransactionArgument;
    value: GenericArg;
}
export declare function newEntry(txb: TransactionBlock, typeArg: Type, args: NewEntryArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function popMax(txb: TransactionBlock, typeArg: Type, pq: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function priorities(txb: TransactionBlock, typeArg: Type, pq: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RestoreHeapRecursiveArgs {
    v: Array<ObjectArg> | TransactionArgument;
    i: bigint | TransactionArgument;
}
export declare function restoreHeapRecursive(txb: TransactionBlock, typeArg: Type, args: RestoreHeapRecursiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
