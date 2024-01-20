import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface DeriveIdArgs {
    txHash: Array<number | TransactionArgument> | TransactionArgument;
    idsCreated: bigint | TransactionArgument;
}
export declare function deriveId(txb: TransactionBlock, args: DeriveIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function idsCreated(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function digest(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function epoch(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function epochTimestampMs(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function freshObjectAddress(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function sender(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
