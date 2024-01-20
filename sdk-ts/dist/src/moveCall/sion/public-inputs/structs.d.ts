import { FieldsWithTypes, Type } from '../../_framework/util';
export declare function isPublicInputsArgs(type: Type): boolean;
export interface PublicInputsArgsFields {
    expectedDigest: Array<number>;
    min: bigint;
    max: bigint;
}
export declare class PublicInputsArgs {
    static readonly $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::public_inputs::PublicInputsArgs";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        expected_digest: number[];
        min: string;
        max: string;
    }, {
        expected_digest: Iterable<number> & {
            length: number;
        };
        min: string | number | bigint;
        max: string | number | bigint;
    }>;
    readonly expectedDigest: Array<number>;
    readonly min: bigint;
    readonly max: bigint;
    constructor(fields: PublicInputsArgsFields);
    static fromFields(fields: Record<string, any>): PublicInputsArgs;
    static fromFieldsWithTypes(item: FieldsWithTypes): PublicInputsArgs;
    static fromBcs(data: Uint8Array): PublicInputsArgs;
}
