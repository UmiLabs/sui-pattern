import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface NewArgs {
    string: string | TransactionArgument;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function new_(txb: TransactionBlock, args: NewArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateArgs {
    membership: ObjectArg;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
}
export declare function update(txb: TransactionBlock, args: UpdateArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateArgs {
    string: string | TransactionArgument;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function create(txb: TransactionBlock, args: CreateArgs): import("@mysten/sui.js/transactions").TransactionResult;
