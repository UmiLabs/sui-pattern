import { FieldsWithTypes, Type } from '../../../../_framework/util';
export declare function isID(type: Type): boolean;
export interface IDFields {
    bytes: string;
}
export declare class ID {
    static readonly $typeName = "0x2::object::ID";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: string;
    }, {
        bytes: string;
    }>;
    readonly bytes: string;
    constructor(bytes: string);
    static fromFields(fields: Record<string, any>): ID;
    static fromFieldsWithTypes(item: FieldsWithTypes): ID;
    static fromBcs(data: Uint8Array): ID;
}
export declare function isUID(type: Type): boolean;
export interface UIDFields {
    id: string;
}
export declare class UID {
    static readonly $typeName = "0x2::object::UID";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    readonly id: string;
    constructor(id: string);
    static fromFields(fields: Record<string, any>): UID;
    static fromFieldsWithTypes(item: FieldsWithTypes): UID;
    static fromBcs(data: Uint8Array): UID;
}
