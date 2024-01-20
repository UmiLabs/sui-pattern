import { FieldsWithTypes, Type } from "../../_framework/util";
import { BcsType } from "@mysten/bcs";
export declare function isVecSet(type: Type): boolean;
export interface VecSetFields<K> {
    contents: Array<K>;
}
export declare class VecSet<K> {
    static readonly $typeName = "0x2::vec_set::VecSet";
    static readonly $numTypeParams = 1;
    static get bcs(): <K extends BcsType<any, any>>(K: K) => BcsType<{
        contents: any[];
    }, {
        contents: Iterable<any> & {
            length: number;
        };
    }>;
    readonly $typeArg: Type;
    readonly contents: Array<K>;
    constructor(typeArg: Type, contents: Array<K>);
    static fromFields<K>(typeArg: Type, fields: Record<string, any>): VecSet<K>;
    static fromFieldsWithTypes<K>(item: FieldsWithTypes): VecSet<K>;
    static fromBcs<K>(typeArg: Type, data: Uint8Array): VecSet<K>;
}
