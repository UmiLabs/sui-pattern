import { FieldsWithTypes, Type } from '../../_framework/util';
export declare function isTxContext(type: Type): boolean;
export interface TxContextFields {
    sender: string;
    txHash: Array<number>;
    epoch: bigint;
    epochTimestampMs: bigint;
    idsCreated: bigint;
}
export declare class TxContext {
    static readonly $typeName = "0x2::tx_context::TxContext";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        sender: string;
        tx_hash: number[];
        epoch: string;
        epoch_timestamp_ms: string;
        ids_created: string;
    }, {
        sender: string;
        tx_hash: Iterable<number> & {
            length: number;
        };
        epoch: string | number | bigint;
        epoch_timestamp_ms: string | number | bigint;
        ids_created: string | number | bigint;
    }>;
    readonly sender: string;
    readonly txHash: Array<number>;
    readonly epoch: bigint;
    readonly epochTimestampMs: bigint;
    readonly idsCreated: bigint;
    constructor(fields: TxContextFields);
    static fromFields(fields: Record<string, any>): TxContext;
    static fromFieldsWithTypes(item: FieldsWithTypes): TxContext;
    static fromBcs(data: Uint8Array): TxContext;
}
