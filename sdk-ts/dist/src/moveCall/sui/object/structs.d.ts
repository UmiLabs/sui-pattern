import { FieldsWithTypes, Type } from '../../_framework/util';
import { BcsType } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isDynamicFields(type: Type): boolean;
export interface DynamicFieldsFields<K> {
    names: Array<K>;
}
export declare class DynamicFields<K> {
    static readonly $typeName = "0x2::object::DynamicFields";
    static readonly $numTypeParams = 1;
    static get bcs(): <K extends BcsType<any, any>>(K: K) => BcsType<{
        names: any[];
    }, {
        names: Iterable<any> & {
            length: number;
        };
    }>;
    readonly $typeArg: Type;
    readonly names: Array<K>;
    constructor(typeArg: Type, names: Array<K>);
    static fromFields<K>(typeArg: Type, fields: Record<string, any>): DynamicFields<K>;
    static fromFieldsWithTypes<K>(item: FieldsWithTypes): DynamicFields<K>;
    static fromBcs<K>(typeArg: Type, data: Uint8Array): DynamicFields<K>;
    static fromSuiParsedData(content: SuiParsedData): DynamicFields<unknown>;
    static fetch<K>(client: SuiClient, id: string): Promise<DynamicFields<K>>;
}
export declare function isID(type: Type): boolean;
export interface IDFields {
    bytes: string;
}
export declare class ID {
    static readonly $typeName = "0x2::object::ID";
    static readonly $numTypeParams = 0;
    static get bcs(): BcsType<{
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
export declare function isOwnership(type: Type): boolean;
export interface OwnershipFields {
    owner: string;
    status: bigint;
}
export declare class Ownership {
    static readonly $typeName = "0x2::object::Ownership";
    static readonly $numTypeParams = 0;
    static get bcs(): BcsType<{
        owner: string;
        status: string;
    }, {
        owner: string;
        status: string | number | bigint;
    }>;
    readonly owner: string;
    readonly status: bigint;
    constructor(fields: OwnershipFields);
    static fromFields(fields: Record<string, any>): Ownership;
    static fromFieldsWithTypes(item: FieldsWithTypes): Ownership;
    static fromBcs(data: Uint8Array): Ownership;
    static fromSuiParsedData(content: SuiParsedData): Ownership;
    static fetch(client: SuiClient, id: string): Promise<Ownership>;
}
export declare function isUID(type: Type): boolean;
export interface UIDFields {
    id: string;
}
export declare class UID {
    static readonly $typeName = "0x2::object::UID";
    static readonly $numTypeParams = 0;
    static get bcs(): BcsType<{
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
