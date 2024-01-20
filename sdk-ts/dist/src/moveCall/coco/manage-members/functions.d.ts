import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export interface AssignRoleToMemberArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
    role: ObjectArg;
}
export declare function assignRoleToMember(txb: TransactionBlock, args: AssignRoleToMemberArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveRoleFromMemberArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
    role: ObjectArg;
}
export declare function removeRoleFromMember(txb: TransactionBlock, args: RemoveRoleFromMemberArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddMemberArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function addMember(txb: TransactionBlock, args: AddMemberArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ExpectCanManageUsersArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function expectCanManageUsers(txb: TransactionBlock, args: ExpectCanManageUsersArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveMemberArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function removeMember(txb: TransactionBlock, args: RemoveMemberArgs): import("@mysten/sui.js/transactions").TransactionResult;
