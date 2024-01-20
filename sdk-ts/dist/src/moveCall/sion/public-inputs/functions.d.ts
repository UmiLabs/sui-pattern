import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface NewArgs {
    vecU8: Array<number | TransactionArgument> | TransactionArgument;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
}
export declare function new_(txb: TransactionBlock, args: NewArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toBytes(txb: TransactionBlock, publicInputsArgs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface BuildPublicInputsBytesArgs {
    vecU8: Array<number | TransactionArgument> | TransactionArgument;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
}
export declare function buildPublicInputsBytes(txb: TransactionBlock, args: BuildPublicInputsBytesArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toLeBytes(txb: TransactionBlock, typeArg: Type, t0: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
