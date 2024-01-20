import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface MintPoapArgs {
    gathering: ObjectArg;
    clock: ObjectArg;
}
export declare function mintPoap(txb: TransactionBlock, args: MintPoapArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ExpectCanManageGatheringArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function expectCanManageGathering(txb: TransactionBlock, args: ExpectCanManageGatheringArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateGatheringArgs {
    string1: string | TransactionArgument;
    string2: string | TransactionArgument;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
    string3: string | TransactionArgument;
    string4: string | TransactionArgument;
    string5: string | TransactionArgument;
    association: ObjectArg;
    clock: ObjectArg;
}
export declare function createGathering(txb: TransactionBlock, args: CreateGatheringArgs): import("@mysten/sui.js/transactions").TransactionResult;
