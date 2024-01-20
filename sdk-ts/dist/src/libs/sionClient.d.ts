import { SuiClient } from '@mysten/sui.js/client';
export declare const sionClient: {
    getOwnedMembershipPointerObjectId: (client: SuiClient, args: {
        address: string;
    }) => Promise<string | null>;
    getOwnedMembershipObjectId: (client: SuiClient, args: {
        address: string;
    }) => Promise<any>;
};
