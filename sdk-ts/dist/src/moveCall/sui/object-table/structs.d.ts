import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isObjectTable(type: Type): boolean;
export interface ObjectTableFields {
    id: string;
    size: bigint;
}
export declare class ObjectTable {
    static readonly $typeName = "0x2::object_table::ObjectTable";
    static readonly $numTypeParams = 2;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        size: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        size: string | number | bigint;
    }>;
    readonly $typeArgs: [Type, Type];
    readonly id: string;
    readonly size: bigint;
    constructor(typeArgs: [Type, Type], fields: ObjectTableFields);
    static fromFields(typeArgs: [Type, Type], fields: Record<string, any>): ObjectTable;
    static fromFieldsWithTypes(item: FieldsWithTypes): ObjectTable;
    static fromBcs(typeArgs: [Type, Type], data: Uint8Array): ObjectTable;
    static fromSuiParsedData(content: SuiParsedData): ObjectTable;
    static fetch(client: SuiClient, id: string): Promise<ObjectTable>;
}
