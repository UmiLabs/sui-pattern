import { FieldsWithTypes, Type } from '../../../../_framework/util';
export declare function isBitVector(type: Type): boolean;
export interface BitVectorFields {
    length: bigint;
    bitField: Array<boolean>;
}
export declare class BitVector {
    static readonly $typeName = "0x1::bit_vector::BitVector";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        length: string;
        bit_field: boolean[];
    }, {
        length: string | number | bigint;
        bit_field: Iterable<boolean> & {
            length: number;
        };
    }>;
    readonly length: bigint;
    readonly bitField: Array<boolean>;
    constructor(fields: BitVectorFields);
    static fromFields(fields: Record<string, any>): BitVector;
    static fromFieldsWithTypes(item: FieldsWithTypes): BitVector;
    static fromBcs(data: Uint8Array): BitVector;
}
