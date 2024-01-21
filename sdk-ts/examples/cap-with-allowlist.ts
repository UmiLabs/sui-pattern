import { TransactionBlock } from '@mysten/sui.js/transactions';
import {
  createCounter,
  increment,
} from 'src/moveCall/shared-cap-with-allowlist/admin-cap/functions';
import { isAdminCap, isCounter } from 'src/moveCall/shared-cap-with-allowlist/admin-cap/structs';
import { ALICE, BOB, EVE, signAndExecuteTxb } from './common';

const { counter, adminCap } = await (async () => {
  const txb = new TransactionBlock();
  createCounter(txb, ALICE.toSuiAddress());

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: ALICE });
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

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: ALICE });
  console.log(JSON.stringify(result, null, 2));
}

{
  const txb = new TransactionBlock();
  increment(txb, {
    counter: counter.objectId,
    adminCap: adminCap.objectId,
  });

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: BOB });
  console.log(JSON.stringify(result, null, 2));
}
