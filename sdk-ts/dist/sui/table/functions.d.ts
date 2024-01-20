import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";
export interface ContainsArgs {
    table: ObjectArg;
    k: GenericArg;
}
export declare function contains(txb: TransactionBlock, typeArgs: [Type, Type], args: ContainsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowArgs {
    table: ObjectArg;
    k: GenericArg;
}
export declare function borrow(txb: TransactionBlock, typeArgs: [Type, Type], args: BorrowArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowMutArgs {
    table: ObjectArg;
    k: GenericArg;
}
export declare function borrowMut(txb: TransactionBlock, typeArgs: [Type, Type], args: BorrowMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroyEmpty(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isEmpty(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function length(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveArgs {
    table: ObjectArg;
    k: GenericArg;
}
export declare function remove(txb: TransactionBlock, typeArgs: [Type, Type], args: RemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function new_(txb: TransactionBlock, typeArgs: [Type, Type]): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddArgs {
    table: ObjectArg;
    k: GenericArg;
    v: GenericArg;
}
export declare function add(txb: TransactionBlock, typeArgs: [Type, Type], args: AddArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function drop(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
