import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface Secp256r1EcrecoverArgs {
    signature: Array<number | TransactionArgument> | TransactionArgument;
    msg: Array<number | TransactionArgument> | TransactionArgument;
    hash: number | TransactionArgument;
}
export declare function secp256r1Ecrecover(txb: TransactionBlock, args: Secp256r1EcrecoverArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface Secp256r1VerifyArgs {
    signature: Array<number | TransactionArgument> | TransactionArgument;
    publicKey: Array<number | TransactionArgument> | TransactionArgument;
    msg: Array<number | TransactionArgument> | TransactionArgument;
    hash: number | TransactionArgument;
}
export declare function secp256r1Verify(txb: TransactionBlock, args: Secp256r1VerifyArgs): import("@mysten/sui.js/transactions").TransactionResult;
