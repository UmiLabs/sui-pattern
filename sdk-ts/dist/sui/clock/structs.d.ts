import { FieldsWithTypes, Type } from "../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isClock(type: Type): boolean;
export interface ClockFields {
    id: string;
    timestampMs: bigint;
}
export declare class Clock {
    static readonly $typeName = "0x2::clock::Clock";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        timestamp_ms: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        timestamp_ms: string | number | bigint;
    }>;
    readonly id: string;
    readonly timestampMs: bigint;
    constructor(fields: ClockFields);
    static fromFields(fields: Record<string, any>): Clock;
    static fromFieldsWithTypes(item: FieldsWithTypes): Clock;
    static fromBcs(data: Uint8Array): Clock;
    static fromSuiParsedData(content: SuiParsedData): Clock;
    static fetch(client: SuiClient, id: string): Promise<Clock>;
}
