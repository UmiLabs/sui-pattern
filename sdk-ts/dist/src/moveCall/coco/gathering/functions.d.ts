import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface NewArgs {
    string1: string | TransactionArgument;
    string2: string | TransactionArgument;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
    id: string | TransactionArgument;
    poapConfig: ObjectArg;
    clock: ObjectArg;
}
export declare function new_(txb: TransactionBlock, args: NewArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateNameArgs {
    gathering: ObjectArg;
    string: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function updateName(txb: TransactionBlock, args: UpdateNameArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateDescriptionArgs {
    gathering: ObjectArg;
    string: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function updateDescription(txb: TransactionBlock, args: UpdateDescriptionArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface NewPoapConfigArgs {
    string1: string | TransactionArgument;
    string2: string | TransactionArgument;
    string3: string | TransactionArgument;
}
export declare function newPoapConfig(txb: TransactionBlock, args: NewPoapConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateScheduleArgs {
    gathering: ObjectArg;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
    clock: ObjectArg;
}
export declare function updateSchedule(txb: TransactionBlock, args: UpdateScheduleArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdatePoapConfigArgs {
    gathering: ObjectArg;
    poapConfig: ObjectArg;
    clock: ObjectArg;
}
export declare function updatePoapConfig(txb: TransactionBlock, args: UpdatePoapConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface MintPoapArgs {
    gathering: ObjectArg;
    address: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function mintPoap(txb: TransactionBlock, args: MintPoapArgs): import("@mysten/sui.js/transactions").TransactionResult;
