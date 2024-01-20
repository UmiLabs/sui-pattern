import { ObjectArg, Type } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface JoinArgs {
    self: ObjectArg;
    coin: ObjectArg;
}
export declare function join(txb: TransactionBlock, typeArg: Type, args: JoinArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SplitArgs {
    self: ObjectArg;
    splitAmount: bigint | TransactionArgument;
}
export declare function split(txb: TransactionBlock, typeArg: Type, args: SplitArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DivideAndKeepArgs {
    self: ObjectArg;
    n: bigint | TransactionArgument;
}
export declare function divideAndKeep(txb: TransactionBlock, typeArg: Type, args: DivideAndKeepArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface JoinVecArgs {
    self: ObjectArg;
    coins: Array<ObjectArg> | TransactionArgument;
}
export declare function joinVec(txb: TransactionBlock, typeArg: Type, args: JoinVecArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface JoinVecAndTransferArgs {
    coins: Array<ObjectArg> | TransactionArgument;
    receiver: string | TransactionArgument;
}
export declare function joinVecAndTransfer(txb: TransactionBlock, typeArg: Type, args: JoinVecAndTransferArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function keep(txb: TransactionBlock, typeArg: Type, c: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface SplitAndTransferArgs {
    c: ObjectArg;
    amount: bigint | TransactionArgument;
    recipient: string | TransactionArgument;
}
export declare function splitAndTransfer(txb: TransactionBlock, typeArg: Type, args: SplitAndTransferArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SplitVecArgs {
    self: ObjectArg;
    splitAmounts: Array<bigint | TransactionArgument> | TransactionArgument;
}
export declare function splitVec(txb: TransactionBlock, typeArg: Type, args: SplitVecArgs): import("@mysten/sui.js/transactions").TransactionResult;
