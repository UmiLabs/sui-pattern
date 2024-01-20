import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function version(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateArgs {
    initVersion: bigint | TransactionArgument;
    initValue: GenericArg;
}
export declare function create(txb: TransactionBlock, typeArg: Type, args: CreateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroy(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function loadValue(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function loadValueMut(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function removeValueForUpgrade(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpgradeArgs {
    self: ObjectArg;
    newVersion: bigint | TransactionArgument;
    newValue: GenericArg;
    cap: ObjectArg;
}
export declare function upgrade(txb: TransactionBlock, typeArg: Type, args: UpgradeArgs): import("@mysten/sui.js/transactions").TransactionResult;
