import { ObjectTable } from '../../_dependencies/onchain/0x2/object-table/structs';
import { Table } from '../../_dependencies/onchain/0x2/table/structs';
import { VecSet } from '../../_dependencies/onchain/0x2/vec-set/structs';
import { FieldsWithTypes, Type } from '../../_framework/util';
import { Role } from '../role/structs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isAssociation(type: Type): boolean;
export interface AssociationFields {
    id: string;
    memberList: VecSet<string>;
    memberTable: ObjectTable;
    roleList: VecSet<Role>;
    roleTable: Table;
    gatherings: VecSet<string>;
}
export declare class Association {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::association::Association";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        member_list: {
            contents: any[];
        };
        member_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        role_list: {
            contents: any[];
        };
        role_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        gatherings: {
            contents: any[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        member_list: {
            contents: Iterable<any> & {
                length: number;
            };
        };
        member_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        role_list: {
            contents: Iterable<any> & {
                length: number;
            };
        };
        role_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        gatherings: {
            contents: Iterable<any> & {
                length: number;
            };
        };
    }>;
    readonly id: string;
    readonly memberList: VecSet<string>;
    readonly memberTable: ObjectTable;
    readonly roleList: VecSet<Role>;
    readonly roleTable: Table;
    readonly gatherings: VecSet<string>;
    constructor(fields: AssociationFields);
    static fromFields(fields: Record<string, any>): Association;
    static fromFieldsWithTypes(item: FieldsWithTypes): Association;
    static fromBcs(data: Uint8Array): Association;
    static fromSuiParsedData(content: SuiParsedData): Association;
    static fetch(client: SuiClient, id: string): Promise<Association>;
}
