import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface ActiveJwkEqualArgs {
    a: ObjectArg;
    b: ObjectArg;
}
export declare function activeJwkEqual(txb: TransactionBlock, args: ActiveJwkEqualArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function checkSorted(txb: TransactionBlock, newActiveJwks: Array<ObjectArg> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function create(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function deduplicate(txb: TransactionBlock, jwks: Array<ObjectArg> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export interface ExpireJwksArgs {
    self: ObjectArg;
    minEpoch: bigint | TransactionArgument;
}
export declare function expireJwks(txb: TransactionBlock, args: ExpireJwksArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getActiveJwks(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface JwkEqualArgs {
    a: ObjectArg;
    b: ObjectArg;
}
export declare function jwkEqual(txb: TransactionBlock, args: JwkEqualArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface JwkIdEqualArgs {
    a: ObjectArg;
    b: ObjectArg;
}
export declare function jwkIdEqual(txb: TransactionBlock, args: JwkIdEqualArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface JwkLtArgs {
    a: ObjectArg;
    b: ObjectArg;
}
export declare function jwkLt(txb: TransactionBlock, args: JwkLtArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function loadInner(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function loadInnerMut(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface StringBytesLtArgs {
    a: string | TransactionArgument;
    b: string | TransactionArgument;
}
export declare function stringBytesLt(txb: TransactionBlock, args: StringBytesLtArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateAuthenticatorStateArgs {
    self: ObjectArg;
    newActiveJwks: Array<ObjectArg> | TransactionArgument;
}
export declare function updateAuthenticatorState(txb: TransactionBlock, args: UpdateAuthenticatorStateArgs): import("@mysten/sui.js/transactions").TransactionResult;
