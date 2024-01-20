import { FieldsWithTypes, Type } from '../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isEntry(type: Type): boolean;
export interface EntryFields<T> {
    priority: bigint;
    value: T;
}
export declare class Entry<T> {
    static readonly $typeName = "0x2::priority_queue::Entry";
    static readonly $numTypeParams = 1;
    static get bcs(): <T extends BcsType<any, any>>(T: T) => BcsType<{
        priority: string;
        value: T extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        priority: string | number | bigint;
        value: T extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArg: Type;
    readonly priority: bigint;
    readonly value: T;
    constructor(typeArg: Type, fields: EntryFields<T>);
    static fromFields<T>(typeArg: Type, fields: Record<string, any>): Entry<T>;
    static fromFieldsWithTypes<T>(item: FieldsWithTypes): Entry<T>;
    static fromBcs<T>(typeArg: Type, data: Uint8Array): Entry<T>;
}
export declare function isPriorityQueue(type: Type): boolean;
export interface PriorityQueueFields<T> {
    entries: Array<Entry<T>>;
}
export declare class PriorityQueue<T> {
    static readonly $typeName = "0x2::priority_queue::PriorityQueue";
    static readonly $numTypeParams = 1;
    static get bcs(): <T extends BcsType<any, any>>(T: T) => BcsType<{
        entries: {
            priority: string;
            value: T extends BcsType<infer U_2, any> ? U_2 : never;
        }[];
    }, {
        entries: Iterable<{
            priority: string | number | bigint;
            value: T extends BcsType<any, infer U_3> ? U_3 : never;
        }> & {
            length: number;
        };
    }>;
    readonly $typeArg: Type;
    readonly entries: Array<Entry<T>>;
    constructor(typeArg: Type, entries: Array<Entry<T>>);
    static fromFields<T>(typeArg: Type, fields: Record<string, any>): PriorityQueue<T>;
    static fromFieldsWithTypes<T>(item: FieldsWithTypes): PriorityQueue<T>;
    static fromBcs<T>(typeArg: Type, data: Uint8Array): PriorityQueue<T>;
}
