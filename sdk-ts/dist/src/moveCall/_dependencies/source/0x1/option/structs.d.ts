import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
export declare function isOption(type: Type): boolean;
export interface OptionFields<Element> {
    vec: Array<Element>;
}
export declare class Option<Element> {
    static readonly $typeName = "0x1::option::Option";
    static readonly $numTypeParams = 1;
    static get bcs(): <Element extends BcsType<any, any>>(Element: Element) => BcsType<{
        vec: any[];
    }, {
        vec: Iterable<any> & {
            length: number;
        };
    }>;
    readonly $typeArg: Type;
    readonly vec: Array<Element>;
    constructor(typeArg: Type, vec: Array<Element>);
    static fromFields<Element>(typeArg: Type, fields: Record<string, any>): Option<Element>;
    static fromFieldsWithTypes<Element>(item: FieldsWithTypes): Option<Element>;
    static fromBcs<Element>(typeArg: Type, data: Uint8Array): Option<Element>;
}
