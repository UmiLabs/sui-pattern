import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isLinkedTable(type: Type): boolean;
export interface LinkedTableFields<T0> {
    id: string;
    size: bigint;
    head: T0 | null;
    tail: T0 | null;
}
export declare class LinkedTable<T0> {
    static readonly $typeName = "0x2::linked_table::LinkedTable";
    static readonly $numTypeParams = 2;
    static get bcs(): <T0 extends BcsType<any, any>>(T0: T0) => BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        size: string;
        head: {
            vec: any[];
        };
        tail: {
            vec: any[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        size: string | number | bigint;
        head: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        tail: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    readonly $typeArgs: [Type, Type];
    readonly id: string;
    readonly size: bigint;
    readonly head: T0 | null;
    readonly tail: T0 | null;
    constructor(typeArgs: [Type, Type], fields: LinkedTableFields<T0>);
    static fromFields<T0>(typeArgs: [Type, Type], fields: Record<string, any>): LinkedTable<T0>;
    static fromFieldsWithTypes<T0>(item: FieldsWithTypes): LinkedTable<T0>;
    static fromBcs<T0>(typeArgs: [Type, Type], data: Uint8Array): LinkedTable<T0>;
    static fromSuiParsedData(content: SuiParsedData): LinkedTable<unknown>;
    static fetch<T0>(client: SuiClient, id: string): Promise<LinkedTable<T0>>;
}
export declare function isNode(type: Type): boolean;
export interface NodeFields<T0, T1> {
    prev: T0 | null;
    next: T0 | null;
    value: T1;
}
export declare class Node<T0, T1> {
    static readonly $typeName = "0x2::linked_table::Node";
    static readonly $numTypeParams = 2;
    static get bcs(): <T0 extends BcsType<any, any>, T1 extends BcsType<any, any>>(T0: T0, T1: T1) => BcsType<{
        prev: {
            vec: any[];
        };
        next: {
            vec: any[];
        };
        value: T1 extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        prev: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        next: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        value: T1 extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArgs: [Type, Type];
    readonly prev: T0 | null;
    readonly next: T0 | null;
    readonly value: T1;
    constructor(typeArgs: [Type, Type], fields: NodeFields<T0, T1>);
    static fromFields<T0, T1>(typeArgs: [Type, Type], fields: Record<string, any>): Node<T0, T1>;
    static fromFieldsWithTypes<T0, T1>(item: FieldsWithTypes): Node<T0, T1>;
    static fromBcs<T0, T1>(typeArgs: [Type, Type], data: Uint8Array): Node<T0, T1>;
}
