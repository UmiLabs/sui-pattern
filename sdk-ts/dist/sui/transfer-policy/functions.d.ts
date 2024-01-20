import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function default_(txb: TransactionBlock, typeArg: Type, pub: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function new_(txb: TransactionBlock, typeArg: Type, pub: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function uid(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddReceiptArgs {
    rule: GenericArg;
    request: ObjectArg;
}
export declare function addReceipt(txb: TransactionBlock, typeArgs: [Type, Type], args: AddReceiptArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddRuleArgs {
    rule: GenericArg;
    policy: ObjectArg;
    cap: ObjectArg;
    cfg: GenericArg;
}
export declare function addRule(txb: TransactionBlock, typeArgs: [Type, Type, Type], args: AddRuleArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddToBalanceArgs {
    rule: GenericArg;
    policy: ObjectArg;
    coin: ObjectArg;
}
export declare function addToBalance(txb: TransactionBlock, typeArgs: [Type, Type], args: AddToBalanceArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ConfirmRequestArgs {
    self: ObjectArg;
    request: ObjectArg;
}
export declare function confirmRequest(txb: TransactionBlock, typeArg: Type, args: ConfirmRequestArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DestroyAndWithdrawArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function destroyAndWithdraw(txb: TransactionBlock, typeArg: Type, args: DestroyAndWithdrawArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function from(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface GetRuleArgs {
    rule: GenericArg;
    policy: ObjectArg;
}
export declare function getRule(txb: TransactionBlock, typeArgs: [Type, Type, Type], args: GetRuleArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function hasRule(txb: TransactionBlock, typeArgs: [Type, Type], policy: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function item(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface NewRequestArgs {
    item: string | TransactionArgument;
    paid: bigint | TransactionArgument;
    from: string | TransactionArgument;
}
export declare function newRequest(txb: TransactionBlock, typeArg: Type, args: NewRequestArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function paid(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveRuleArgs {
    policy: ObjectArg;
    cap: ObjectArg;
}
export declare function removeRule(txb: TransactionBlock, typeArgs: [Type, Type, Type], args: RemoveRuleArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function rules(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface UidMutAsOwnerArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function uidMutAsOwner(txb: TransactionBlock, typeArg: Type, args: UidMutAsOwnerArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface WithdrawArgs {
    self: ObjectArg;
    cap: ObjectArg;
    amount: (bigint | TransactionArgument | TransactionArgument | null);
}
export declare function withdraw(txb: TransactionBlock, typeArg: Type, args: WithdrawArgs): import("@mysten/sui.js/transactions").TransactionResult;
