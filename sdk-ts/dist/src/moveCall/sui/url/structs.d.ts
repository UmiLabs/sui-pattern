import { FieldsWithTypes, Type } from '../../_framework/util';
export declare function isUrl(type: Type): boolean;
export interface UrlFields {
    url: string;
}
export declare class Url {
    static readonly $typeName = "0x2::url::Url";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        url: {
            bytes: number[];
        };
    }, {
        url: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    readonly url: string;
    constructor(url: string);
    static fromFields(fields: Record<string, any>): Url;
    static fromFieldsWithTypes(item: FieldsWithTypes): Url;
    static fromBcs(data: Uint8Array): Url;
}
