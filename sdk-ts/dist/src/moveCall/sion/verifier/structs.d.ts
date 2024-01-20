import { FieldsWithTypes, Type } from '../../_framework/util';
export declare function isGroth16VerificationEvent(type: Type): boolean;
export interface Groth16VerificationEventFields {
    vk: Array<number>;
    publicInputs: Array<number>;
    proof: Array<number>;
    isVerified: boolean;
}
export declare class Groth16VerificationEvent {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::verifier::Groth16VerificationEvent";
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
    constructor(fields: Groth16VerificationEventFields);
    static fromFields(fields: Record<string, any>): Groth16VerificationEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): Groth16VerificationEvent;
    static fromBcs(data: Uint8Array): Groth16VerificationEvent;
}
