import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isCocoPoap(type: Type): boolean;
export interface CocoPoapFields {
    id: string;
    name: string;
    description: string;
    imgUrl: string;
    gatheringId: string;
    createdBy: string;
    createdAt: bigint;
}
export declare class CocoPoap {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::poap::CocoPoap";
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
        img_url: {
            bytes: number[];
        };
        gathering_id: {
            bytes: string;
        };
        created_by: string;
        created_at: string;
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
        img_url: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        gathering_id: {
            bytes: string;
        };
        created_by: string;
        created_at: string | number | bigint;
    }>;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly imgUrl: string;
    readonly gatheringId: string;
    readonly createdBy: string;
    readonly createdAt: bigint;
    constructor(fields: CocoPoapFields);
    static fromFields(fields: Record<string, any>): CocoPoap;
    static fromFieldsWithTypes(item: FieldsWithTypes): CocoPoap;
    static fromBcs(data: Uint8Array): CocoPoap;
    static fromSuiParsedData(content: SuiParsedData): CocoPoap;
    static fetch(client: SuiClient, id: string): Promise<CocoPoap>;
}
export declare function isPOAP(type: Type): boolean;
export interface POAPFields {
    dummyField: boolean;
}
export declare class POAP {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::poap::POAP";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    readonly dummyField: boolean;
    constructor(dummyField: boolean);
    static fromFields(fields: Record<string, any>): POAP;
    static fromFieldsWithTypes(item: FieldsWithTypes): POAP;
    static fromBcs(data: Uint8Array): POAP;
}
