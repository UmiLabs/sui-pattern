import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isWrapper(type: Type): boolean;
export interface WrapperFields<T0> {
    name: T0;
}
export declare class Wrapper<T0> {
    static readonly $typeName = "0x2::dynamic_object_field::Wrapper";
    static readonly $numTypeParams = 1;
    static get bcs(): <T0 extends BcsType<any, any>>(T0: T0) => BcsType<{
        name: T0 extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        name: T0 extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArg: Type;
    readonly name: T0;
    constructor(typeArg: Type, name: T0);
    static fromFields<T0>(typeArg: Type, fields: Record<string, any>): Wrapper<T0>;
    static fromFieldsWithTypes<T0>(item: FieldsWithTypes): Wrapper<T0>;
    static fromBcs<T0>(typeArg: Type, data: Uint8Array): Wrapper<T0>;
}
