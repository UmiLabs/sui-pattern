import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";
export interface ContainsArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function contains(txb: TransactionBlock, typeArg: Type, args: ContainsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function empty(txb: TransactionBlock, typeArg: Type): import("@mysten/sui.js/transactions").TransactionResult;
export interface InsertArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function insert(txb: TransactionBlock, typeArg: Type, args: InsertArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isEmpty(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function remove(txb: TransactionBlock, typeArg: Type, args: RemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function singleton(txb: TransactionBlock, typeArg: Type, key: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function size(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetIdxArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function getIdx(txb: TransactionBlock, typeArg: Type, args: GetIdxArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetIdxOptArgs {
    self: ObjectArg;
    key: GenericArg;
}
export declare function getIdxOpt(txb: TransactionBlock, typeArg: Type, args: GetIdxOptArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function keys(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function intoKeys(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
