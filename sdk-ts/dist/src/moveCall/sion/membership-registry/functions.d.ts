import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function new_(txb: TransactionBlock, address: string | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function create(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMembershipIdArgs {
    membershipRegistry: ObjectArg;
    address: string | TransactionArgument;
}
export declare function getMembershipId(txb: TransactionBlock, args: GetMembershipIdArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface InsertMemberArgs {
    membershipRegistry: ObjectArg;
    address: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function insertMember(txb: TransactionBlock, args: InsertMemberArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface InsertMemberInnerArgs {
    membershipRegistry: ObjectArg;
    address: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function insertMemberInner(txb: TransactionBlock, args: InsertMemberInnerArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ContainsMemberArgs {
    membershipRegistry: ObjectArg;
    address: string | TransactionArgument;
}
export declare function containsMember(txb: TransactionBlock, args: ContainsMemberArgs): import("@mysten/sui.js/transactions").TransactionResult;
