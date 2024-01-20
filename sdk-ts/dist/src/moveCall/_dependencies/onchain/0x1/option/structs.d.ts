import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isOption(type: Type): boolean;
export interface OptionFields<T0> {
    vec: Array<T0>;
}
export declare class Option<T0> {
    static readonly $typeName = "0x1::option::Option";
    static readonly $numTypeParams = 1;
    static get bcs(): <T0 extends BcsType<any, any>>(T0: T0) => BcsType<{
        vec: any[];
    }, {
        vec: Iterable<any> & {
            length: number;
        };
    }>;
    readonly $typeArg: Type;
    readonly vec: Array<T0>;
    constructor(typeArg: Type, vec: Array<T0>);
    static fromFields<T0>(typeArg: Type, fields: Record<string, any>): Option<T0>;
    static fromFieldsWithTypes<T0>(item: FieldsWithTypes): Option<T0>;
    static fromBcs<T0>(typeArg: Type, data: Uint8Array): Option<T0>;
}
