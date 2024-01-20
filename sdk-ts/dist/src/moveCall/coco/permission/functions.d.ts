import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function canViewVisitors(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function canManageVisitors(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function canExportVisitorsCsv(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function canViewMembers(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function canManageMembers(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function canViewGatherings(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function canManageGatherings(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function listPermissions(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function isValidPermission(txb: TransactionBlock, string: string | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function assertValidPermission(txb: TransactionBlock, string: string | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
