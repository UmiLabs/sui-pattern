import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function value(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function balance(txb: TransactionBlock, typeArg: Type, coin: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroyZero(txb: TransactionBlock, typeArg: Type, c: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface JoinArgs {
    self: ObjectArg;
    c: ObjectArg;
}
export declare function join(txb: TransactionBlock, typeArg: Type, args: JoinArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface SplitArgs {
    self: ObjectArg;
    splitAmount: bigint | TransactionArgument;
}
export declare function split(txb: TransactionBlock, typeArg: Type, args: SplitArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function supply(txb: TransactionBlock, typeArg: Type, treasury: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function zero(txb: TransactionBlock, typeArg: Type): import("@mysten/sui.js/transactions").TransactionResult;
export declare function balanceMut(txb: TransactionBlock, typeArg: Type, coin: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface BurnArgs {
    cap: ObjectArg;
    c: ObjectArg;
}
export declare function burn(txb: TransactionBlock, typeArg: Type, args: BurnArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface CreateCurrencyArgs {
    witness: GenericArg;
    decimals: number | TransactionArgument;
    symbol: Array<number | TransactionArgument> | TransactionArgument;
    name: Array<number | TransactionArgument> | TransactionArgument;
    description: Array<number | TransactionArgument> | TransactionArgument;
    iconUrl: (ObjectArg | TransactionArgument | null);
}
export declare function createCurrency(txb: TransactionBlock, typeArg: Type, args: CreateCurrencyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface DivideIntoNArgs {
    self: ObjectArg;
    n: bigint | TransactionArgument;
}
export declare function divideIntoN(txb: TransactionBlock, typeArg: Type, args: DivideIntoNArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function fromBalance(txb: TransactionBlock, typeArg: Type, balance: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getDecimals(txb: TransactionBlock, typeArg: Type, metadata: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getDescription(txb: TransactionBlock, typeArg: Type, metadata: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getIconUrl(txb: TransactionBlock, typeArg: Type, metadata: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getName(txb: TransactionBlock, typeArg: Type, metadata: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getSymbol(txb: TransactionBlock, typeArg: Type, metadata: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function intoBalance(txb: TransactionBlock, typeArg: Type, coin: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface MintArgs {
    cap: ObjectArg;
    value: bigint | TransactionArgument;
}
export declare function mint(txb: TransactionBlock, typeArg: Type, args: MintArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface MintAndTransferArgs {
    c: ObjectArg;
    amount: bigint | TransactionArgument;
    recipient: string | TransactionArgument;
}
export declare function mintAndTransfer(txb: TransactionBlock, typeArg: Type, args: MintAndTransferArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface MintBalanceArgs {
    cap: ObjectArg;
    value: bigint | TransactionArgument;
}
export declare function mintBalance(txb: TransactionBlock, typeArg: Type, args: MintBalanceArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PutArgs {
    balance: ObjectArg;
    coin: ObjectArg;
}
export declare function put(txb: TransactionBlock, typeArg: Type, args: PutArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function supplyImmut(txb: TransactionBlock, typeArg: Type, treasury: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function supplyMut(txb: TransactionBlock, typeArg: Type, treasury: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface TakeArgs {
    balance: ObjectArg;
    value: bigint | TransactionArgument;
}
export declare function take(txb: TransactionBlock, typeArg: Type, args: TakeArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function totalSupply(txb: TransactionBlock, typeArg: Type, cap: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function treasuryIntoSupply(txb: TransactionBlock, typeArg: Type, treasury: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateDescriptionArgs {
    treasury: ObjectArg;
    metadata: ObjectArg;
    description: string | TransactionArgument;
}
export declare function updateDescription(txb: TransactionBlock, typeArg: Type, args: UpdateDescriptionArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateIconUrlArgs {
    treasury: ObjectArg;
    metadata: ObjectArg;
    url: string | TransactionArgument;
}
export declare function updateIconUrl(txb: TransactionBlock, typeArg: Type, args: UpdateIconUrlArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateNameArgs {
    treasury: ObjectArg;
    metadata: ObjectArg;
    name: string | TransactionArgument;
}
export declare function updateName(txb: TransactionBlock, typeArg: Type, args: UpdateNameArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface UpdateSymbolArgs {
    treasury: ObjectArg;
    metadata: ObjectArg;
    symbol: string | TransactionArgument;
}
export declare function updateSymbol(txb: TransactionBlock, typeArg: Type, args: UpdateSymbolArgs): import("@mysten/sui.js/transactions").TransactionResult;
