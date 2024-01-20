import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function new_(txb: TransactionBlock, bytes: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toBytes(txb: TransactionBlock, typeArg: Type, value: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function intoRemainderBytes(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelAddress(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelBool(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelOptionAddress(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelOptionBool(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelOptionU128(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelOptionU64(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelOptionU8(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelU128(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelU64(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelU8(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelVecAddress(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelVecBool(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelVecLength(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelVecU128(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelVecU64(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelVecU8(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function peelVecVecU8(txb: TransactionBlock, bcs: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
