import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isMembershipPointer(type: Type): boolean;
export interface MembershipPointerFields {
    id: string;
    associationId: string;
    membershipId: string;
    subject: string;
}
export declare class MembershipPointer {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::membership_pointer::MembershipPointer";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        association_id: {
            bytes: string;
        };
        membership_id: {
            bytes: string;
        };
        subject: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        association_id: {
            bytes: string;
        };
        membership_id: {
            bytes: string;
        };
        subject: string;
    }>;
    readonly id: string;
    readonly associationId: string;
    readonly membershipId: string;
    readonly subject: string;
    constructor(fields: MembershipPointerFields);
    static fromFields(fields: Record<string, any>): MembershipPointer;
    static fromFieldsWithTypes(item: FieldsWithTypes): MembershipPointer;
    static fromBcs(data: Uint8Array): MembershipPointer;
    static fromSuiParsedData(content: SuiParsedData): MembershipPointer;
    static fetch(client: SuiClient, id: string): Promise<MembershipPointer>;
}
