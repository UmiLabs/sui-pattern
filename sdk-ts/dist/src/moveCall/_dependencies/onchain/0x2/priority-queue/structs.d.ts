import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isPriorityQueue(type: Type): boolean;
export interface PriorityQueueFields<T0> {
    entries: Array<Entry<T0>>;
}
export declare class PriorityQueue<T0> {
    static readonly $typeName = "0x2::priority_queue::PriorityQueue";
    static readonly $numTypeParams = 1;
    static get bcs(): <T0 extends BcsType<any, any>>(T0: T0) => BcsType<{
        entries: {
            priority: string;
            value: T0 extends BcsType<infer U_2, any> ? U_2 : never;
        }[];
    }, {
        entries: Iterable<{
            priority: string | number | bigint;
            value: T0 extends BcsType<any, infer U_3> ? U_3 : never;
        }> & {
            length: number;
        };
    }>;
    readonly $typeArg: Type;
    readonly entries: Array<Entry<T0>>;
    constructor(typeArg: Type, entries: Array<Entry<T0>>);
    static fromFields<T0>(typeArg: Type, fields: Record<string, any>): PriorityQueue<T0>;
    static fromFieldsWithTypes<T0>(item: FieldsWithTypes): PriorityQueue<T0>;
    static fromBcs<T0>(typeArg: Type, data: Uint8Array): PriorityQueue<T0>;
}
export declare function isEntry(type: Type): boolean;
export interface EntryFields<T0> {
    priority: bigint;
    value: T0;
}
export declare class Entry<T0> {
    static readonly $typeName = "0x2::priority_queue::Entry";
    static readonly $numTypeParams = 1;
    static get bcs(): <T0 extends BcsType<any, any>>(T0: T0) => BcsType<{
        priority: string;
        value: T0 extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        priority: string | number | bigint;
        value: T0 extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArg: Type;
    readonly priority: bigint;
    readonly value: T0;
    constructor(typeArg: Type, fields: EntryFields<T0>);
    static fromFields<T0>(typeArg: Type, fields: Record<string, any>): Entry<T0>;
    static fromFieldsWithTypes<T0>(item: FieldsWithTypes): Entry<T0>;
    static fromBcs<T0>(typeArg: Type, data: Uint8Array): Entry<T0>;
}
