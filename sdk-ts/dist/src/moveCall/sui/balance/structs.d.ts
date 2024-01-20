import { FieldsWithTypes, Type } from '../../_framework/util';
export declare function isBalance(type: Type): boolean;
export interface BalanceFields {
    value: bigint;
}
export declare class Balance {
    static readonly $typeName = "0x2::balance::Balance";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: string;
    }, {
        value: string | number | bigint;
    }>;
    readonly $typeArg: Type;
    readonly value: bigint;
    constructor(typeArg: Type, value: bigint);
    static fromFields(typeArg: Type, fields: Record<string, any>): Balance;
    static fromFieldsWithTypes(item: FieldsWithTypes): Balance;
    static fromBcs(typeArg: Type, data: Uint8Array): Balance;
}
export declare function isSupply(type: Type): boolean;
export interface SupplyFields {
    value: bigint;
}
export declare class Supply {
    static readonly $typeName = "0x2::balance::Supply";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: string;
    }, {
        value: string | number | bigint;
    }>;
    readonly $typeArg: Type;
    readonly value: bigint;
    constructor(typeArg: Type, value: bigint);
    static fromFields(typeArg: Type, fields: Record<string, any>): Supply;
    static fromFieldsWithTypes(item: FieldsWithTypes): Supply;
    static fromBcs(typeArg: Type, data: Uint8Array): Supply;
}
