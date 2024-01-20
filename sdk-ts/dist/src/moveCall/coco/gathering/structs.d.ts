import { Table } from '../../_dependencies/onchain/0x2/table/structs';
import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isGathering(type: Type): boolean;
export interface GatheringFields {
    id: string;
    name: string;
    description: string;
    associationId: string;
    poapConfig: PoapConfig;
    poapTable: Table;
    startAt: bigint;
    endAt: bigint;
    createdAt: bigint;
    updatedAt: bigint;
}
export declare class Gathering {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::gathering::Gathering";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        name: {
            bytes: number[];
        };
        description: {
            bytes: number[];
        };
        association_id: {
            bytes: string;
        };
        poap_config: {
            name: {
                bytes: number[];
            };
            description: {
                bytes: number[];
            };
            img_url: {
                bytes: number[];
            };
        };
        poap_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        start_at: string;
        end_at: string;
        created_at: string;
        updated_at: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        description: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        association_id: {
            bytes: string;
        };
        poap_config: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            description: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            img_url: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        poap_table: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        start_at: string | number | bigint;
        end_at: string | number | bigint;
        created_at: string | number | bigint;
        updated_at: string | number | bigint;
    }>;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly associationId: string;
    readonly poapConfig: PoapConfig;
    readonly poapTable: Table;
    readonly startAt: bigint;
    readonly endAt: bigint;
    readonly createdAt: bigint;
    readonly updatedAt: bigint;
    constructor(fields: GatheringFields);
    static fromFields(fields: Record<string, any>): Gathering;
    static fromFieldsWithTypes(item: FieldsWithTypes): Gathering;
    static fromBcs(data: Uint8Array): Gathering;
    static fromSuiParsedData(content: SuiParsedData): Gathering;
    static fetch(client: SuiClient, id: string): Promise<Gathering>;
}
export declare function isPoapConfig(type: Type): boolean;
export interface PoapConfigFields {
    name: string;
    description: string;
    imgUrl: string;
}
export declare class PoapConfig {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::gathering::PoapConfig";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        name: {
            bytes: number[];
        };
        description: {
            bytes: number[];
        };
        img_url: {
            bytes: number[];
        };
    }, {
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        description: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        img_url: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    readonly name: string;
    readonly description: string;
    readonly imgUrl: string;
    constructor(fields: PoapConfigFields);
    static fromFields(fields: Record<string, any>): PoapConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): PoapConfig;
    static fromBcs(data: Uint8Array): PoapConfig;
}
