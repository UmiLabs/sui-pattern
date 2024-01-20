import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface BorrowArgs {
    self: ObjectArg;
    cap: ObjectArg;
    id: string | TransactionArgument;
}
export declare function borrow(txb: TransactionBlock, typeArg: Type, args: BorrowArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowMutArgs {
    self: ObjectArg;
    cap: ObjectArg;
    id: string | TransactionArgument;
}
export declare function borrowMut(txb: TransactionBlock, typeArg: Type, args: BorrowMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function default_(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function new_(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function uid(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function owner(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface TakeArgs {
    self: ObjectArg;
    cap: ObjectArg;
    id: string | TransactionArgument;
}
export declare function take(txb: TransactionBlock, typeArg: Type, args: TakeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UidMutAsOwnerArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function uidMutAsOwner(txb: TransactionBlock, args: UidMutAsOwnerArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface WithdrawArgs {
    self: ObjectArg;
    cap: ObjectArg;
    amount: (bigint | TransactionArgument | TransactionArgument | null);
}
export declare function withdraw(txb: TransactionBlock, args: WithdrawArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface BorrowValArgs {
    self: ObjectArg;
    cap: ObjectArg;
    id: string | TransactionArgument;
}
export declare function borrowVal(txb: TransactionBlock, typeArg: Type, args: BorrowValArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CloseAndWithdrawArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function closeAndWithdraw(txb: TransactionBlock, args: CloseAndWithdrawArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DelistArgs {
    self: ObjectArg;
    cap: ObjectArg;
    id: string | TransactionArgument;
}
export declare function delist(txb: TransactionBlock, typeArg: Type, args: DelistArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface HasAccessArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function hasAccess(txb: TransactionBlock, args: HasAccessArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface HasItemArgs {
    self: ObjectArg;
    id: string | TransactionArgument;
}
export declare function hasItem(txb: TransactionBlock, args: HasItemArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface HasItemWithTypeArgs {
    self: ObjectArg;
    id: string | TransactionArgument;
}
export declare function hasItemWithType(txb: TransactionBlock, typeArg: Type, args: HasItemWithTypeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface IsListedArgs {
    self: ObjectArg;
    id: string | TransactionArgument;
}
export declare function isListed(txb: TransactionBlock, args: IsListedArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface IsListedExclusivelyArgs {
    self: ObjectArg;
    id: string | TransactionArgument;
}
export declare function isListedExclusively(txb: TransactionBlock, args: IsListedExclusivelyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface IsLockedArgs {
    self: ObjectArg;
    id: string | TransactionArgument;
}
export declare function isLocked(txb: TransactionBlock, args: IsLockedArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function itemCount(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function kioskOwnerCapFor(txb: TransactionBlock, cap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface ListArgs {
    self: ObjectArg;
    cap: ObjectArg;
    id: string | TransactionArgument;
    price: bigint | TransactionArgument;
}
export declare function list(txb: TransactionBlock, typeArg: Type, args: ListArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ListWithPurchaseCapArgs {
    self: ObjectArg;
    cap: ObjectArg;
    id: string | TransactionArgument;
    minPrice: bigint | TransactionArgument;
}
export declare function listWithPurchaseCap(txb: TransactionBlock, typeArg: Type, args: ListWithPurchaseCapArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface LockArgs {
    self: ObjectArg;
    cap: ObjectArg;
    policy: ObjectArg;
    item: GenericArg;
}
export declare function lock(txb: TransactionBlock, typeArg: Type, args: LockArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface LockInternalArgs {
    self: ObjectArg;
    item: GenericArg;
}
export declare function lockInternal(txb: TransactionBlock, typeArg: Type, args: LockInternalArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PlaceArgs {
    self: ObjectArg;
    cap: ObjectArg;
    item: GenericArg;
}
export declare function place(txb: TransactionBlock, typeArg: Type, args: PlaceArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PlaceAndListArgs {
    self: ObjectArg;
    cap: ObjectArg;
    item: GenericArg;
    price: bigint | TransactionArgument;
}
export declare function placeAndList(txb: TransactionBlock, typeArg: Type, args: PlaceAndListArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PlaceInternalArgs {
    self: ObjectArg;
    item: GenericArg;
}
export declare function placeInternal(txb: TransactionBlock, typeArg: Type, args: PlaceInternalArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function profitsAmount(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface ProfitsMutArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function profitsMut(txb: TransactionBlock, args: ProfitsMutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PurchaseArgs {
    self: ObjectArg;
    id: string | TransactionArgument;
    payment: ObjectArg;
}
export declare function purchase(txb: TransactionBlock, typeArg: Type, args: PurchaseArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function purchaseCapItem(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function purchaseCapKiosk(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function purchaseCapMinPrice(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface PurchaseWithCapArgs {
    self: ObjectArg;
    purchaseCap: ObjectArg;
    payment: ObjectArg;
}
export declare function purchaseWithCap(txb: TransactionBlock, typeArg: Type, args: PurchaseWithCapArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ReturnPurchaseCapArgs {
    self: ObjectArg;
    purchaseCap: ObjectArg;
}
export declare function returnPurchaseCap(txb: TransactionBlock, typeArg: Type, args: ReturnPurchaseCapArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ReturnValArgs {
    self: ObjectArg;
    item: GenericArg;
    borrow: ObjectArg;
}
export declare function returnVal(txb: TransactionBlock, typeArg: Type, args: ReturnValArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SetAllowExtensionsArgs {
    self: ObjectArg;
    cap: ObjectArg;
    allowExtensions: boolean | TransactionArgument;
}
export declare function setAllowExtensions(txb: TransactionBlock, args: SetAllowExtensionsArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SetOwnerArgs {
    self: ObjectArg;
    cap: ObjectArg;
}
export declare function setOwner(txb: TransactionBlock, args: SetOwnerArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SetOwnerCustomArgs {
    self: ObjectArg;
    cap: ObjectArg;
    owner: string | TransactionArgument;
}
export declare function setOwnerCustom(txb: TransactionBlock, args: SetOwnerCustomArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function uidMut(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function uidMutInternal(txb: TransactionBlock, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
