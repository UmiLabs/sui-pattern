import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface RemoveArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function remove(txb: TransactionBlock, typeArg: Type, args: RemoveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddArgs {
    ext: GenericArg;
    self: ObjectArg;
    cap: ObjectArg;
    permissions: bigint | TransactionArgument;
}
export declare function add(txb: TransactionBlock, typeArg: Type, args: AddArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface LockArgs {
    ext: GenericArg;
    self: ObjectArg;
    item: GenericArg;
    policy: ObjectArg;
}
export declare function lock(txb: TransactionBlock, typeArgs: [Type, Type], args: LockArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PlaceArgs {
    ext: GenericArg;
    self: ObjectArg;
    item: GenericArg;
    policy: ObjectArg;
}
export declare function place(txb: TransactionBlock, typeArgs: [Type, Type], args: PlaceArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function canLock(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function canPlace(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface DisableArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function disable(txb: TransactionBlock, typeArg: Type, args: DisableArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface EnableArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function enable(txb: TransactionBlock, typeArg: Type, args: EnableArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function extension(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function extensionMut(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isEnabled(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isInstalled(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface StorageArgs {
    ext: GenericArg;
    self: ObjectArg;
}
export declare function storage(txb: TransactionBlock, typeArg: Type, args: StorageArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface StorageMutArgs {
    ext: GenericArg;
    self: ObjectArg;
}
export declare function storageMut(txb: TransactionBlock, typeArg: Type, args: StorageMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
