import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface NewArgs {
    string1: string | TransactionArgument;
    string2: string | TransactionArgument;
    string3: string | TransactionArgument;
    id: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function new_(txb: TransactionBlock, args: NewArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function init(txb: TransactionBlock, poap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
