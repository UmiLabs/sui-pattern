import { FieldsWithTypes, Type } from "../../_framework/util";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isLinkedTable(type: Type): boolean;
export interface LinkedTableFields<K> {
    id: string;
    size: bigint;
    head: (K | null);
    tail: (K | null);
}
export declare class LinkedTable<K> {
    static readonly $typeName = "0x2::linked_table::LinkedTable";
    static readonly $numTypeParams = 2;
    static get bcs(): <K extends BcsType<any, any>>(K: K) => BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        size: string;
        head: any;
        tail: any;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        size: string | number | bigint;
        head: any;
        tail: any;
    }>;
    readonly $typeArgs: [Type, Type];
    readonly id: string;
    readonly size: bigint;
    readonly head: (K | null);
    readonly tail: (K | null);
    constructor(typeArgs: [Type, Type], fields: LinkedTableFields<K>);
    static fromFields<K>(typeArgs: [Type, Type], fields: Record<string, any>): LinkedTable<K>;
    static fromFieldsWithTypes<K>(item: FieldsWithTypes): LinkedTable<K>;
    static fromBcs<K>(typeArgs: [Type, Type], data: Uint8Array): LinkedTable<K>;
    static fromSuiParsedData(content: SuiParsedData): LinkedTable<unknown>;
    static fetch<K>(client: SuiClient, id: string): Promise<LinkedTable<K>>;
}
export declare function isNode(type: Type): boolean;
export interface NodeFields<K, V> {
    prev: (K | null);
    next: (K | null);
    value: V;
}
export declare class Node<K, V> {
    static readonly $typeName = "0x2::linked_table::Node";
    static readonly $numTypeParams = 2;
    static get bcs(): <K extends BcsType<any, any>, V extends BcsType<any, any>>(K: K, V: V) => BcsType<{
        prev: any;
        next: any;
        value: V extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        prev: any;
        next: any;
        value: V extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArgs: [Type, Type];
    readonly prev: (K | null);
    readonly next: (K | null);
    readonly value: V;
    constructor(typeArgs: [Type, Type], fields: NodeFields<K, V>);
    static fromFields<K, V>(typeArgs: [Type, Type], fields: Record<string, any>): Node<K, V>;
    static fromFieldsWithTypes<K, V>(item: FieldsWithTypes): Node<K, V>;
    static fromBcs<K, V>(typeArgs: [Type, Type], data: Uint8Array): Node<K, V>;
}
