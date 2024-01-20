import { FieldsWithTypes, Type } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isVersionChangeCap(type: Type): boolean;
export interface VersionChangeCapFields {
    versionedId: string;
    oldVersion: bigint;
}
export declare class VersionChangeCap {
    static readonly $typeName = "0x2::versioned::VersionChangeCap";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        versioned_id: {
            bytes: string;
        };
        old_version: string;
    }, {
        versioned_id: {
            bytes: string;
        };
        old_version: string | number | bigint;
    }>;
    readonly versionedId: string;
    readonly oldVersion: bigint;
    constructor(fields: VersionChangeCapFields);
    static fromFields(fields: Record<string, any>): VersionChangeCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): VersionChangeCap;
    static fromBcs(data: Uint8Array): VersionChangeCap;
}
export declare function isVersioned(type: Type): boolean;
export interface VersionedFields {
    id: string;
    version: bigint;
}
export declare class Versioned {
    static readonly $typeName = "0x2::versioned::Versioned";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        version: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        version: string | number | bigint;
    }>;
    readonly id: string;
    readonly version: bigint;
    constructor(fields: VersionedFields);
    static fromFields(fields: Record<string, any>): Versioned;
    static fromFieldsWithTypes(item: FieldsWithTypes): Versioned;
    static fromBcs(data: Uint8Array): Versioned;
    static fromSuiParsedData(content: SuiParsedData): Versioned;
    static fetch(client: SuiClient, id: string): Promise<Versioned>;
}
