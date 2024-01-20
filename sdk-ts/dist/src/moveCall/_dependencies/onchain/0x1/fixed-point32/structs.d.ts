import { FieldsWithTypes, Type } from '../../../../_framework/util';
export declare function isFixedPoint32(type: Type): boolean;
export interface FixedPoint32Fields {
    value: bigint;
}
export declare class FixedPoint32 {
    static readonly $typeName = "0x1::fixed_point32::FixedPoint32";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: string;
    }, {
        value: string | number | bigint;
    }>;
    readonly value: bigint;
    constructor(value: bigint);
    static fromFields(fields: Record<string, any>): FixedPoint32;
    static fromFieldsWithTypes(item: FieldsWithTypes): FixedPoint32;
    static fromBcs(data: Uint8Array): FixedPoint32;
}
