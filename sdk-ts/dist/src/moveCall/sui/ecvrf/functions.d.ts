import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface EcvrfVerifyArgs {
    hash: Array<number | TransactionArgument> | TransactionArgument;
    alphaString: Array<number | TransactionArgument> | TransactionArgument;
    publicKey: Array<number | TransactionArgument> | TransactionArgument;
    proof: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function ecvrfVerify(txb: TransactionBlock, args: EcvrfVerifyArgs): import("@mysten/sui.js/transactions").TransactionResult;
