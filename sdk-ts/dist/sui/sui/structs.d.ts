import { FieldsWithTypes, Type } from "../../_framework/util";
export declare function isSUI(type: Type): boolean;
export interface SUIFields {
    dummyField: boolean;
}
export declare class SUI {
    static readonly $typeName = "0x2::sui::SUI";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    readonly dummyField: boolean;
    constructor(dummyField: boolean);
    static fromFields(fields: Record<string, any>): SUI;
    static fromFieldsWithTypes(item: FieldsWithTypes): SUI;
    static fromBcs(data: Uint8Array): SUI;
}
