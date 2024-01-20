import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isPoapObject(type: Type): boolean;
export interface PoapObjectFields {
    id: string;
    displayName: string;
    link: string;
    imgUrl: string;
    description: string;
    projectUrl: string;
    creatorDisplayName: string;
    createdBy: string;
    createdAt: bigint;
}
export declare class PoapObject {
    static readonly $typeName = "0xb0ec2d94cc8e2d4158044fdf8af47024604bb05ada18a7115b5a60bd1be090ff::poap::PoapObject";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        display_name: {
            bytes: number[];
        };
        link: {
            bytes: number[];
        };
        img_url: {
            bytes: number[];
        };
        description: {
            bytes: number[];
        };
        project_url: {
            bytes: number[];
        };
        creator_display_name: {
            bytes: number[];
        };
        created_by: string;
        created_at: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        display_name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        link: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        img_url: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        description: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        project_url: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        creator_display_name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        created_by: string;
        created_at: string | number | bigint;
    }>;
    readonly id: string;
    readonly displayName: string;
    readonly link: string;
    readonly imgUrl: string;
    readonly description: string;
    readonly projectUrl: string;
    readonly creatorDisplayName: string;
    readonly createdBy: string;
    readonly createdAt: bigint;
    constructor(fields: PoapObjectFields);
    static fromFields(fields: Record<string, any>): PoapObject;
    static fromFieldsWithTypes(item: FieldsWithTypes): PoapObject;
    static fromBcs(data: Uint8Array): PoapObject;
    static fromSuiParsedData(content: SuiParsedData): PoapObject;
    static fetch(client: SuiClient, id: string): Promise<PoapObject>;
}
export declare function isPOAP(type: Type): boolean;
export interface POAPFields {
    dummyField: boolean;
}
export declare class POAP {
    static readonly $typeName = "0xb0ec2d94cc8e2d4158044fdf8af47024604bb05ada18a7115b5a60bd1be090ff::poap::POAP";
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
