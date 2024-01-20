import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";
export interface ContainsArgs {
    bag: ObjectArg;
    k: GenericArg;
}
export declare function contains(txb: TransactionBlock, typeArg: Type, args: ContainsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowArgs {
    bag: ObjectArg;
    k: GenericArg;
}
export declare function borrow(txb: TransactionBlock, typeArgs: [Type, Type], args: BorrowArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowMutArgs {
    bag: ObjectArg;
    k: GenericArg;
}
export declare function borrowMut(txb: TransactionBlock, typeArgs: [Type, Type], args: BorrowMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroyEmpty(txb: TransactionBlock, bag: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isEmpty(txb: TransactionBlock, bag: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function length(txb: TransactionBlock, bag: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveArgs {
    bag: ObjectArg;
    k: GenericArg;
}
export declare function remove(txb: TransactionBlock, typeArgs: [Type, Type], args: RemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function new_(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddArgs {
    bag: ObjectArg;
    k: GenericArg;
    v: GenericArg;
}
export declare function add(txb: TransactionBlock, typeArgs: [Type, Type], args: AddArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ContainsWithTypeArgs {
    bag: ObjectArg;
    k: GenericArg;
}
export declare function containsWithType(txb: TransactionBlock, typeArgs: [Type, Type], args: ContainsWithTypeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ValueIdArgs {
    bag: ObjectArg;
    k: GenericArg;
}
export declare function valueId(txb: TransactionBlock, typeArg: Type, args: ValueIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
