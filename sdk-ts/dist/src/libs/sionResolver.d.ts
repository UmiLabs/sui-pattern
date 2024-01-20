import { SuiTransactionBlockResponse } from '@mysten/sui.js/client';
export declare const sionTransactionResponseResolver: {
    verifyClaimDigest: (response: SuiTransactionBlockResponse, args: {
        authenticator: string;
    }) => boolean;
    verifyBoundCheck: (response: SuiTransactionBlockResponse, args: {
        authenticator: string;
    }) => boolean;
};
