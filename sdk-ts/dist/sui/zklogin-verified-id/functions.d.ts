import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function owner(txb: TransactionBlock, verifiedId: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function audience(txb: TransactionBlock, verifiedId: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckZkloginIdArgs {
    address: string | TransactionArgument;
    keyClaimName: string | TransactionArgument;
    keyClaimValue: string | TransactionArgument;
    issuer: string | TransactionArgument;
    audience: string | TransactionArgument;
    pinHash: bigint | TransactionArgument;
}
export declare function checkZkloginId(txb: TransactionBlock, args: CheckZkloginIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function keyClaimName(txb: TransactionBlock, verifiedId: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function keyClaimValue(txb: TransactionBlock, verifiedId: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function issuer(txb: TransactionBlock, verifiedId: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckZkloginIdInternalArgs {
    address: string | TransactionArgument;
    keyClaimName: Array<number | TransactionArgument> | TransactionArgument;
    keyClaimValue: Array<number | TransactionArgument> | TransactionArgument;
    issuer: Array<number | TransactionArgument> | TransactionArgument;
    audience: Array<number | TransactionArgument> | TransactionArgument;
    pinHash: bigint | TransactionArgument;
}
export declare function checkZkloginIdInternal(txb: TransactionBlock, args: CheckZkloginIdInternalArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface VerifyZkloginIdArgs {
    keyClaimName: string | TransactionArgument;
    keyClaimValue: string | TransactionArgument;
    issuer: string | TransactionArgument;
    audience: string | TransactionArgument;
    pinHash: bigint | TransactionArgument;
}
export declare function verifyZkloginId(txb: TransactionBlock, args: VerifyZkloginIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
