import { Table } from '../../_dependencies/onchain/0x2/table/structs';
import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isMembershipRegistry(type: Type): boolean;
export interface MembershipRegistryFields {
    id: string;
    authenticator: string;
    members: Table;
}
export declare class MembershipRegistry {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership_registry::MembershipRegistry";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        authenticator: string;
        members: {
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
        members: {
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
    readonly members: Table;
    constructor(fields: MembershipRegistryFields);
    static fromFields(fields: Record<string, any>): MembershipRegistry;
    static fromFieldsWithTypes(item: FieldsWithTypes): MembershipRegistry;
    static fromBcs(data: Uint8Array): MembershipRegistry;
    static fromSuiParsedData(content: SuiParsedData): MembershipRegistry;
    static fetch(client: SuiClient, id: string): Promise<MembershipRegistry>;
}
export declare function isContainsMemberEvent(type: Type): boolean;
export interface ContainsMemberEventFields {
    authenticator: string;
    member: string;
    membershipId: string | null;
}
export declare class ContainsMemberEvent {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership_registry::ContainsMemberEvent";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        authenticator: string;
        member: string;
        membership_id: {
            vec: any[];
        };
    }, {
        authenticator: string;
        member: string;
        membership_id: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    readonly authenticator: string;
    readonly member: string;
    readonly membershipId: string | null;
    constructor(fields: ContainsMemberEventFields);
    static fromFields(fields: Record<string, any>): ContainsMemberEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ContainsMemberEvent;
    static fromBcs(data: Uint8Array): ContainsMemberEvent;
}
