import { BcsType } from '@mysten/bcs';
import { FieldsWithTypes, Type } from './util';
export type PrimitiveValue = string | number | boolean | bigint;
export declare class StructClassLoader {
    #private;
    private map;
    register(...classes: any): void;
    fromFields(type: Type, value: Record<string, any> | PrimitiveValue): any;
    fromFieldsWithTypes(type: Type, value: FieldsWithTypes | PrimitiveValue): any;
    getBcsType(type: Type): BcsType<any, any>;
}
export declare const structClassLoaderSource: StructClassLoader;
export declare const structClassLoaderOnchain: StructClassLoader;
