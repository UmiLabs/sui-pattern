import { FieldsWithTypes, Type } from "../../_framework/util";
import { BcsType } from "@mysten/bcs";
export declare function isBorrow(type: Type): boolean;
export interface BorrowFields {
    ref: string;
    obj: string;
}
export declare class Borrow {
    static readonly $typeName = "0x2::borrow::Borrow";
    static readonly $numTypeParams = 0;
    static get bcs(): BcsType<{
        ref: string;
        obj: {
            bytes: string;
        };
    }, {
        ref: string;
        obj: {
            bytes: string;
        };
    }>;
    readonly ref: string;
    readonly obj: string;
    constructor(fields: BorrowFields);
    static fromFields(fields: Record<string, any>): Borrow;
    static fromFieldsWithTypes(item: FieldsWithTypes): Borrow;
    static fromBcs(data: Uint8Array): Borrow;
}
export declare function isReferent(type: Type): boolean;
export interface ReferentFields<T> {
    id: string;
    value: (T | null);
}
export declare class Referent<T> {
    static readonly $typeName = "0x2::borrow::Referent";
    static readonly $numTypeParams = 1;
    static get bcs(): <T extends BcsType<any, any>>(T: T) => BcsType<{
        id: string;
        value: any;
    }, {
        id: string;
        value: any;
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly value: (T | null);
    constructor(typeArg: Type, fields: ReferentFields<T>);
    static fromFields<T>(typeArg: Type, fields: Record<string, any>): Referent<T>;
    static fromFieldsWithTypes<T>(item: FieldsWithTypes): Referent<T>;
    static fromBcs<T>(typeArg: Type, data: Uint8Array): Referent<T>;
}
