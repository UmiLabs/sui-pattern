import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { VecMap } from '../vec-map/structs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isDisplay(type: Type): boolean;
export interface DisplayFields {
    id: string;
    fields: VecMap<string, string>;
    version: number;
}
export declare class Display {
    static readonly $typeName = "0x2::display::Display";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        fields: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    bytes: number[];
                };
            }[];
        };
        version: number;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        fields: {
            contents: Iterable<{
                key: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                value: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
        version: number;
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly fields: VecMap<string, string>;
    readonly version: number;
    constructor(typeArg: Type, fields: DisplayFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): Display;
    static fromFieldsWithTypes(item: FieldsWithTypes): Display;
    static fromBcs(typeArg: Type, data: Uint8Array): Display;
    static fromSuiParsedData(content: SuiParsedData): Display;
    static fetch(client: SuiClient, id: string): Promise<Display>;
}
export declare function isDisplayCreated(type: Type): boolean;
export interface DisplayCreatedFields {
    id: string;
}
export declare class DisplayCreated {
    static readonly $typeName = "0x2::display::DisplayCreated";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    constructor(typeArg: Type, id: string);
    static fromFields(typeArg: Type, fields: Record<string, any>): DisplayCreated;
    static fromFieldsWithTypes(item: FieldsWithTypes): DisplayCreated;
    static fromBcs(typeArg: Type, data: Uint8Array): DisplayCreated;
}
export declare function isVersionUpdated(type: Type): boolean;
export interface VersionUpdatedFields {
    id: string;
    version: number;
    fields: VecMap<string, string>;
}
export declare class VersionUpdated {
    static readonly $typeName = "0x2::display::VersionUpdated";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        version: number;
        fields: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    bytes: number[];
                };
            }[];
        };
    }, {
        id: {
            bytes: string;
        };
        version: number;
        fields: {
            contents: Iterable<{
                key: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                value: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly version: number;
    readonly fields: VecMap<string, string>;
    constructor(typeArg: Type, fields: VersionUpdatedFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): VersionUpdated;
    static fromFieldsWithTypes(item: FieldsWithTypes): VersionUpdated;
    static fromBcs(typeArg: Type, data: Uint8Array): VersionUpdated;
}
