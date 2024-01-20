import { ObjectArg } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
export declare function create(txb: TransactionBlock): import("@mysten/sui.js/transactions").TransactionResult;
export interface ConsensusCommitPrologueArgs {
    clock: ObjectArg;
    timestampMs: bigint | TransactionArgument;
}
export declare function consensusCommitPrologue(txb: TransactionBlock, args: ConsensusCommitPrologueArgs): import("@mysten/sui.js/transactions").TransactionResult;
export declare function timestampMs(txb: TransactionBlock, clock: ObjectArg): import("@mysten/sui.js/transactions").TransactionResult;
