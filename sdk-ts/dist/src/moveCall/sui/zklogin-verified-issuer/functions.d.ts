import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function delete_(txb: TransactionBlock, verifiedIssuer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function owner(txb: TransactionBlock, verifiedIssuer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function issuer(txb: TransactionBlock, verifiedIssuer: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckZkloginIssuerArgs {
    address: string | TransactionArgument;
    addressSeed: bigint | TransactionArgument;
    issuer: string | TransactionArgument;
}
export declare function checkZkloginIssuer(txb: TransactionBlock, args: CheckZkloginIssuerArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CheckZkloginIssuerInternalArgs {
    address: string | TransactionArgument;
    addressSeed: bigint | TransactionArgument;
    issuer: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function checkZkloginIssuerInternal(txb: TransactionBlock, args: CheckZkloginIssuerInternalArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface VerifyZkloginIssuerArgs {
    addressSeed: bigint | TransactionArgument;
    issuer: string | TransactionArgument;
}
export declare function verifyZkloginIssuer(txb: TransactionBlock, args: VerifyZkloginIssuerArgs): import("@mysten/sui.js/transactions").TransactionResult;
