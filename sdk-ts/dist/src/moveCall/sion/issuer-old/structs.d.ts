import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isMembership(type: Type): boolean;
export interface MembershipFields {
    id: string;
    vin: string;
    odometerReading: bigint;
    fuelUsage: bigint;
    createdAt: bigint;
    createdBy: string;
}
export declare class Membership {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::issuer_old::Membership";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        vin: {
            bytes: number[];
        };
        odometer_reading: string;
        fuel_usage: string;
        created_at: string;
        created_by: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        vin: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        odometer_reading: string | number | bigint;
        fuel_usage: string | number | bigint;
        created_at: string | number | bigint;
        created_by: string;
    }>;
    readonly id: string;
    readonly vin: string;
    readonly odometerReading: bigint;
    readonly fuelUsage: bigint;
    readonly createdAt: bigint;
    readonly createdBy: string;
    constructor(fields: MembershipFields);
    static fromFields(fields: Record<string, any>): Membership;
    static fromFieldsWithTypes(item: FieldsWithTypes): Membership;
    static fromBcs(data: Uint8Array): Membership;
    static fromSuiParsedData(content: SuiParsedData): Membership;
    static fetch(client: SuiClient, id: string): Promise<Membership>;
}
