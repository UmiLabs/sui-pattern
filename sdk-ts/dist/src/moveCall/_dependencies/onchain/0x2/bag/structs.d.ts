import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isBag(type: Type): boolean;
export interface BagFields {
    id: string;
    size: bigint;
}
export declare class Bag {
    static readonly $typeName = "0x2::bag::Bag";
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
    constructor(fields: BagFields);
    static fromFields(fields: Record<string, any>): Bag;
    static fromFieldsWithTypes(item: FieldsWithTypes): Bag;
    static fromBcs(data: Uint8Array): Bag;
    static fromSuiParsedData(content: SuiParsedData): Bag;
    static fetch(client: SuiClient, id: string): Promise<Bag>;
}
