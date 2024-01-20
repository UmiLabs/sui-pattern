import { FieldsWithTypes, Type } from '../../../../_framework/util';
export declare function isTypeName(type: Type): boolean;
export interface TypeNameFields {
    name: string;
}
export declare class TypeName {
    static readonly $typeName = "0x1::type_name::TypeName";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        name: {
            bytes: number[];
        };
    }, {
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    readonly name: string;
    constructor(name: string);
    static fromFields(fields: Record<string, any>): TypeName;
    static fromFieldsWithTypes(item: FieldsWithTypes): TypeName;
    static fromBcs(data: Uint8Array): TypeName;
}
