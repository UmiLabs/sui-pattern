import { SuiClient, SuiTransactionBlockResponse, getFullnodeUrl } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { fromB64 } from '@mysten/sui.js/utils';
import { createCounter, increment } from 'src/moveCall/sui-pattern/admin-cap/functions';
import { isAdminCap, isCounter } from 'src/moveCall/sui-pattern/admin-cap/structs';
import { createAdminRole } from 'src/moveCall/sui-pattern/admin-role/functions';
import { isRole } from 'src/moveCall/sui-pattern/admin-role/structs';

const client = new SuiClient({ url: getFullnodeUrl('testnet') });

const ALICE = Ed25519Keypair.fromSecretKey(
  fromB64('AOXuSlNf/WRN74tdITj8eglJFfI/qp2eLIh+DzjGYRoA').slice(1),
);
const BOB = Ed25519Keypair.fromSecretKey(
  fromB64('AJCdbMCitYfiSDcrd29eMkXAQXP0jCT6Ebxbo6ZYT1J9').slice(1),
);

console.log('ALICE:', ALICE.toSuiAddress());
console.log('BOB:', BOB.toSuiAddress());

const { adminRole } = await (async () => {
  const txb = new TransactionBlock();
  createAdminRole(txb, 'Administator');

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

  const adminRole = result.objectChanges?.find((obj: any) => isRole(obj?.objectType))!;
  return { adminRole };
})();
console.log({ adminRole });

const { counter, adminCap: _ } = await (async () => {
  const txb = new TransactionBlock();
  createCounter(txb, adminRole.objectId);

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
console.log({ counter });

const { adminCap } = await (async () => {
  const objectIds = await client
    .getOwnedObjects({
      owner: adminRole.objectId,
    })
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      return result.data.map((obj: any) => obj.data.objectId);
    });
  console.log({ objectIds });

  const result = await client.multiGetObjects({
    ids: objectIds,
    options: {
      showType: true,
    }
  });
  const adminCap = result.find((e) => e?.data?.type && isAdminCap(e.data.type))!;
  return { adminCap };
})();
console.log({ adminCap });

{
  const txb = new TransactionBlock();
  increment(txb, {
    counter: counter.objectId,
    adminCap: adminCap.data.objectId,
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
