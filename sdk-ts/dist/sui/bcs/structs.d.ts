import { FieldsWithTypes, Type } from "../../_framework/util";
export declare function isBCS(type: Type): boolean;
export interface BCSFields {
    bytes: Array<number>;
}
export declare class BCS {
    static readonly $typeName = "0x2::bcs::BCS";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    readonly bytes: Array<number>;
    constructor(bytes: Array<number>);
    static fromFields(fields: Record<string, any>): BCS;
    static fromFieldsWithTypes(item: FieldsWithTypes): BCS;
    static fromBcs(data: Uint8Array): BCS;
}
