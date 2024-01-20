import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface VerifyGroth16Bn254Args {
    vecU81: Array<number | TransactionArgument> | TransactionArgument;
    vecU82: Array<number | TransactionArgument> | TransactionArgument;
    vecU83: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function verifyGroth16Bn254(txb: TransactionBlock, args: VerifyGroth16Bn254Args): import("@mysten/sui.js/transactions").TransactionResult;
