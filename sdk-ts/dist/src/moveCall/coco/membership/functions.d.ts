import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface NewArgs {
    vecSet: ObjectArg;
    address: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function new_(txb: TransactionBlock, args: NewArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroy(txb: TransactionBlock, membership: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function roles(txb: TransactionBlock, membership: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function rolesMut(txb: TransactionBlock, membership: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
