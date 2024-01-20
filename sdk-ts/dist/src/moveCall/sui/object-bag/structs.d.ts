import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isObjectBag(type: Type): boolean;
export interface ObjectBagFields {
    id: string;
    size: bigint;
}
export declare class ObjectBag {
    static readonly $typeName = "0x2::object_bag::ObjectBag";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        size: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        size: string | number | bigint;
    }>;
    readonly id: string;
    readonly size: bigint;
    constructor(fields: ObjectBagFields);
    static fromFields(fields: Record<string, any>): ObjectBag;
    static fromFieldsWithTypes(item: FieldsWithTypes): ObjectBag;
    static fromBcs(data: Uint8Array): ObjectBag;
    static fromSuiParsedData(content: SuiParsedData): ObjectBag;
    static fetch(client: SuiClient, id: string): Promise<ObjectBag>;
}
