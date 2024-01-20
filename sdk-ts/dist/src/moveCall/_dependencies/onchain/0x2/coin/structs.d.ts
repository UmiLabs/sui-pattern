import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { Balance, Supply } from '../balance/structs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isCoin(type: Type): boolean;
export interface CoinFields {
    id: string;
    balance: Balance;
}
export declare class Coin {
    static readonly $typeName = "0x2::coin::Coin";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        balance: {
            value: string | number | bigint;
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly balance: Balance;
    constructor(typeArg: Type, fields: CoinFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): Coin;
    static fromFieldsWithTypes(item: FieldsWithTypes): Coin;
    static fromBcs(typeArg: Type, data: Uint8Array): Coin;
    static fromSuiParsedData(content: SuiParsedData): Coin;
    static fetch(client: SuiClient, id: string): Promise<Coin>;
}
export declare function isCoinMetadata(type: Type): boolean;
export interface CoinMetadataFields {
    id: string;
    decimals: number;
    name: string;
    symbol: string;
    description: string;
    iconUrl: string | null;
}
export declare class CoinMetadata {
    static readonly $typeName = "0x2::coin::CoinMetadata";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        decimals: number;
        name: {
            bytes: number[];
        };
        symbol: {
            bytes: number[];
        };
        description: {
            bytes: number[];
        };
        icon_url: {
            vec: any[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        decimals: number;
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        symbol: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        description: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        icon_url: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly decimals: number;
    readonly name: string;
    readonly symbol: string;
    readonly description: string;
    readonly iconUrl: string | null;
    constructor(typeArg: Type, fields: CoinMetadataFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): CoinMetadata;
    static fromFieldsWithTypes(item: FieldsWithTypes): CoinMetadata;
    static fromBcs(typeArg: Type, data: Uint8Array): CoinMetadata;
    static fromSuiParsedData(content: SuiParsedData): CoinMetadata;
    static fetch(client: SuiClient, id: string): Promise<CoinMetadata>;
}
export declare function isTreasuryCap(type: Type): boolean;
export interface TreasuryCapFields {
    id: string;
    totalSupply: Supply;
}
export declare class TreasuryCap {
    static readonly $typeName = "0x2::coin::TreasuryCap";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        total_supply: {
            value: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        total_supply: {
            value: string | number | bigint;
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly totalSupply: Supply;
    constructor(typeArg: Type, fields: TreasuryCapFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): TreasuryCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): TreasuryCap;
    static fromBcs(typeArg: Type, data: Uint8Array): TreasuryCap;
    static fromSuiParsedData(content: SuiParsedData): TreasuryCap;
    static fetch(client: SuiClient, id: string): Promise<TreasuryCap>;
}
export declare function isCurrencyCreated(type: Type): boolean;
export interface CurrencyCreatedFields {
    decimals: number;
}
export declare class CurrencyCreated {
    static readonly $typeName = "0x2::coin::CurrencyCreated";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        decimals: number;
    }, {
        decimals: number;
    }>;
    readonly $typeArg: Type;
    readonly decimals: number;
    constructor(typeArg: Type, decimals: number);
    static fromFields(typeArg: Type, fields: Record<string, any>): CurrencyCreated;
    static fromFieldsWithTypes(item: FieldsWithTypes): CurrencyCreated;
    static fromBcs(typeArg: Type, data: Uint8Array): CurrencyCreated;
}
