import { ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface RemoveArgs {
    self: ObjectArg;
    name: string | TransactionArgument;
}
export declare function remove(txb: TransactionBlock, typeArg: Type, args: RemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function new_(txb: TransactionBlock, typeArg: Type, pub: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function version(txb: TransactionBlock, typeArg: Type, d: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddArgs {
    self: ObjectArg;
    name: string | TransactionArgument;
    value: string | TransactionArgument;
}
export declare function add(txb: TransactionBlock, typeArg: Type, args: AddArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddInternalArgs {
    display: ObjectArg;
    name: string | TransactionArgument;
    value: string | TransactionArgument;
}
export declare function addInternal(txb: TransactionBlock, typeArg: Type, args: AddInternalArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddMultipleArgs {
    self: ObjectArg;
    fields: Array<string | TransactionArgument> | TransactionArgument;
    values: Array<string | TransactionArgument> | TransactionArgument;
}
export declare function addMultiple(txb: TransactionBlock, typeArg: Type, args: AddMultipleArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function fields(txb: TransactionBlock, typeArg: Type, d: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function createAndKeep(txb: TransactionBlock, typeArg: Type, pub: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function createInternal(txb: TransactionBlock, typeArg: Type): import("@mysten/sui.js/transactions").TransactionResult;
export interface EditArgs {
    self: ObjectArg;
    name: string | TransactionArgument;
    value: string | TransactionArgument;
}
export declare function edit(txb: TransactionBlock, typeArg: Type, args: EditArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isAuthorized(txb: TransactionBlock, typeArg: Type, pub: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface NewWithFieldsArgs {
    pub: ObjectArg;
    fields: Array<string | TransactionArgument> | TransactionArgument;
    values: Array<string | TransactionArgument> | TransactionArgument;
}
export declare function newWithFields(txb: TransactionBlock, typeArg: Type, args: NewWithFieldsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function updateVersion(txb: TransactionBlock, typeArg: Type, display: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
