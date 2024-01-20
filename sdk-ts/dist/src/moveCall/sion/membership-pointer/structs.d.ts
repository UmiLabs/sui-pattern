import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isMembershipPointer(type: Type): boolean;
export interface MembershipPointerFields {
    id: string;
    membershipId: string;
    authenticator: string;
    subject: string;
}
export declare class MembershipPointer {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership_pointer::MembershipPointer";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        membership_id: {
            bytes: string;
        };
        authenticator: string;
        subject: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        membership_id: {
            bytes: string;
        };
        authenticator: string;
        subject: string;
    }>;
    readonly id: string;
    readonly membershipId: string;
    readonly authenticator: string;
    readonly subject: string;
    constructor(fields: MembershipPointerFields);
    static fromFields(fields: Record<string, any>): MembershipPointer;
    static fromFieldsWithTypes(item: FieldsWithTypes): MembershipPointer;
    static fromBcs(data: Uint8Array): MembershipPointer;
    static fromSuiParsedData(content: SuiParsedData): MembershipPointer;
    static fetch(client: SuiClient, id: string): Promise<MembershipPointer>;
}
