import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
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
export interface AddArgs {
    object: ObjectArg;
    name: GenericArg;
    value: GenericArg;
}
export declare function add(txb: TransactionBlock, typeArgs: [Type, Type], args: AddArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddChildObjectArgs {
    parent: string | TransactionArgument;
    child: GenericArg;
}
export declare function addChildObject(txb: TransactionBlock, typeArg: Type, args: AddChildObjectArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowChildObjectArgs {
    object: ObjectArg;
    id: string | TransactionArgument;
}
export declare function borrowChildObject(txb: TransactionBlock, typeArg: Type, args: BorrowChildObjectArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowChildObjectMutArgs {
    object: ObjectArg;
    id: string | TransactionArgument;
}
export declare function borrowChildObjectMut(txb: TransactionBlock, typeArg: Type, args: BorrowChildObjectMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export interface FieldInfoArgs {
    object: ObjectArg;
    name: GenericArg;
}
export declare function fieldInfo(txb: TransactionBlock, typeArg: Type, args: FieldInfoArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface FieldInfoMutArgs {
    object: ObjectArg;
    name: GenericArg;
}
export declare function fieldInfoMut(txb: TransactionBlock, typeArg: Type, args: FieldInfoMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface HasChildObjectArgs {
    parent: string | TransactionArgument;
    id: string | TransactionArgument;
}
export declare function hasChildObject(txb: TransactionBlock, args: HasChildObjectArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface HasChildObjectWithTyArgs {
    parent: string | TransactionArgument;
    id: string | TransactionArgument;
}
export declare function hasChildObjectWithTy(txb: TransactionBlock, typeArg: Type, args: HasChildObjectWithTyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface HashTypeAndKeyArgs {
    parent: string | TransactionArgument;
    k: GenericArg;
}
export declare function hashTypeAndKey(txb: TransactionBlock, typeArg: Type, args: HashTypeAndKeyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveChildObjectArgs {
    parent: string | TransactionArgument;
    id: string | TransactionArgument;
}
export declare function removeChildObject(txb: TransactionBlock, typeArg: Type, args: RemoveChildObjectArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveIfExistsArgs {
    object: ObjectArg;
    name: GenericArg;
}
export declare function removeIfExists(txb: TransactionBlock, typeArgs: [Type, Type], args: RemoveIfExistsArgs): import("@mysten/sui.js/transactions").TransactionResult;
