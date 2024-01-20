import { FieldsWithTypes, Type } from '../../_framework/util';
export declare function isVerifyEvent(type: Type): boolean;
export interface VerifyEventFields {
    vk: Array<number>;
    publicInputs: Array<number>;
    proof: Array<number>;
    isVerified: boolean;
}
export declare class VerifyEvent {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::verifier::VerifyEvent";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vk: number[];
        public_inputs: number[];
        proof: number[];
        is_verified: boolean;
    }, {
        vk: Iterable<number> & {
            length: number;
        };
        public_inputs: Iterable<number> & {
            length: number;
        };
        proof: Iterable<number> & {
            length: number;
        };
        is_verified: boolean;
    }>;
    readonly vk: Array<number>;
    readonly publicInputs: Array<number>;
    readonly proof: Array<number>;
    readonly isVerified: boolean;
    constructor(fields: VerifyEventFields);
    static fromFields(fields: Record<string, any>): VerifyEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): VerifyEvent;
    static fromBcs(data: Uint8Array): VerifyEvent;
}
