import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isReferent(type: Type): boolean;
export interface ReferentFields<T0> {
    id: string;
    value: T0 | null;
}
export declare class Referent<T0> {
    static readonly $typeName = "0x2::borrow::Referent";
    static readonly $numTypeParams = 1;
    static get bcs(): <T0 extends BcsType<any, any>>(T0: T0) => BcsType<{
        id: string;
        value: {
            vec: any[];
        };
    }, {
        id: string;
        value: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly value: T0 | null;
    constructor(typeArg: Type, fields: ReferentFields<T0>);
    static fromFields<T0>(typeArg: Type, fields: Record<string, any>): Referent<T0>;
    static fromFieldsWithTypes<T0>(item: FieldsWithTypes): Referent<T0>;
    static fromBcs<T0>(typeArg: Type, data: Uint8Array): Referent<T0>;
}
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
