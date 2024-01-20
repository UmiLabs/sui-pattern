import { GenericArg, ObjectArg, Type } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export interface TransferArgs {
    obj: GenericArg;
    recipient: string | TransactionArgument;
}
export declare function transfer(txb: TransactionBlock, typeArg: Type, args: TransferArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function freezeObject(txb: TransactionBlock, typeArg: Type, obj: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function freezeObjectImpl(txb: TransactionBlock, typeArg: Type, obj: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function publicFreezeObject(txb: TransactionBlock, typeArg: Type, obj: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function publicShareObject(txb: TransactionBlock, typeArg: Type, obj: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface PublicTransferArgs {
    obj: GenericArg;
    recipient: string | TransactionArgument;
}
export declare function publicTransfer(txb: TransactionBlock, typeArg: Type, args: PublicTransferArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ReceiveArgs {
    parent: ObjectArg;
    toReceive: ObjectArg;
}
export declare function receive(txb: TransactionBlock, typeArg: Type, args: ReceiveArgs): import("@mysten/sui.js/transactions").TransactionResult;
export interface ReceiveImplArgs {
    parent: string | TransactionArgument;
    toReceive: string | TransactionArgument;
    version: bigint | TransactionArgument;
}
export declare function receiveImpl(txb: TransactionBlock, typeArg: Type, args: ReceiveImplArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function shareObject(txb: TransactionBlock, typeArg: Type, obj: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function shareObjectImpl(txb: TransactionBlock, typeArg: Type, obj: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface TransferImplArgs {
    obj: GenericArg;
    recipient: string | TransactionArgument;
}
export declare function transferImpl(txb: TransactionBlock, typeArg: Type, args: TransferImplArgs): import("@mysten/sui.js/transactions").TransactionResult;
