import { FieldsWithTypes, Type } from "../../_framework/util";
import { Balance } from "../balance/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isBorrow(type: Type): boolean;
export interface BorrowFields {
    kioskId: string;
    itemId: string;
}
export declare class Borrow {
    static readonly $typeName = "0x2::kiosk::Borrow";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kiosk_id: {
            bytes: string;
        };
        item_id: {
            bytes: string;
        };
    }, {
        kiosk_id: {
            bytes: string;
        };
        item_id: {
            bytes: string;
        };
    }>;
    readonly kioskId: string;
    readonly itemId: string;
    constructor(fields: BorrowFields);
    static fromFields(fields: Record<string, any>): Borrow;
    static fromFieldsWithTypes(item: FieldsWithTypes): Borrow;
    static fromBcs(data: Uint8Array): Borrow;
}
export declare function isItem(type: Type): boolean;
export interface ItemFields {
    id: string;
}
export declare class Item {
    static readonly $typeName = "0x2::kiosk::Item";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    readonly id: string;
    constructor(id: string);
    static fromFields(fields: Record<string, any>): Item;
    static fromFieldsWithTypes(item: FieldsWithTypes): Item;
    static fromBcs(data: Uint8Array): Item;
}
export declare function isItemDelisted(type: Type): boolean;
export interface ItemDelistedFields {
    kiosk: string;
    id: string;
}
export declare class ItemDelisted {
    static readonly $typeName = "0x2::kiosk::ItemDelisted";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
    }, {
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
    }>;
    readonly $typeArg: Type;
    readonly kiosk: string;
    readonly id: string;
    constructor(typeArg: Type, fields: ItemDelistedFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): ItemDelisted;
    static fromFieldsWithTypes(item: FieldsWithTypes): ItemDelisted;
    static fromBcs(typeArg: Type, data: Uint8Array): ItemDelisted;
}
export declare function isItemListed(type: Type): boolean;
export interface ItemListedFields {
    kiosk: string;
    id: string;
    price: bigint;
}
export declare class ItemListed {
    static readonly $typeName = "0x2::kiosk::ItemListed";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
        price: string;
    }, {
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
        price: string | number | bigint;
    }>;
    readonly $typeArg: Type;
    readonly kiosk: string;
    readonly id: string;
    readonly price: bigint;
    constructor(typeArg: Type, fields: ItemListedFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): ItemListed;
    static fromFieldsWithTypes(item: FieldsWithTypes): ItemListed;
    static fromBcs(typeArg: Type, data: Uint8Array): ItemListed;
}
export declare function isItemPurchased(type: Type): boolean;
export interface ItemPurchasedFields {
    kiosk: string;
    id: string;
    price: bigint;
}
export declare class ItemPurchased {
    static readonly $typeName = "0x2::kiosk::ItemPurchased";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
        price: string;
    }, {
        kiosk: {
            bytes: string;
        };
        id: {
            bytes: string;
        };
        price: string | number | bigint;
    }>;
    readonly $typeArg: Type;
    readonly kiosk: string;
    readonly id: string;
    readonly price: bigint;
    constructor(typeArg: Type, fields: ItemPurchasedFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): ItemPurchased;
    static fromFieldsWithTypes(item: FieldsWithTypes): ItemPurchased;
    static fromBcs(typeArg: Type, data: Uint8Array): ItemPurchased;
}
export declare function isKiosk(type: Type): boolean;
export interface KioskFields {
    id: string;
    profits: Balance;
    owner: string;
    itemCount: number;
    allowExtensions: boolean;
}
export declare class Kiosk {
    static readonly $typeName = "0x2::kiosk::Kiosk";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        profits: {
            value: string;
        };
        owner: string;
        item_count: number;
        allow_extensions: boolean;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        profits: {
            value: string | number | bigint;
        };
        owner: string;
        item_count: number;
        allow_extensions: boolean;
    }>;
    readonly id: string;
    readonly profits: Balance;
    readonly owner: string;
    readonly itemCount: number;
    readonly allowExtensions: boolean;
    constructor(fields: KioskFields);
    static fromFields(fields: Record<string, any>): Kiosk;
    static fromFieldsWithTypes(item: FieldsWithTypes): Kiosk;
    static fromBcs(data: Uint8Array): Kiosk;
    static fromSuiParsedData(content: SuiParsedData): Kiosk;
    static fetch(client: SuiClient, id: string): Promise<Kiosk>;
}
export declare function isKioskOwnerCap(type: Type): boolean;
export interface KioskOwnerCapFields {
    id: string;
    for: string;
}
export declare class KioskOwnerCap {
    static readonly $typeName = "0x2::kiosk::KioskOwnerCap";
    static readonly $numTypeParams = 0;
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
    readonly id: string;
    readonly for: string;
    constructor(fields: KioskOwnerCapFields);
    static fromFields(fields: Record<string, any>): KioskOwnerCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): KioskOwnerCap;
    static fromBcs(data: Uint8Array): KioskOwnerCap;
    static fromSuiParsedData(content: SuiParsedData): KioskOwnerCap;
    static fetch(client: SuiClient, id: string): Promise<KioskOwnerCap>;
}
export declare function isListing(type: Type): boolean;
export interface ListingFields {
    id: string;
    isExclusive: boolean;
}
export declare class Listing {
    static readonly $typeName = "0x2::kiosk::Listing";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        is_exclusive: boolean;
    }, {
        id: {
            bytes: string;
        };
        is_exclusive: boolean;
    }>;
    readonly id: string;
    readonly isExclusive: boolean;
    constructor(fields: ListingFields);
    static fromFields(fields: Record<string, any>): Listing;
    static fromFieldsWithTypes(item: FieldsWithTypes): Listing;
    static fromBcs(data: Uint8Array): Listing;
}
export declare function isLock(type: Type): boolean;
export interface LockFields {
    id: string;
}
export declare class Lock {
    static readonly $typeName = "0x2::kiosk::Lock";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    readonly id: string;
    constructor(id: string);
    static fromFields(fields: Record<string, any>): Lock;
    static fromFieldsWithTypes(item: FieldsWithTypes): Lock;
    static fromBcs(data: Uint8Array): Lock;
}
export declare function isPurchaseCap(type: Type): boolean;
export interface PurchaseCapFields {
    id: string;
    kioskId: string;
    itemId: string;
    minPrice: bigint;
}
export declare class PurchaseCap {
    static readonly $typeName = "0x2::kiosk::PurchaseCap";
    static readonly $numTypeParams = 1;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        kiosk_id: {
            bytes: string;
        };
        item_id: {
            bytes: string;
        };
        min_price: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        kiosk_id: {
            bytes: string;
        };
        item_id: {
            bytes: string;
        };
        min_price: string | number | bigint;
    }>;
    readonly $typeArg: Type;
    readonly id: string;
    readonly kioskId: string;
    readonly itemId: string;
    readonly minPrice: bigint;
    constructor(typeArg: Type, fields: PurchaseCapFields);
    static fromFields(typeArg: Type, fields: Record<string, any>): PurchaseCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): PurchaseCap;
    static fromBcs(typeArg: Type, data: Uint8Array): PurchaseCap;
    static fromSuiParsedData(content: SuiParsedData): PurchaseCap;
    static fetch(client: SuiClient, id: string): Promise<PurchaseCap>;
}
