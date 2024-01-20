import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function new_(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function create(txb: TransactionBlock, clock: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface MemberExistsArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function memberExists(txb: TransactionBlock, args: MemberExistsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function memberList(txb: TransactionBlock, association: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMembershipArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function getMembership(txb: TransactionBlock, args: GetMembershipArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetMembershipMutArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function getMembershipMut(txb: TransactionBlock, args: GetMembershipMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddMembershipArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
    membership: ObjectArg;
}
export declare function addMembership(txb: TransactionBlock, args: AddMembershipArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveMembershipArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function removeMembership(txb: TransactionBlock, args: RemoveMembershipArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function roleList(txb: TransactionBlock, association: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetRolesArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function getRoles(txb: TransactionBlock, args: GetRolesArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetRolesMutArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
}
export declare function getRolesMut(txb: TransactionBlock, args: GetRolesMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
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
export declare function roleTable(txb: TransactionBlock, association: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetPermissionsArgs {
    association: ObjectArg;
    role: ObjectArg;
}
export declare function getPermissions(txb: TransactionBlock, args: GetPermissionsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetPermissionsMutArgs {
    association: ObjectArg;
    role: ObjectArg;
}
export declare function getPermissionsMut(txb: TransactionBlock, args: GetPermissionsMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddPermissionToRoleArgs {
    association: ObjectArg;
    role: ObjectArg;
    string: string | TransactionArgument;
}
export declare function addPermissionToRole(txb: TransactionBlock, args: AddPermissionToRoleArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemovePermissionFromRoleArgs {
    association: ObjectArg;
    role: ObjectArg;
    string: string | TransactionArgument;
}
export declare function removePermissionFromRole(txb: TransactionBlock, args: RemovePermissionFromRoleArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface HasPermissionArgs {
    association: ObjectArg;
    address: string | TransactionArgument;
    string: string | TransactionArgument;
}
export declare function hasPermission(txb: TransactionBlock, args: HasPermissionArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddMemberArgs {
    association: ObjectArg;
    address1: string | TransactionArgument;
    address2: string | TransactionArgument;
    clock: ObjectArg;
}
export declare function addMember(txb: TransactionBlock, args: AddMemberArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddGatheringArgs {
    association: ObjectArg;
    gathering: ObjectArg;
}
export declare function addGathering(txb: TransactionBlock, args: AddGatheringArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveGatheringArgs {
    association: ObjectArg;
    gathering: ObjectArg;
}
export declare function removeGathering(txb: TransactionBlock, args: RemoveGatheringArgs): import("@mysten/sui.js/transactions").TransactionResult;
