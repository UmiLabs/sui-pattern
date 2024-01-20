import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { BcsType } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isField(type: Type): boolean;
export interface FieldFields<T0, T1> {
    id: string;
    name: T0;
    value: T1;
}
export declare class Field<T0, T1> {
    static readonly $typeName = "0x2::dynamic_field::Field";
    static readonly $numTypeParams = 2;
    static get bcs(): <T0 extends BcsType<any, any>, T1 extends BcsType<any, any>>(T0: T0, T1: T1) => BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        name: T0 extends BcsType<infer U_2, any> ? U_2 : never;
        value: T1 extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        name: T0 extends BcsType<any, infer U_3> ? U_3 : never;
        value: T1 extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArgs: [Type, Type];
    readonly id: string;
    readonly name: T0;
    readonly value: T1;
    constructor(typeArgs: [Type, Type], fields: FieldFields<T0, T1>);
    static fromFields<T0, T1>(typeArgs: [Type, Type], fields: Record<string, any>): Field<T0, T1>;
    static fromFieldsWithTypes<T0, T1>(item: FieldsWithTypes): Field<T0, T1>;
    static fromBcs<T0, T1>(typeArgs: [Type, Type], data: Uint8Array): Field<T0, T1>;
    static fromSuiParsedData(content: SuiParsedData): Field<unknown, unknown>;
    static fetch<T0, T1>(client: SuiClient, id: string): Promise<Field<T0, T1>>;
}
