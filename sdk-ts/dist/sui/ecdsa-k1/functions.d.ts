import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function decompressPubkey(txb: TransactionBlock, pubkey: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export interface Secp256k1EcrecoverArgs {
    signature: Array<number | TransactionArgument> | TransactionArgument;
    msg: Array<number | TransactionArgument> | TransactionArgument;
    hash: number | TransactionArgument;
}
export declare function secp256k1Ecrecover(txb: TransactionBlock, args: Secp256k1EcrecoverArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface Secp256k1VerifyArgs {
    signature: Array<number | TransactionArgument> | TransactionArgument;
    publicKey: Array<number | TransactionArgument> | TransactionArgument;
    msg: Array<number | TransactionArgument> | TransactionArgument;
    hash: number | TransactionArgument;
}
export declare function secp256k1Verify(txb: TransactionBlock, args: Secp256k1VerifyArgs): import("@mysten/sui.js/transactions").TransactionResult;
