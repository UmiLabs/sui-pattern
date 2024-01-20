import { TypeName } from '../../_dependencies/source/0x1/type-name/structs';
import { FieldsWithTypes, Type } from '../../_framework/util';
import { Balance } from '../balance/structs';
import { VecSet } from '../vec-set/structs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isRuleKey(type: Type): boolean;
export interface RuleKeyFields {
    dummyField: boolean;
}
export declare class RuleKey {
    static readonly $typeName = "0x2::transfer_policy::RuleKey";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    readonly $typeArg: Type;
    readonly dummyField: boolean;
    constructor(typeArg: Type, dummyField: boolean);
    static fromFields(typeArg: Type, fields: Record<string, any>): RuleKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): RuleKey;
    static fromBcs(typeArg: Type, data: Uint8Array): RuleKey;
}
export declare function isTransferPolicy(type: Type): boolean;
export interface TransferPolicyFields {
    id: string;
    balance: Balance;
    rules: VecSet<TypeName>;
}
export declare class TransferPolicy {
    static readonly $typeName = "0x2::transfer_policy::TransferPolicy";
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
        rules: {
            contents: any[];
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
        rules: {
            contents: Iterable<any> & {
                length: number;
            };
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly balance: Balance;
    readonly rules: VecSet<TypeName>;
    constructor(typeArg: Type, fields: TransferPolicyFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): TransferPolicy;
    static fromFieldsWithTypes(item: FieldsWithTypes): TransferPolicy;
    static fromBcs(typeArg: Type, data: Uint8Array): TransferPolicy;
    static fromSuiParsedData(content: SuiParsedData): TransferPolicy;
    static fetch(client: SuiClient, id: string): Promise<TransferPolicy>;
}
export declare function isTransferPolicyCap(type: Type): boolean;
export interface TransferPolicyCapFields {
    id: string;
    policyId: string;
}
export declare class TransferPolicyCap {
    static readonly $typeName = "0x2::transfer_policy::TransferPolicyCap";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        policy_id: {
            bytes: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        policy_id: {
            bytes: string;
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly policyId: string;
    constructor(typeArg: Type, fields: TransferPolicyCapFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): TransferPolicyCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): TransferPolicyCap;
    static fromBcs(typeArg: Type, data: Uint8Array): TransferPolicyCap;
    static fromSuiParsedData(content: SuiParsedData): TransferPolicyCap;
    static fetch(client: SuiClient, id: string): Promise<TransferPolicyCap>;
}
export declare function isTransferPolicyCreated(type: Type): boolean;
export interface TransferPolicyCreatedFields {
    id: string;
}
export declare class TransferPolicyCreated {
    static readonly $typeName = "0x2::transfer_policy::TransferPolicyCreated";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    constructor(typeArg: Type, id: string);
    static fromFields(typeArg: Type, fields: Record<string, any>): TransferPolicyCreated;
    static fromFieldsWithTypes(item: FieldsWithTypes): TransferPolicyCreated;
    static fromBcs(typeArg: Type, data: Uint8Array): TransferPolicyCreated;
}
export declare function isTransferPolicyDestroyed(type: Type): boolean;
export interface TransferPolicyDestroyedFields {
    id: string;
}
export declare class TransferPolicyDestroyed {
    static readonly $typeName = "0x2::transfer_policy::TransferPolicyDestroyed";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    constructor(typeArg: Type, id: string);
    static fromFields(typeArg: Type, fields: Record<string, any>): TransferPolicyDestroyed;
    static fromFieldsWithTypes(item: FieldsWithTypes): TransferPolicyDestroyed;
    static fromBcs(typeArg: Type, data: Uint8Array): TransferPolicyDestroyed;
}
export declare function isTransferRequest(type: Type): boolean;
export interface TransferRequestFields {
    item: string;
    paid: bigint;
    from: string;
    receipts: VecSet<TypeName>;
}
export declare class TransferRequest {
    static readonly $typeName = "0x2::transfer_policy::TransferRequest";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        item: {
            bytes: string;
        };
        paid: string;
        from: {
            bytes: string;
        };
        receipts: {
            contents: any[];
        };
    }, {
        item: {
            bytes: string;
        };
        paid: string | number | bigint;
        from: {
            bytes: string;
        };
        receipts: {
            contents: Iterable<any> & {
                length: number;
            };
        };
    }>;
    readonly $typeArg: Type;
    readonly item: string;
    readonly paid: bigint;
    readonly from: string;
    readonly receipts: VecSet<TypeName>;
    constructor(typeArg: Type, fields: TransferRequestFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): TransferRequest;
    static fromFieldsWithTypes(item: FieldsWithTypes): TransferRequest;
    static fromBcs(typeArg: Type, data: Uint8Array): TransferRequest;
}
