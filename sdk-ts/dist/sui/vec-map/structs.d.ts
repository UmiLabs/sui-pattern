import { FieldsWithTypes, Type } from "../../_framework/util";
import { BcsType } from "@mysten/bcs";
export declare function isEntry(type: Type): boolean;
export interface EntryFields<K, V> {
    key: K;
    value: V;
}
export declare class Entry<K, V> {
    static readonly $typeName = "0x2::vec_map::Entry";
    static readonly $numTypeParams = 2;
    static get bcs(): <K extends BcsType<any, any>, V extends BcsType<any, any>>(K: K, V: V) => BcsType<{
        key: K extends BcsType<infer U_2, any> ? U_2 : never;
        value: V extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        key: K extends BcsType<any, infer U_3> ? U_3 : never;
        value: V extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArgs: [Type, Type];
    readonly key: K;
    readonly value: V;
    constructor(typeArgs: [Type, Type], fields: EntryFields<K, V>);
    static fromFields<K, V>(typeArgs: [Type, Type], fields: Record<string, any>): Entry<K, V>;
    static fromFieldsWithTypes<K, V>(item: FieldsWithTypes): Entry<K, V>;
    static fromBcs<K, V>(typeArgs: [Type, Type], data: Uint8Array): Entry<K, V>;
}
export declare function isVecMap(type: Type): boolean;
export interface VecMapFields<K, V> {
    contents: Array<Entry<K, V>>;
}
export declare class VecMap<K, V> {
    static readonly $typeName = "0x2::vec_map::VecMap";
    static readonly $numTypeParams = 2;
    static get bcs(): <K extends BcsType<any, any>, V extends BcsType<any, any>>(K: K, V: V) => BcsType<{
        contents: {
            key: K extends BcsType<infer U_2, any> ? U_2 : never;
            value: V extends BcsType<infer U_2, any> ? U_2 : never;
        }[];
    }, {
        contents: Iterable<{
            key: K extends BcsType<any, infer U_3> ? U_3 : never;
            value: V extends BcsType<any, infer U_3> ? U_3 : never;
        }> & {
            length: number;
        };
    }>;
    readonly $typeArgs: [Type, Type];
    readonly contents: Array<Entry<K, V>>;
    constructor(typeArgs: [Type, Type], contents: Array<Entry<K, V>>);
    static fromFields<K, V>(typeArgs: [Type, Type], fields: Record<string, any>): VecMap<K, V>;
    static fromFieldsWithTypes<K, V>(item: FieldsWithTypes): VecMap<K, V>;
    static fromBcs<K, V>(typeArgs: [Type, Type], data: Uint8Array): VecMap<K, V>;
}
