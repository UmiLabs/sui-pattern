import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface Ed25519VerifyArgs {
    signature: Array<number | TransactionArgument> | TransactionArgument;
    publicKey: Array<number | TransactionArgument> | TransactionArgument;
    msg: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function ed25519Verify(txb: TransactionBlock, args: Ed25519VerifyArgs): import("@mysten/sui.js/transactions").TransactionResult;
