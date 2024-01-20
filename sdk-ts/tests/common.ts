import { SuiClient, SuiTransactionBlockResponse, getFullnodeUrl } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { fromB64 } from '@mysten/sui.js/utils';
import { Keypair } from '@mysten/sui.js/cryptography';

const client = new SuiClient({ url: getFullnodeUrl('testnet') });

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const signAndExecuteTxb = async (props: {
  transactionBlock: TransactionBlock;
  signer: Keypair;
}) => {
  const result: SuiTransactionBlockResponse = await client.signAndExecuteTransactionBlock({
    requestType: 'WaitForLocalExecution',
    options: {
      showObjectChanges: true,
      showEvents: true,
    },
    ...props,
  });
  return result;
};

export const ALICE = Ed25519Keypair.fromSecretKey(
  fromB64('AOXuSlNf/WRN74tdITj8eglJFfI/qp2eLIh+DzjGYRoA').slice(1),
);
export const BOB = Ed25519Keypair.fromSecretKey(
  fromB64('AJCdbMCitYfiSDcrd29eMkXAQXP0jCT6Ebxbo6ZYT1J9').slice(1),
);
export const EVE = Ed25519Keypair.fromSecretKey(
  fromB64('AAoCWSIPmaJ9L+zjd1q6erxCObuWtIvIHYg9aIMnV0XG').slice(1),
);

console.log('ALICE:', ALICE.toSuiAddress());
console.log('BOB:', BOB.toSuiAddress());
console.log('EVE:', EVE.toSuiAddress());

