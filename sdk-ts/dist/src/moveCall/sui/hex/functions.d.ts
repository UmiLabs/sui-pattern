import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function decode(txb: TransactionBlock, hex: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function decodeByte(txb: TransactionBlock, hex: number | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function encode(txb: TransactionBlock, bytes: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
