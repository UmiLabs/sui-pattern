import { FieldsWithTypes, Type } from "../../_framework/util";
import { BcsType } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isField(type: Type): boolean;
export interface FieldFields<Name, Value> {
    id: string;
    name: Name;
    value: Value;
}
export declare class Field<Name, Value> {
    static readonly $typeName = "0x2::dynamic_field::Field";
    static readonly $numTypeParams = 2;
    static get bcs(): <Name extends BcsType<any, any>, Value extends BcsType<any, any>>(Name: Name, Value: Value) => BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        name: Name extends BcsType<infer U_2, any> ? U_2 : never;
        value: Value extends BcsType<infer U_2, any> ? U_2 : never;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        name: Name extends BcsType<any, infer U_3> ? U_3 : never;
        value: Value extends BcsType<any, infer U_3> ? U_3 : never;
    }>;
    readonly $typeArgs: [Type, Type];
    readonly id: string;
    readonly name: Name;
    readonly value: Value;
    constructor(typeArgs: [Type, Type], fields: FieldFields<Name, Value>);
    static fromFields<Name, Value>(typeArgs: [Type, Type], fields: Record<string, any>): Field<Name, Value>;
    static fromFieldsWithTypes<Name, Value>(item: FieldsWithTypes): Field<Name, Value>;
    static fromBcs<Name, Value>(typeArgs: [Type, Type], data: Uint8Array): Field<Name, Value>;
    static fromSuiParsedData(content: SuiParsedData): Field<unknown, unknown>;
    static fetch<Name, Value>(client: SuiClient, id: string): Promise<Field<Name, Value>>;
}
