import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionBlock } from "@mysten/sui.js/transactions";
export interface BorrowArgs {
    object: ObjectArg;
    name: GenericArg;
}
export declare function borrow(txb: TransactionBlock, typeArgs: [Type, Type], args: BorrowArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowMutArgs {
    object: ObjectArg;
    name: GenericArg;
}
export declare function borrowMut(txb: TransactionBlock, typeArgs: [Type, Type], args: BorrowMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveArgs {
    object: ObjectArg;
    name: GenericArg;
}
export declare function remove(txb: TransactionBlock, typeArgs: [Type, Type], args: RemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface IdArgs {
    object: ObjectArg;
    name: GenericArg;
}
export declare function id(txb: TransactionBlock, typeArg: Type, args: IdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddArgs {
    object: ObjectArg;
    name: GenericArg;
    value: GenericArg;
}
export declare function add(txb: TransactionBlock, typeArgs: [Type, Type], args: AddArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface Exists_Args {
    object: ObjectArg;
    name: GenericArg;
}
export declare function exists_(txb: TransactionBlock, typeArg: Type, args: Exists_Args): import("@mysten/sui.js/transactions").TransactionResult;
export interface ExistsWithTypeArgs {
    object: ObjectArg;
    name: GenericArg;
}
export declare function existsWithType(txb: TransactionBlock, typeArgs: [Type, Type], args: ExistsWithTypeArgs): import("@mysten/sui.js/transactions").TransactionResult;
