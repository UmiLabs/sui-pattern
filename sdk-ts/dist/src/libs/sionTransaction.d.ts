import { TransactionBlock } from '@mysten/sui.js/transactions';
import { CredentialClaim } from './types';
export declare const sionMoveCall: {
    createMembershipRegister: (txb: TransactionBlock) => Promise<void>;
    insertMember: (txb: TransactionBlock, args: {
        membershipRegistryId: string;
        memberAddress: string;
    }) => Promise<void>;
    insertClaims: (txb: TransactionBlock, args: {
        membershipId: string;
        claimList: CredentialClaim[];
    }) => Promise<void>;
    verifyClaimDigest: (txb: TransactionBlock, args: {
        membershipId: string;
        claimValueList: bigint[];
    }) => Promise<void>;
    boundCheck: (txb: TransactionBlock, args: {
        membershipId: string;
        claimKey: string;
        lower_bound_gte: bigint;
        upper_bound_le: bigint;
        proof: Buffer;
        vk: Buffer;
    }) => Promise<void>;
};
