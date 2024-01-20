import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function value(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function createStakingRewards(txb: TransactionBlock, typeArg: Type, value: bigint | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function createSupply(txb: TransactionBlock, typeArg: Type, t: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface DecreaseSupplyArgs {
    self: ObjectArg;
    balance: ObjectArg;
}
export declare function decreaseSupply(txb: TransactionBlock, typeArg: Type, args: DecreaseSupplyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroyStorageRebates(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroySupply(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroyZero(txb: TransactionBlock, typeArg: Type, balance: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface IncreaseSupplyArgs {
    self: ObjectArg;
    value: bigint | TransactionArgument;
}
export declare function increaseSupply(txb: TransactionBlock, typeArg: Type, args: IncreaseSupplyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface JoinArgs {
    self: ObjectArg;
    balance: ObjectArg;
}
export declare function join(txb: TransactionBlock, typeArg: Type, args: JoinArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SplitArgs {
    self: ObjectArg;
    value: bigint | TransactionArgument;
}
export declare function split(txb: TransactionBlock, typeArg: Type, args: SplitArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function supplyValue(txb: TransactionBlock, typeArg: Type, supply: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function withdrawAll(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function zero(txb: TransactionBlock, typeArg: Type): import("@mysten/sui.js/transactions").TransactionResult;
