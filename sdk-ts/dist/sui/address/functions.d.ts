import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function length(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toBytes(txb: TransactionBlock, a: string | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function fromBytes(txb: TransactionBlock, bytes: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function fromU256(txb: TransactionBlock, n: bigint | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function max(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toAsciiString(txb: TransactionBlock, a: string | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toString(txb: TransactionBlock, a: string | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toU256(txb: TransactionBlock, a: string | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
