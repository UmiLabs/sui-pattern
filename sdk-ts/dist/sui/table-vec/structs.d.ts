import { FieldsWithTypes, Type } from "../../_framework/util";
import { Table } from "../table/structs";
export declare function isTableVec(type: Type): boolean;
export interface TableVecFields {
    contents: Table;
}
export declare class TableVec {
    static readonly $typeName = "0x2::table_vec::TableVec";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        contents: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        contents: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    readonly $typeArg: Type;
    readonly contents: Table;
    constructor(typeArg: Type, contents: Table);
    static fromFields(typeArg: Type, fields: Record<string, any>): TableVec;
    static fromFieldsWithTypes(item: FieldsWithTypes): TableVec;
    static fromBcs(typeArg: Type, data: Uint8Array): TableVec;
}
