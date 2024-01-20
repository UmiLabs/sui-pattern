import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isVecSet(type: Type): boolean;
export interface VecSetFields<T0> {
    contents: Array<T0>;
}
export declare class VecSet<T0> {
    static readonly $typeName = "0x2::vec_set::VecSet";
    static readonly $numTypeParams = 1;
    static get bcs(): <T0 extends BcsType<any, any>>(T0: T0) => BcsType<{
        contents: any[];
    }, {
        contents: Iterable<any> & {
            length: number;
        };
    }>;
    readonly $typeArg: Type;
    readonly contents: Array<T0>;
    constructor(typeArg: Type, contents: Array<T0>);
    static fromFields<T0>(typeArg: Type, fields: Record<string, any>): VecSet<T0>;
    static fromFieldsWithTypes<T0>(item: FieldsWithTypes): VecSet<T0>;
    static fromBcs<T0>(typeArg: Type, data: Uint8Array): VecSet<T0>;
}
