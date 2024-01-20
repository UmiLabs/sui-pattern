import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface ContainsArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function contains(txb: TransactionBlock, typeArgs: [Type, Type], args: ContainsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroyEmpty(txb: TransactionBlock, typeArgs: [Type, Type], self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function empty(txb: TransactionBlock, typeArgs: [Type, Type]): import("@mysten/sui.js/transactions").TransactionResult;
export interface InsertArgs {
    self: ObjectArg;
    key: GenericArg;
    value: GenericArg;
}
export declare function insert(txb: TransactionBlock, typeArgs: [Type, Type], args: InsertArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isEmpty(txb: TransactionBlock, typeArgs: [Type, Type], self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function remove(txb: TransactionBlock, typeArgs: [Type, Type], args: RemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function get(txb: TransactionBlock, typeArgs: [Type, Type], args: GetArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function size(txb: TransactionBlock, typeArgs: [Type, Type], self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetEntryByIdxArgs {
    self: ObjectArg;
    idx: bigint | TransactionArgument;
}
export declare function getEntryByIdx(txb: TransactionBlock, typeArgs: [Type, Type], args: GetEntryByIdxArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetEntryByIdxMutArgs {
    self: ObjectArg;
    idx: bigint | TransactionArgument;
}
export declare function getEntryByIdxMut(txb: TransactionBlock, typeArgs: [Type, Type], args: GetEntryByIdxMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetIdxArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function getIdx(txb: TransactionBlock, typeArgs: [Type, Type], args: GetIdxArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetIdxOptArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function getIdxOpt(txb: TransactionBlock, typeArgs: [Type, Type], args: GetIdxOptArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMutArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function getMut(txb: TransactionBlock, typeArgs: [Type, Type], args: GetMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function intoKeysValues(txb: TransactionBlock, typeArgs: [Type, Type], self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function keys(txb: TransactionBlock, typeArgs: [Type, Type], self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function pop(txb: TransactionBlock, typeArgs: [Type, Type], self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveEntryByIdxArgs {
    self: ObjectArg;
    idx: bigint | TransactionArgument;
}
export declare function removeEntryByIdx(txb: TransactionBlock, typeArgs: [Type, Type], args: RemoveEntryByIdxArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface TryGetArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function tryGet(txb: TransactionBlock, typeArgs: [Type, Type], args: TryGetArgs): import("@mysten/sui.js/transactions").TransactionResult;
