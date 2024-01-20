import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface NewArgs {
    id1: string | TransactionArgument;
    id2: string | TransactionArgument;
    address: string | TransactionArgument;
}
export declare function new_(txb: TransactionBlock, args: NewArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function associationId(txb: TransactionBlock, membershipPointer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function membershipId(txb: TransactionBlock, membershipPointer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function subject(txb: TransactionBlock, membershipPointer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
