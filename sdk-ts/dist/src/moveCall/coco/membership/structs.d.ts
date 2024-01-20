import { VecSet } from '../../_dependencies/onchain/0x2/vec-set/structs';
import { FieldsWithTypes, Type } from '../../_framework/util';
import { Role } from '../role/structs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isMembership(type: Type): boolean;
export interface MembershipFields {
    id: string;
    roles: VecSet<Role>;
    createdBy: string;
    createdAt: bigint;
}
export declare class Membership {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::membership::Membership";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        roles: {
            contents: any[];
        };
        created_by: string;
        created_at: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        roles: {
            contents: Iterable<any> & {
                length: number;
            };
        };
        created_by: string;
        created_at: string | number | bigint;
    }>;
    readonly id: string;
    readonly roles: VecSet<Role>;
    readonly createdBy: string;
    readonly createdAt: bigint;
    constructor(fields: MembershipFields);
    static fromFields(fields: Record<string, any>): Membership;
    static fromFieldsWithTypes(item: FieldsWithTypes): Membership;
    static fromBcs(data: Uint8Array): Membership;
    static fromSuiParsedData(content: SuiParsedData): Membership;
    static fetch(client: SuiClient, id: string): Promise<Membership>;
}
