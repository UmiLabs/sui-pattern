import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isEntry(type: Type): boolean;
export interface EntryFields<T0, T1> {
    key: T0;
    value: T1;
}
export declare class Entry<T0, T1> {
    static readonly $typeName = "0x2::vec_map::Entry";
    static readonly $numTypeParams = 2;
    static get bcs(): <T0 extends BcsType<any, any>, T1 extends BcsType<any, any>>(T0: T0, T1: T1) => BcsType<{
        key: T0 extends BcsType<infer U_2, any> ? U_2 : never;
        value: T1 extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        key: T0 extends BcsType<any, infer U_3> ? U_3 : never;
        value: T1 extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArgs: [Type, Type];
    readonly key: T0;
    readonly value: T1;
    constructor(typeArgs: [Type, Type], fields: EntryFields<T0, T1>);
    static fromFields<T0, T1>(typeArgs: [Type, Type], fields: Record<string, any>): Entry<T0, T1>;
    static fromFieldsWithTypes<T0, T1>(item: FieldsWithTypes): Entry<T0, T1>;
    static fromBcs<T0, T1>(typeArgs: [Type, Type], data: Uint8Array): Entry<T0, T1>;
}
export declare function isVecMap(type: Type): boolean;
export interface VecMapFields<T0, T1> {
    contents: Array<Entry<T0, T1>>;
}
export declare class VecMap<T0, T1> {
    static readonly $typeName = "0x2::vec_map::VecMap";
    static readonly $numTypeParams = 2;
    static get bcs(): <T0 extends BcsType<any, any>, T1 extends BcsType<any, any>>(T0: T0, T1: T1) => BcsType<{
        contents: {
            key: T0 extends BcsType<infer U_2, any> ? U_2 : never;
            value: T1 extends BcsType<infer U_2, any> ? U_2 : never;
        }[];
    }, {
        contents: Iterable<{
            key: T0 extends BcsType<any, infer U_3> ? U_3 : never;
            value: T1 extends BcsType<any, infer U_3> ? U_3 : never;
        }> & {
            length: number;
        };
    }>;
    readonly $typeArgs: [Type, Type];
    readonly contents: Array<Entry<T0, T1>>;
    constructor(typeArgs: [Type, Type], contents: Array<Entry<T0, T1>>);
    static fromFields<T0, T1>(typeArgs: [Type, Type], fields: Record<string, any>): VecMap<T0, T1>;
    static fromFieldsWithTypes<T0, T1>(item: FieldsWithTypes): VecMap<T0, T1>;
    static fromBcs<T0, T1>(typeArgs: [Type, Type], data: Uint8Array): VecMap<T0, T1>;
}
