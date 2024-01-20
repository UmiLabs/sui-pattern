import { FieldsWithTypes, Type } from '../../../../_framework/util';
export declare function isString(type: Type): boolean;
export interface StringFields {
    bytes: Array<number>;
}
export declare class String {
    static readonly $typeName = "0x1::string::String";
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
    static fromFields(fields: Record<string, any>): String;
    static fromFieldsWithTypes(item: FieldsWithTypes): String;
    static fromBcs(data: Uint8Array): String;
}
