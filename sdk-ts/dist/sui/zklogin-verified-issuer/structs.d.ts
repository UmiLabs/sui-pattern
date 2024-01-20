import { FieldsWithTypes, Type } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isVerifiedIssuer(type: Type): boolean;
export interface VerifiedIssuerFields {
    id: string;
    owner: string;
    issuer: string;
}
export declare class VerifiedIssuer {
    static readonly $typeName = "0x2::zklogin_verified_issuer::VerifiedIssuer";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        owner: string;
        issuer: any;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        owner: string;
        issuer: any;
    }>;
    readonly id: string;
    readonly owner: string;
    readonly issuer: string;
    constructor(fields: VerifiedIssuerFields);
    static fromFields(fields: Record<string, any>): VerifiedIssuer;
    static fromFieldsWithTypes(item: FieldsWithTypes): VerifiedIssuer;
    static fromBcs(data: Uint8Array): VerifiedIssuer;
    static fromSuiParsedData(content: SuiParsedData): VerifiedIssuer;
    static fetch(client: SuiClient, id: string): Promise<VerifiedIssuer>;
}
