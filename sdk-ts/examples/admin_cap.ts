import { SuiClient, SuiTransactionBlockResponse, getFullnodeUrl } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { fromB64 } from '@mysten/sui.js/utils';
import { createCounter, increment } from 'src/moveCall/sui-pattern/admin-cap/functions';
import { isAdminCap, isCounter } from 'src/moveCall/sui-pattern/admin-cap/structs';

const client = new SuiClient({ url: getFullnodeUrl('testnet') });

const ALICE = Ed25519Keypair.fromSecretKey(
  fromB64('AOXuSlNf/WRN74tdITj8eglJFfI/qp2eLIh+DzjGYRoA').slice(1),
);
const BOB = Ed25519Keypair.fromSecretKey(
  fromB64('AJCdbMCitYfiSDcrd29eMkXAQXP0jCT6Ebxbo6ZYT1J9').slice(1),
);

console.log('ALICE:', ALICE.toSuiAddress());
console.log('BOB:', BOB.toSuiAddress());

const { counter, adminCap } = await (async () => {
  const txb = new TransactionBlock();
  createCounter(txb, ALICE.toSuiAddress());

  const result: SuiTransactionBlockResponse = await client.signAndExecuteTransactionBlock({
    transactionBlock: txb,
    signer: ALICE,
    requestType: 'WaitForLocalExecution',
    options: {
      showObjectChanges: true,
      showEvents: true,
    },
  });
  console.log(JSON.stringify(result, null, 2));

  const counter = result.objectChanges?.find((obj: any) => isCounter(obj?.objectType))!;

  const adminCap = result.objectChanges?.find((obj: any) => isAdminCap(obj?.objectType))!;

  return { counter, adminCap };
})();
console.log({ counter, adminCap });

{
  const txb = new TransactionBlock();
  increment(txb, {
    counter: counter.objectId,
    adminCap: adminCap.objectId,
  });

  const result: SuiTransactionBlockResponse = await client.signAndExecuteTransactionBlock({
    transactionBlock: txb,
    signer: ALICE,
    requestType: 'WaitForLocalExecution',
    options: {
      showObjectChanges: true,
      showEvents: true,
    },
  });
  console.log(JSON.stringify(result, null, 2));
}

{
  const txb = new TransactionBlock();
  increment(txb, {
    counter: counter.objectId,
    adminCap: adminCap.objectId,
  });

  const result: SuiTransactionBlockResponse = await client.signAndExecuteTransactionBlock({
    transactionBlock: txb,
    signer: BOB,
    requestType: 'WaitForLocalExecution',
    options: {
      showObjectChanges: true,
      showEvents: true,
    },
  });
  console.log(JSON.stringify(result, null, 2));
}
