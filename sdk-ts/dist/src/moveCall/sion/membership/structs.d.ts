import { Table } from '../../_dependencies/onchain/0x2/table/structs';
import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isMembership(type: Type): boolean;
export interface MembershipFields {
    id: string;
    authenticator: string;
    subject: string;
    createdAt: bigint;
    claimsKeyToDigest: Table;
    claimsDigestToKey: Table;
}
export declare class Membership {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership::Membership";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        authenticator: string;
        subject: string;
        created_at: string;
        claims_key_to_digest: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        claims_digest_to_key: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        authenticator: string;
        subject: string;
        created_at: string | number | bigint;
        claims_key_to_digest: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        claims_digest_to_key: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    readonly id: string;
    readonly authenticator: string;
    readonly subject: string;
    readonly createdAt: bigint;
    readonly claimsKeyToDigest: Table;
    readonly claimsDigestToKey: Table;
    constructor(fields: MembershipFields);
    static fromFields(fields: Record<string, any>): Membership;
    static fromFieldsWithTypes(item: FieldsWithTypes): Membership;
    static fromBcs(data: Uint8Array): Membership;
    static fromSuiParsedData(content: SuiParsedData): Membership;
    static fetch(client: SuiClient, id: string): Promise<Membership>;
}
export declare function isContainsClaimEvent(type: Type): boolean;
export interface ContainsClaimEventFields {
    authenticator: string;
    subject: string;
    claimKey: string;
    claimDigest: Array<number>;
    isVerified: boolean;
}
export declare class ContainsClaimEvent {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership::ContainsClaimEvent";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        authenticator: string;
        subject: string;
        claim_key: {
            bytes: number[];
        };
        claim_digest: number[];
        is_verified: boolean;
    }, {
        authenticator: string;
        subject: string;
        claim_key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        claim_digest: Iterable<number> & {
            length: number;
        };
        is_verified: boolean;
    }>;
    readonly authenticator: string;
    readonly subject: string;
    readonly claimKey: string;
    readonly claimDigest: Array<number>;
    readonly isVerified: boolean;
    constructor(fields: ContainsClaimEventFields);
    static fromFields(fields: Record<string, any>): ContainsClaimEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ContainsClaimEvent;
    static fromBcs(data: Uint8Array): ContainsClaimEvent;
}
export declare function isBoundCheckEvent(type: Type): boolean;
export interface BoundCheckEventFields {
    authenticator: string;
    subject: string;
    claimKey: string;
    claimDigest: Array<number>;
    gteBound: bigint;
    ltBound: bigint;
    isVerified: boolean;
}
export declare class BoundCheckEvent {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership::BoundCheckEvent";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        authenticator: string;
        subject: string;
        claim_key: {
            bytes: number[];
        };
        claim_digest: number[];
        gte_bound: string;
        lt_bound: string;
        is_verified: boolean;
    }, {
        authenticator: string;
        subject: string;
        claim_key: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        claim_digest: Iterable<number> & {
            length: number;
        };
        gte_bound: string | number | bigint;
        lt_bound: string | number | bigint;
        is_verified: boolean;
    }>;
    readonly authenticator: string;
    readonly subject: string;
    readonly claimKey: string;
    readonly claimDigest: Array<number>;
    readonly gteBound: bigint;
    readonly ltBound: bigint;
    readonly isVerified: boolean;
    constructor(fields: BoundCheckEventFields);
    static fromFields(fields: Record<string, any>): BoundCheckEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): BoundCheckEvent;
    static fromBcs(data: Uint8Array): BoundCheckEvent;
}
