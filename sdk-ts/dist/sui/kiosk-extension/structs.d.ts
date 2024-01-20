import { FieldsWithTypes, Type } from "../../_framework/util";
import { Bag } from "../bag/structs";
export declare function isExtension(type: Type): boolean;
export interface ExtensionFields {
    storage: Bag;
    permissions: bigint;
    isEnabled: boolean;
}
export declare class Extension {
    static readonly $typeName = "0x2::kiosk_extension::Extension";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        storage: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        permissions: string;
        is_enabled: boolean;
    }, {
        storage: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        permissions: string | number | bigint;
        is_enabled: boolean;
    }>;
    readonly storage: Bag;
    readonly permissions: bigint;
    readonly isEnabled: boolean;
    constructor(fields: ExtensionFields);
    static fromFields(fields: Record<string, any>): Extension;
    static fromFieldsWithTypes(item: FieldsWithTypes): Extension;
    static fromBcs(data: Uint8Array): Extension;
}
export declare function isExtensionKey(type: Type): boolean;
export interface ExtensionKeyFields {
    dummyField: boolean;
}
export declare class ExtensionKey {
    static readonly $typeName = "0x2::kiosk_extension::ExtensionKey";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    readonly $typeArg: Type;
    readonly dummyField: boolean;
    constructor(typeArg: Type, dummyField: boolean);
    static fromFields(typeArg: Type, fields: Record<string, any>): ExtensionKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): ExtensionKey;
    static fromBcs(typeArg: Type, data: Uint8Array): ExtensionKey;
}
