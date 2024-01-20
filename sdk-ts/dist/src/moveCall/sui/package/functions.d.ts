import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function version(txb: TransactionBlock, cap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function additivePolicy(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface AuthorizeUpgradeArgs {
    cap: ObjectArg;
    policy: number | TransactionArgument;
    digest: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function authorizeUpgrade(txb: TransactionBlock, args: AuthorizeUpgradeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function burnPublisher(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function claim(txb: TransactionBlock, typeArg: Type, otw: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function claimAndKeep(txb: TransactionBlock, typeArg: Type, otw: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface CommitUpgradeArgs {
    cap: ObjectArg;
    receipt: ObjectArg;
}
export declare function commitUpgrade(txb: TransactionBlock, args: CommitUpgradeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function compatiblePolicy(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function depOnlyPolicy(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function fromModule(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function fromPackage(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function makeImmutable(txb: TransactionBlock, cap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function onlyAdditiveUpgrades(txb: TransactionBlock, cap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function onlyDepUpgrades(txb: TransactionBlock, cap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function publishedModule(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function publishedPackage(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function receiptCap(txb: TransactionBlock, receipt: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function receiptPackage(txb: TransactionBlock, receipt: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface RestrictArgs {
    cap: ObjectArg;
    policy: number | TransactionArgument;
}
export declare function restrict(txb: TransactionBlock, args: RestrictArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function ticketDigest(txb: TransactionBlock, ticket: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function ticketPackage(txb: TransactionBlock, ticket: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function ticketPolicy(txb: TransactionBlock, ticket: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function upgradePackage(txb: TransactionBlock, cap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function upgradePolicy(txb: TransactionBlock, cap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
