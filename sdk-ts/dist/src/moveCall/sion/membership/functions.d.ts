import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface NewArgs {
    address1: string | TransactionArgument;
    address2: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function new_(txb: TransactionBlock, args: NewArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function authenticator(txb: TransactionBlock, membership: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function subject(txb: TransactionBlock, membership: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface InsertClaimArgs {
    membership: ObjectArg;
    string: string | TransactionArgument;
    vecU8: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function insertClaim(txb: TransactionBlock, args: InsertClaimArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface InsertClaimKeyToDigestArgs {
    membership: ObjectArg;
    string: string | TransactionArgument;
    vecU8: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function insertClaimKeyToDigest(txb: TransactionBlock, args: InsertClaimKeyToDigestArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface InsertClaimDigestToKeyArgs {
    membership: ObjectArg;
    string: string | TransactionArgument;
    vecU8: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function insertClaimDigestToKey(txb: TransactionBlock, args: InsertClaimDigestToKeyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveClaimArgs {
    membership: ObjectArg;
    string: string | TransactionArgument;
}
export declare function removeClaim(txb: TransactionBlock, args: RemoveClaimArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowClaimDigestByKeyArgs {
    membership: ObjectArg;
    string: string | TransactionArgument;
}
export declare function borrowClaimDigestByKey(txb: TransactionBlock, args: BorrowClaimDigestByKeyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowClaimKeyByDigestArgs {
    membership: ObjectArg;
    vecU8: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function borrowClaimKeyByDigest(txb: TransactionBlock, args: BorrowClaimKeyByDigestArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ContainsClaimKeyArgs {
    membership: ObjectArg;
    string: string | TransactionArgument;
}
export declare function containsClaimKey(txb: TransactionBlock, args: ContainsClaimKeyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ContainsClaimDigestArgs {
    membership: ObjectArg;
    vecU8: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function containsClaimDigest(txb: TransactionBlock, args: ContainsClaimDigestArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function lengthClaims(txb: TransactionBlock, membership: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isEmptyClaims(txb: TransactionBlock, membership: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface BoundCheckArgs {
    membership: ObjectArg;
    string: string | TransactionArgument;
    u641: bigint | TransactionArgument;
    u642: bigint | TransactionArgument;
    vecU81: Array<number | TransactionArgument> | TransactionArgument;
    vecU82: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function boundCheck(txb: TransactionBlock, args: BoundCheckArgs): import("@mysten/sui.js/transactions").TransactionResult;
