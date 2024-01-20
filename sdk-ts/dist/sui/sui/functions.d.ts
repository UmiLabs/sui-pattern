import { ObjectArg } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
export declare function new_(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface TransferArgs {
    c: ObjectArg;
    recipient: string | TransactionArgument;
}
export declare function transfer(txb: TransactionBlock, args: TransferArgs): import("@mysten/sui.js/transactions").TransactionResult;
