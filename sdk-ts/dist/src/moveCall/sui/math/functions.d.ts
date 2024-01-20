import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface MaxArgs {
    x: bigint | TransactionArgument;
    y: bigint | TransactionArgument;
}
export declare function max(txb: TransactionBlock, args: MaxArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DiffArgs {
    x: bigint | TransactionArgument;
    y: bigint | TransactionArgument;
}
export declare function diff(txb: TransactionBlock, args: DiffArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DivideAndRoundUpArgs {
    x: bigint | TransactionArgument;
    y: bigint | TransactionArgument;
}
export declare function divideAndRoundUp(txb: TransactionBlock, args: DivideAndRoundUpArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface MinArgs {
    x: bigint | TransactionArgument;
    y: bigint | TransactionArgument;
}
export declare function min(txb: TransactionBlock, args: MinArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PowArgs {
    base: bigint | TransactionArgument;
    exponent: number | TransactionArgument;
}
export declare function pow(txb: TransactionBlock, args: PowArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function sqrt(txb: TransactionBlock, x: bigint | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function sqrtU128(txb: TransactionBlock, x: bigint | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
