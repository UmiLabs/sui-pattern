import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function bls12381(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export declare function bn254(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface PrepareVerifyingKeyArgs {
    curve: ObjectArg;
    verifyingKey: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function prepareVerifyingKey(txb: TransactionBlock, args: PrepareVerifyingKeyArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface PrepareVerifyingKeyInternalArgs {
    curve: number | TransactionArgument;
    verifyingKey: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function prepareVerifyingKeyInternal(txb: TransactionBlock, args: PrepareVerifyingKeyInternalArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function proofPointsFromBytes(txb: TransactionBlock, bytes: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export declare function publicProofInputsFromBytes(txb: TransactionBlock, bytes: Array<number | TransactionArgument> | TransactionArgument): import("@mysten/sui.js/transactions").TransactionResult;
export interface PvkFromBytesArgs {
    vkGammaAbcG1Bytes: Array<number | TransactionArgument> | TransactionArgument;
    alphaG1BetaG2Bytes: Array<number | TransactionArgument> | TransactionArgument;
    gammaG2NegPcBytes: Array<number | TransactionArgument> | TransactionArgument;
    deltaG2NegPcBytes: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function pvkFromBytes(txb: TransactionBlock, args: PvkFromBytesArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function pvkToBytes(txb: TransactionBlock, pvk: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface VerifyGroth16ProofArgs {
    curve: ObjectArg;
    preparedVerifyingKey: ObjectArg;
    publicProofInputs: ObjectArg;
    proofPoints: ObjectArg;
}
export declare function verifyGroth16Proof(txb: TransactionBlock, args: VerifyGroth16ProofArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface VerifyGroth16ProofInternalArgs {
    curve: number | TransactionArgument;
    vkGammaAbcG1Bytes: Array<number | TransactionArgument> | TransactionArgument;
    alphaG1BetaG2Bytes: Array<number | TransactionArgument> | TransactionArgument;
    gammaG2NegPcBytes: Array<number | TransactionArgument> | TransactionArgument;
    deltaG2NegPcBytes: Array<number | TransactionArgument> | TransactionArgument;
    publicProofInputs: Array<number | TransactionArgument> | TransactionArgument;
    proofPoints: Array<number | TransactionArgument> | TransactionArgument;
}
export declare function verifyGroth16ProofInternal(txb: TransactionBlock, args: VerifyGroth16ProofInternalArgs): import("@mysten/sui.js/transactions").TransactionResult;
