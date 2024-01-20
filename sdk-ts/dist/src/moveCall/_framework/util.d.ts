import { TransactionArgument, TransactionBlock, TransactionObjectArgument } from '@mysten/sui.js/transactions';
import { ObjectArg as SuiObjectArg } from '@mysten/sui.js/bcs';
/** A Move type, e.g., `address`, `bool`, `u64`, `vector<u64>`, `0x2::sui::SUI`... */
export type Type = string;
export interface FieldsWithTypes {
    fields: Record<string, any>;
    type: string;
}
export type ObjectId = string;
export type ObjectCallArg = {
    Object: SuiObjectArg;
};
export type ObjectArg = string | ObjectCallArg | TransactionArgument;
export type PureArg = bigint | string | number | boolean | null | TransactionArgument | Array<PureArg>;
export type GenericArg = ObjectArg | PureArg | Array<ObjectArg> | Array<PureArg> | Array<GenericArg>;
export declare function parseTypeName(name: Type): {
    typeName: string;
    typeArgs: Type[];
};
export declare function isTransactionArgument(arg: GenericArg): arg is TransactionArgument;
export declare function isTransactionObjectArgument(arg: GenericArg): arg is TransactionObjectArgument;
export declare function obj(txb: TransactionBlock, arg: ObjectArg): {
    type: "pure";
    index: number;
    kind: "Input";
    value?: any;
} | TransactionObjectArgument;
export declare function pure(txb: TransactionBlock, arg: PureArg, type: Type): {
    type: "pure";
    index: number;
    kind: "Input";
    value?: any;
} | TransactionObjectArgument;
export declare function option(txb: TransactionBlock, type: Type, arg: GenericArg | null): {
    type: "pure";
    index: number;
    kind: "Input";
    value?: any;
} | TransactionObjectArgument;
export declare function generic(txb: TransactionBlock, type: Type, arg: GenericArg): {
    type: "pure";
    index: number;
    kind: "Input";
    value?: any;
} | TransactionObjectArgument;
export declare function vector(txb: TransactionBlock, itemType: Type, items: Array<GenericArg> | TransactionArgument): {
    type: "pure";
    index: number;
    kind: "Input";
    value?: any;
} | TransactionObjectArgument;
export declare function typeArgIsPure(type: Type): boolean;
export declare function compressSuiAddress(addr: string): string;
export declare function compressSuiType(type: string): string;
