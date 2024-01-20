import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface NewArgs {
    id: string | TransactionArgument;
    address1: string | TransactionArgument;
    address2: string | TransactionArgument;
}
export declare function new_(txb: TransactionBlock, args: NewArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function membershipId(txb: TransactionBlock, membershipPointer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function authenticator(txb: TransactionBlock, membershipPointer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function subject(txb: TransactionBlock, membershipPointer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
