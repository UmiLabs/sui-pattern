import { GenericArg, ObjectArg, Type } from '../../_framework/util';
import { TransactionBlock } from '@mysten/sui.js/transactions';
export declare function borrow(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function new_(txb: TransactionBlock, typeArg: Type, value: GenericArg): import("@mysten/sui.js/transactions").TransactionResult;
export declare function destroy(txb: TransactionBlock, typeArg: Type, self: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
export interface PutBackArgs {
    self: ObjectArg;
    value: GenericArg;
    borrow: ObjectArg;
}
export declare function putBack(txb: TransactionBlock, typeArg: Type, args: PutBackArgs): import("@mysten/sui.js/transactions").TransactionResult;
