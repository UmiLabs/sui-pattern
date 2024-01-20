import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';
import { ObjectArg } from '../../_framework/util';
import { mintPoap, MintPoapArgs as _MintPoapArgs } from '../moveCall/coco/manage-gatherings/functions';
export declare namespace CocoMoveCall {
    type CreateAssociationArgs = {
        clock: ObjectArg;
    };
    type CreateGatheringArgs = {
        name: string;
        description: string;
        startAt: Date;
        endAt: Date;
        poapName: string;
        poapDescription: string;
        poapImgUrl: string;
        association: ObjectArg;
        clock: ObjectArg;
    };
    type MintPoapArgs = _MintPoapArgs;
    type VerifyArgs = {
        vk: Array<number | TransactionArgument> | TransactionArgument;
        publicInputs: Array<number | TransactionArgument> | TransactionArgument;
        proof: Array<number | TransactionArgument> | TransactionArgument;
    };
}
export declare const cocoMoveCall: {
    createAssociation: (txb: TransactionBlock, args: CocoMoveCall.CreateAssociationArgs) => Promise<void>;
    createGathering: (txb: TransactionBlock, args: CocoMoveCall.CreateGatheringArgs) => Promise<void>;
    mintPoap: typeof mintPoap;
    verify: (txb: TransactionBlock, args: CocoMoveCall.VerifyArgs) => Promise<void>;
};
