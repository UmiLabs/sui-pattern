import { TransactionBlock } from '@mysten/sui.js/transactions';
import { ObjectArg } from '../moveCall/_framework/util';
export declare namespace PoapMoveCall {
    type PoapMoveCall = {
        name: string;
        description: string;
        imgUrl: string;
        gatheringId: string;
        projectUrl: string;
        creatorName: string;
        clock: ObjectArg;
    };
}
export declare const poapMoveCall: {
    mintPoap: (txb: TransactionBlock, args: PoapMoveCall.PoapMoveCall) => import("@mysten/sui.js/transactions").TransactionResult;
};
