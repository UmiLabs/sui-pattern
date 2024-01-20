import { FieldsWithTypes, Type } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isTable(type: Type): boolean;
export interface TableFields {
    id: string;
    size: bigint;
}
export declare class Table {
    static readonly $typeName = "0x2::table::Table";
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
    constructor(typeArgs: [Type, Type], fields: TableFields);
    static fromFields(typeArgs: [Type, Type], fields: Record<string, any>): Table;
    static fromFieldsWithTypes(item: FieldsWithTypes): Table;
    static fromBcs(typeArgs: [Type, Type], data: Uint8Array): Table;
    static fromSuiParsedData(content: SuiParsedData): Table;
    static fetch(client: SuiClient, id: string): Promise<Table>;
}
