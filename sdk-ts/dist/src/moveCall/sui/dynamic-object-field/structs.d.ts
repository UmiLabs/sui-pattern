import { FieldsWithTypes, Type } from '../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isWrapper(type: Type): boolean;
export interface WrapperFields<Name> {
    name: Name;
}
export declare class Wrapper<Name> {
    static readonly $typeName = "0x2::dynamic_object_field::Wrapper";
    static readonly $numTypeParams = 1;
    static get bcs(): <Name extends BcsType<any, any>>(Name: Name) => BcsType<{
        name: Name extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        name: Name extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArg: Type;
    readonly name: Name;
    constructor(typeArg: Type, name: Name);
    static fromFields<Name>(typeArg: Type, fields: Record<string, any>): Wrapper<Name>;
    static fromFieldsWithTypes<Name>(item: FieldsWithTypes): Wrapper<Name>;
    static fromBcs<Name>(typeArg: Type, data: Uint8Array): Wrapper<Name>;
}
