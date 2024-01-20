import { FieldsWithTypes, Type } from '../../../../_framework/util';
export declare function isReceiving(type: Type): boolean;
export interface ReceivingFields {
    id: string;
    version: bigint;
}
export declare class Receiving {
    static readonly $typeName = "0x2::transfer::Receiving";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        version: string;
    }, {
        id: {
            bytes: string;
        };
        version: string | number | bigint;
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly version: bigint;
    constructor(typeArg: Type, fields: ReceivingFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): Receiving;
    static fromFieldsWithTypes(item: FieldsWithTypes): Receiving;
    static fromBcs(typeArg: Type, data: Uint8Array): Receiving;
}
