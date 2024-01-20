import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { Versioned } from '../versioned/structs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isRandom(type: Type): boolean;
export interface RandomFields {
    id: string;
    inner: Versioned;
}
export declare class Random {
    static readonly $typeName = "0x2::random::Random";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        inner: {
            id: {
                id: {
                    bytes: string;
                };
            };
            version: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        inner: {
            id: {
                id: {
                    bytes: string;
                };
            };
            version: string | number | bigint;
        };
    }>;
    readonly id: string;
    readonly inner: Versioned;
    constructor(fields: RandomFields);
    static fromFields(fields: Record<string, any>): Random;
    static fromFieldsWithTypes(item: FieldsWithTypes): Random;
    static fromBcs(data: Uint8Array): Random;
    static fromSuiParsedData(content: SuiParsedData): Random;
    static fetch(client: SuiClient, id: string): Promise<Random>;
}
export declare function isRandomInner(type: Type): boolean;
export interface RandomInnerFields {
    version: bigint;
    epoch: bigint;
    randomnessRound: bigint;
    randomBytes: Array<number>;
}
export declare class RandomInner {
    static readonly $typeName = "0x2::random::RandomInner";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        version: string;
        epoch: string;
        randomness_round: string;
        random_bytes: number[];
    }, {
        version: string | number | bigint;
        epoch: string | number | bigint;
        randomness_round: string | number | bigint;
        random_bytes: Iterable<number> & {
            length: number;
        };
    }>;
    readonly version: bigint;
    readonly epoch: bigint;
    readonly randomnessRound: bigint;
    readonly randomBytes: Array<number>;
    constructor(fields: RandomInnerFields);
    static fromFields(fields: Record<string, any>): RandomInner;
    static fromFieldsWithTypes(item: FieldsWithTypes): RandomInner;
    static fromBcs(data: Uint8Array): RandomInner;
}
