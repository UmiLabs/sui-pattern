import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function blake2b256(txb: TransactionBlock, data: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function keccak256(txb: TransactionBlock, data: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
