import { FieldsWithTypes, Type } from '../../../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isPublisher(type: Type): boolean;
export interface PublisherFields {
    id: string;
    package: string;
    moduleName: string;
}
export declare class Publisher {
    static readonly $typeName = "0x2::package::Publisher";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        package: {
            bytes: number[];
        };
        module_name: {
            bytes: number[];
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        package: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        module_name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    readonly id: string;
    readonly package: string;
    readonly moduleName: string;
    constructor(fields: PublisherFields);
    static fromFields(fields: Record<string, any>): Publisher;
    static fromFieldsWithTypes(item: FieldsWithTypes): Publisher;
    static fromBcs(data: Uint8Array): Publisher;
    static fromSuiParsedData(content: SuiParsedData): Publisher;
    static fetch(client: SuiClient, id: string): Promise<Publisher>;
}
export declare function isUpgradeCap(type: Type): boolean;
export interface UpgradeCapFields {
    id: string;
    package: string;
    version: bigint;
    policy: number;
}
export declare class UpgradeCap {
    static readonly $typeName = "0x2::package::UpgradeCap";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        package: {
            bytes: string;
        };
        version: string;
        policy: number;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        package: {
            bytes: string;
        };
        version: string | number | bigint;
        policy: number;
    }>;
    readonly id: string;
    readonly package: string;
    readonly version: bigint;
    readonly policy: number;
    constructor(fields: UpgradeCapFields);
    static fromFields(fields: Record<string, any>): UpgradeCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeCap;
    static fromBcs(data: Uint8Array): UpgradeCap;
    static fromSuiParsedData(content: SuiParsedData): UpgradeCap;
    static fetch(client: SuiClient, id: string): Promise<UpgradeCap>;
}
export declare function isUpgradeTicket(type: Type): boolean;
export interface UpgradeTicketFields {
    cap: string;
    package: string;
    policy: number;
    digest: Array<number>;
}
export declare class UpgradeTicket {
    static readonly $typeName = "0x2::package::UpgradeTicket";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        cap: {
            bytes: string;
        };
        package: {
            bytes: string;
        };
        policy: number;
        digest: number[];
    }, {
        cap: {
            bytes: string;
        };
        package: {
            bytes: string;
        };
        policy: number;
        digest: Iterable<number> & {
            length: number;
        };
    }>;
    readonly cap: string;
    readonly package: string;
    readonly policy: number;
    readonly digest: Array<number>;
    constructor(fields: UpgradeTicketFields);
    static fromFields(fields: Record<string, any>): UpgradeTicket;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeTicket;
    static fromBcs(data: Uint8Array): UpgradeTicket;
}
export declare function isUpgradeReceipt(type: Type): boolean;
export interface UpgradeReceiptFields {
    cap: string;
    package: string;
}
export declare class UpgradeReceipt {
    static readonly $typeName = "0x2::package::UpgradeReceipt";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        cap: {
            bytes: string;
        };
        package: {
            bytes: string;
        };
    }, {
        cap: {
            bytes: string;
        };
        package: {
            bytes: string;
        };
    }>;
    readonly cap: string;
    readonly package: string;
    constructor(fields: UpgradeReceiptFields);
    static fromFields(fields: Record<string, any>): UpgradeReceipt;
    static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeReceipt;
    static fromBcs(data: Uint8Array): UpgradeReceipt;
}
