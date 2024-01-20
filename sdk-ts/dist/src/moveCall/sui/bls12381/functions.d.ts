import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface Bls12381MinPkVerifyArgs {
    signature: Array<number | TransactionArgument> | TransactionArgument;
    publicKey: Array<number | TransactionArgument> | TransactionArgument;
    msg: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function bls12381MinPkVerify(txb: TransactionBlock, args: Bls12381MinPkVerifyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface Bls12381MinSigVerifyArgs {
    signature: Array<number | TransactionArgument> | TransactionArgument;
    publicKey: Array<number | TransactionArgument> | TransactionArgument;
    msg: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function bls12381MinSigVerify(txb: TransactionBlock, args: Bls12381MinSigVerifyArgs): import("@mysten/sui.js/transactions").TransactionResult;
