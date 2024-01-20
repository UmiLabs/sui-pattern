import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isVerifiedID(type: Type): boolean;
export interface VerifiedIDFields {
    id: string;
    owner: string;
    keyClaimName: string;
    keyClaimValue: string;
    issuer: string;
    audience: string;
}
export declare class VerifiedID {
    static readonly $typeName = "0x2::zklogin_verified_id::VerifiedID";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        owner: string;
        key_claim_name: {
            bytes: number[];
        };
        key_claim_value: {
            bytes: number[];
        };
        issuer: {
            bytes: number[];
        };
        audience: {
            bytes: number[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        owner: string;
        key_claim_name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        key_claim_value: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        issuer: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        audience: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    readonly id: string;
    readonly owner: string;
    readonly keyClaimName: string;
    readonly keyClaimValue: string;
    readonly issuer: string;
    readonly audience: string;
    constructor(fields: VerifiedIDFields);
    static fromFields(fields: Record<string, any>): VerifiedID;
    static fromFieldsWithTypes(item: FieldsWithTypes): VerifiedID;
    static fromBcs(data: Uint8Array): VerifiedID;
    static fromSuiParsedData(content: SuiParsedData): VerifiedID;
    static fetch(client: SuiClient, id: string): Promise<VerifiedID>;
}
