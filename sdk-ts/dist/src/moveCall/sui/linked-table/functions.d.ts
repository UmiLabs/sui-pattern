import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionBlock } from '@mysten/sui.js/transactions';
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
export declare function popBack(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface PushBackArgs {
    table: ObjectArg;
    k: GenericArg;
    value: GenericArg;
}
export declare function pushBack(txb: TransactionBlock, typeArgs: [Type, Type], args: PushBackArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveArgs {
    table: ObjectArg;
    k: GenericArg;
}
export declare function remove(txb: TransactionBlock, typeArgs: [Type, Type], args: RemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function new_(txb: TransactionBlock, typeArgs: [Type, Type]): import("@mysten/sui.js/transactions").TransactionResult;
export declare function front(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface PrevArgs {
    table: ObjectArg;
    k: GenericArg;
}
export declare function prev(txb: TransactionBlock, typeArgs: [Type, Type], args: PrevArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function back(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function drop(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface NextArgs {
    table: ObjectArg;
    k: GenericArg;
}
export declare function next(txb: TransactionBlock, typeArgs: [Type, Type], args: NextArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function popFront(txb: TransactionBlock, typeArgs: [Type, Type], table: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface PushFrontArgs {
    table: ObjectArg;
    k: GenericArg;
    value: GenericArg;
}
export declare function pushFront(txb: TransactionBlock, typeArgs: [Type, Type], args: PushFrontArgs): import("@mysten/sui.js/transactions").TransactionResult;
