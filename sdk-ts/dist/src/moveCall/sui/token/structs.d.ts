import { TypeName } from '../../_dependencies/source/0x1/type-name/structs';
import { FieldsWithTypes, Type } from '../../_framework/util';
import { Balance } from '../balance/structs';
import { VecMap } from '../vec-map/structs';
import { VecSet } from '../vec-set/structs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isRuleKey(type: Type): boolean;
export interface RuleKeyFields {
    isProtected: boolean;
}
export declare class RuleKey {
    static readonly $typeName = "0x2::token::RuleKey";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        is_protected: boolean;
    }, {
        is_protected: boolean;
    }>;
    readonly $typeArg: Type;
    readonly isProtected: boolean;
    constructor(typeArg: Type, isProtected: boolean);
    static fromFields(typeArg: Type, fields: Record<string, any>): RuleKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): RuleKey;
    static fromBcs(typeArg: Type, data: Uint8Array): RuleKey;
}
export declare function isActionRequest(type: Type): boolean;
export interface ActionRequestFields {
    name: string;
    amount: bigint;
    sender: string;
    recipient: string | null;
    spentBalance: Balance | null;
    approvals: VecSet<TypeName>;
}
export declare class ActionRequest {
    static readonly $typeName = "0x2::token::ActionRequest";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        name: {
            bytes: number[];
        };
        amount: string;
        sender: string;
        recipient: {
            vec: any[];
        };
        spent_balance: {
            vec: any[];
        };
        approvals: {
            contents: any[];
        };
    }, {
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        amount: string | number | bigint;
        sender: string;
        recipient: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        spent_balance: {
            vec: Iterable<any> & {
                length: number;
            };
        };
        approvals: {
            contents: Iterable<any> & {
                length: number;
            };
        };
    }>;
    readonly $typeArg: Type;
    readonly name: string;
    readonly amount: bigint;
    readonly sender: string;
    readonly recipient: string | null;
    readonly spentBalance: Balance | null;
    readonly approvals: VecSet<TypeName>;
    constructor(typeArg: Type, fields: ActionRequestFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): ActionRequest;
    static fromFieldsWithTypes(item: FieldsWithTypes): ActionRequest;
    static fromBcs(typeArg: Type, data: Uint8Array): ActionRequest;
}
export declare function isToken(type: Type): boolean;
export interface TokenFields {
    id: string;
    balance: Balance;
}
export declare class Token {
    static readonly $typeName = "0x2::token::Token";
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
    constructor(typeArg: Type, fields: TokenFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): Token;
    static fromFieldsWithTypes(item: FieldsWithTypes): Token;
    static fromBcs(typeArg: Type, data: Uint8Array): Token;
    static fromSuiParsedData(content: SuiParsedData): Token;
    static fetch(client: SuiClient, id: string): Promise<Token>;
}
export declare function isTokenPolicy(type: Type): boolean;
export interface TokenPolicyFields {
    id: string;
    spentBalance: Balance;
    rules: VecMap<string, VecSet<TypeName>>;
}
export declare class TokenPolicy {
    static readonly $typeName = "0x2::token::TokenPolicy";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        spent_balance: {
            value: string;
        };
        rules: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    contents: any[];
                };
            }[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        spent_balance: {
            value: string | number | bigint;
        };
        rules: {
            contents: Iterable<{
                key: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                value: {
                    contents: Iterable<any> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly spentBalance: Balance;
    readonly rules: VecMap<string, VecSet<TypeName>>;
    constructor(typeArg: Type, fields: TokenPolicyFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): TokenPolicy;
    static fromFieldsWithTypes(item: FieldsWithTypes): TokenPolicy;
    static fromBcs(typeArg: Type, data: Uint8Array): TokenPolicy;
    static fromSuiParsedData(content: SuiParsedData): TokenPolicy;
    static fetch(client: SuiClient, id: string): Promise<TokenPolicy>;
}
export declare function isTokenPolicyCap(type: Type): boolean;
export interface TokenPolicyCapFields {
    id: string;
    for: string;
}
export declare class TokenPolicyCap {
    static readonly $typeName = "0x2::token::TokenPolicyCap";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        for: {
            bytes: string;
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly for: string;
    constructor(typeArg: Type, fields: TokenPolicyCapFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): TokenPolicyCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): TokenPolicyCap;
    static fromBcs(typeArg: Type, data: Uint8Array): TokenPolicyCap;
    static fromSuiParsedData(content: SuiParsedData): TokenPolicyCap;
    static fetch(client: SuiClient, id: string): Promise<TokenPolicyCap>;
}
export declare function isTokenPolicyCreated(type: Type): boolean;
export interface TokenPolicyCreatedFields {
    id: string;
    isMutable: boolean;
}
export declare class TokenPolicyCreated {
    static readonly $typeName = "0x2::token::TokenPolicyCreated";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        is_mutable: boolean;
    }, {
        id: {
            bytes: string;
        };
        is_mutable: boolean;
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly isMutable: boolean;
    constructor(typeArg: Type, fields: TokenPolicyCreatedFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): TokenPolicyCreated;
    static fromFieldsWithTypes(item: FieldsWithTypes): TokenPolicyCreated;
    static fromBcs(typeArg: Type, data: Uint8Array): TokenPolicyCreated;
}
