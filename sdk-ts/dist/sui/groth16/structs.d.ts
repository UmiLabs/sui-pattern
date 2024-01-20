import { FieldsWithTypes, Type } from "../../_framework/util";
export declare function isCurve(type: Type): boolean;
export interface CurveFields {
    id: number;
}
export declare class Curve {
    static readonly $typeName = "0x2::groth16::Curve";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: number;
    }, {
        id: number;
    }>;
    readonly id: number;
    constructor(id: number);
    static fromFields(fields: Record<string, any>): Curve;
    static fromFieldsWithTypes(item: FieldsWithTypes): Curve;
    static fromBcs(data: Uint8Array): Curve;
}
export declare function isPreparedVerifyingKey(type: Type): boolean;
export interface PreparedVerifyingKeyFields {
    vkGammaAbcG1Bytes: Array<number>;
    alphaG1BetaG2Bytes: Array<number>;
    gammaG2NegPcBytes: Array<number>;
    deltaG2NegPcBytes: Array<number>;
}
export declare class PreparedVerifyingKey {
    static readonly $typeName = "0x2::groth16::PreparedVerifyingKey";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        vk_gamma_abc_g1_bytes: number[];
        alpha_g1_beta_g2_bytes: number[];
        gamma_g2_neg_pc_bytes: number[];
        delta_g2_neg_pc_bytes: number[];
    }, {
        vk_gamma_abc_g1_bytes: Iterable<number> & {
            length: number;
        };
        alpha_g1_beta_g2_bytes: Iterable<number> & {
            length: number;
        };
        gamma_g2_neg_pc_bytes: Iterable<number> & {
            length: number;
        };
        delta_g2_neg_pc_bytes: Iterable<number> & {
            length: number;
        };
    }>;
    readonly vkGammaAbcG1Bytes: Array<number>;
    readonly alphaG1BetaG2Bytes: Array<number>;
    readonly gammaG2NegPcBytes: Array<number>;
    readonly deltaG2NegPcBytes: Array<number>;
    constructor(fields: PreparedVerifyingKeyFields);
    static fromFields(fields: Record<string, any>): PreparedVerifyingKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): PreparedVerifyingKey;
    static fromBcs(data: Uint8Array): PreparedVerifyingKey;
}
export declare function isProofPoints(type: Type): boolean;
export interface ProofPointsFields {
    bytes: Array<number>;
}
export declare class ProofPoints {
    static readonly $typeName = "0x2::groth16::ProofPoints";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    readonly bytes: Array<number>;
    constructor(bytes: Array<number>);
    static fromFields(fields: Record<string, any>): ProofPoints;
    static fromFieldsWithTypes(item: FieldsWithTypes): ProofPoints;
    static fromBcs(data: Uint8Array): ProofPoints;
}
export declare function isPublicProofInputs(type: Type): boolean;
export interface PublicProofInputsFields {
    bytes: Array<number>;
}
export declare class PublicProofInputs {
    static readonly $typeName = "0x2::groth16::PublicProofInputs";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    readonly bytes: Array<number>;
    constructor(bytes: Array<number>);
    static fromFields(fields: Record<string, any>): PublicProofInputs;
    static fromFieldsWithTypes(item: FieldsWithTypes): PublicProofInputs;
    static fromBcs(data: Uint8Array): PublicProofInputs;
}
