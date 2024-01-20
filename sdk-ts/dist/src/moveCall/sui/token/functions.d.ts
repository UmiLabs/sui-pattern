import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function value(txb: TransactionBlock, typeArg: Type, t: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function key(txb: TransactionBlock, typeArg: Type): import("@mysten/sui.js/transactions").TransactionResult;
export declare function amount(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface AllowArgs {
    self: ObjectArg;
    cap: ObjectArg;
    action: string | TransactionArgument;
}
export declare function allow(txb: TransactionBlock, typeArg: Type, args: AllowArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function sender(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface TransferArgs {
    t: ObjectArg;
    recipient: string | TransactionArgument;
}
export declare function transfer(txb: TransactionBlock, typeArg: Type, args: TransferArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function recipient(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroyZero(txb: TransactionBlock, typeArg: Type, token: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface JoinArgs {
    token: ObjectArg;
    another: ObjectArg;
}
export declare function join(txb: TransactionBlock, typeArg: Type, args: JoinArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SplitArgs {
    token: ObjectArg;
    amount: bigint | TransactionArgument;
}
export declare function split(txb: TransactionBlock, typeArg: Type, args: SplitArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function zero(txb: TransactionBlock, typeArg: Type): import("@mysten/sui.js/transactions").TransactionResult;
export interface BurnArgs {
    cap: ObjectArg;
    token: ObjectArg;
}
export declare function burn(txb: TransactionBlock, typeArg: Type, args: BurnArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface MintArgs {
    cap: ObjectArg;
    amount: bigint | TransactionArgument;
}
export declare function mint(txb: TransactionBlock, typeArg: Type, args: MintArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ConfirmRequestArgs {
    policy: ObjectArg;
    request: ObjectArg;
}
export declare function confirmRequest(txb: TransactionBlock, typeArg: Type, args: ConfirmRequestArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface NewRequestArgs {
    name: string | TransactionArgument;
    amount: bigint | TransactionArgument;
    recipient: string | TransactionArgument | TransactionArgument | null;
    spentBalance: ObjectArg | TransactionArgument | null;
}
export declare function newRequest(txb: TransactionBlock, typeArg: Type, args: NewRequestArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RulesArgs {
    self: ObjectArg;
    action: string | TransactionArgument;
}
export declare function rules(txb: TransactionBlock, typeArg: Type, args: RulesArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function keep(txb: TransactionBlock, typeArg: Type, token: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function action(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddApprovalArgs {
    t: GenericArg;
    request: ObjectArg;
}
export declare function addApproval(txb: TransactionBlock, typeArgs: [Type, Type], args: AddApprovalArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddRuleConfigArgs {
    rule: GenericArg;
    self: ObjectArg;
    cap: ObjectArg;
    config: GenericArg;
}
export declare function addRuleConfig(txb: TransactionBlock, typeArgs: [Type, Type, Type], args: AddRuleConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface AddRuleForActionArgs {
    self: ObjectArg;
    cap: ObjectArg;
    action: string | TransactionArgument;
}
export declare function addRuleForAction(txb: TransactionBlock, typeArgs: [Type, Type], args: AddRuleForActionArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function approvals(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface ConfirmRequestMutArgs {
    policy: ObjectArg;
    request: ObjectArg;
}
export declare function confirmRequestMut(txb: TransactionBlock, typeArg: Type, args: ConfirmRequestMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ConfirmWithPolicyCapArgs {
    policyCap: ObjectArg;
    request: ObjectArg;
}
export declare function confirmWithPolicyCap(txb: TransactionBlock, typeArg: Type, args: ConfirmWithPolicyCapArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ConfirmWithTreasuryCapArgs {
    treasuryCap: ObjectArg;
    request: ObjectArg;
}
export declare function confirmWithTreasuryCap(txb: TransactionBlock, typeArg: Type, args: ConfirmWithTreasuryCapArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DisallowArgs {
    self: ObjectArg;
    cap: ObjectArg;
    action: string | TransactionArgument;
}
export declare function disallow(txb: TransactionBlock, typeArg: Type, args: DisallowArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface FlushArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function flush(txb: TransactionBlock, typeArg: Type, args: FlushArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function fromCoin(txb: TransactionBlock, typeArg: Type, coin: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function fromCoinAction(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function hasRuleConfig(txb: TransactionBlock, typeArgs: [Type, Type], self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function hasRuleConfigWithType(txb: TransactionBlock, typeArgs: [Type, Type, Type], self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface IsAllowedArgs {
    self: ObjectArg;
    action: string | TransactionArgument;
}
export declare function isAllowed(txb: TransactionBlock, typeArg: Type, args: IsAllowedArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function newPolicy(txb: TransactionBlock, typeArg: Type, treasuryCap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function spentBalance(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveRuleConfigArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function removeRuleConfig(txb: TransactionBlock, typeArgs: [Type, Type, Type], args: RemoveRuleConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RemoveRuleForActionArgs {
    self: ObjectArg;
    cap: ObjectArg;
    action: string | TransactionArgument;
}
export declare function removeRuleForAction(txb: TransactionBlock, typeArgs: [Type, Type], args: RemoveRuleForActionArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RuleConfigArgs {
    rule: GenericArg;
    self: ObjectArg;
}
export declare function ruleConfig(txb: TransactionBlock, typeArgs: [Type, Type, Type], args: RuleConfigArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface RuleConfigMutArgs {
    rule: GenericArg;
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function ruleConfigMut(txb: TransactionBlock, typeArgs: [Type, Type, Type], args: RuleConfigMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function sharePolicy(txb: TransactionBlock, typeArg: Type, policy: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function spend(txb: TransactionBlock, typeArg: Type, t: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function spendAction(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function spent(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toCoin(txb: TransactionBlock, typeArg: Type, t: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function toCoinAction(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function transferAction(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
