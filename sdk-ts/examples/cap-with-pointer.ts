import { TransactionBlock } from '@mysten/sui.js/transactions';
import { ALICE, BOB, EVE, dryRun, signAndExecuteTxb } from './common';
import {
  RegulatedPointer,
  isRegulatedPointer,
} from 'src/moveCall/shared-cap-with-pointer/regulated-pointer/structs';
import { Counter, isCounter } from 'src/moveCall/counter-with-pointer/counter/structs';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { SharedCap, isSharedCap } from 'src/moveCall/shared-cap-with-pointer/shared-cap/structs';
import { create, getAdminCapId } from 'src/moveCall/counter-with-pointer/counter/functions';
import { getPointerByHolder } from 'src/moveCall/shared-cap-with-pointer/shared-cap/functions';
import { increment } from 'src/moveCall/counter-with-pointer/counter/functions';


// Alice creates a counter
const { counter, cap, capPtr } = await (async () => {
  const txb = new TransactionBlock();
  create(txb);

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: ALICE });
  // console.log(JSON.stringify(result, null, 2));

  return {
    counter: result.objectChanges?.find((obj: any) => isCounter(obj?.objectType))!,
    cap: result.objectChanges?.find((obj: any) => isSharedCap(obj?.objectType))!,
    capPtr: result.objectChanges?.find((obj: any) => isRegulatedPointer(obj?.objectType))!,
  };
})();
console.log({ counter, cap, capPtr });


// Alice fetches the admin cap id
const { cap_id: adminCapId } = await (async () => {
  const txb = new TransactionBlock();
  console.log('>>>>', counter.objectId);
  getAdminCapId(txb, counter.objectId);
  const r = await dryRun(txb, { sender: ALICE.toSuiAddress() });
  return r.events?.[0].parsedJson;
})();
console.log({ adminCapId });


// Alice fetches the regulated pointer
const { holder, pointer_id: capPtrId} = await (async () => {
  const txb = new TransactionBlock();
  getPointerByHolder(txb, Counter.$typeName, {
    sharedCap: adminCapId,
    address: ALICE.toSuiAddress(),
  });
  const r = await dryRun(txb, { sender: ALICE.toSuiAddress() });
  return r.events?.[0].parsedJson;
})();
console.log({ holder, capPtrId });


// Alice increments the counter
{
  const txb = new TransactionBlock();
  increment(txb, {
    counter: counter.objectId,
    sharedCap: adminCapId,
    regulatedPointer: capPtrId,
  });

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: ALICE });
  // console.log(JSON.stringify(result, null, 2));
}


// Bob increments the counter but fails
{
  const txb = new TransactionBlock();
  increment(txb, {
    counter: counter.objectId,
    sharedCap: adminCapId,
    regulatedPointer: capPtrId,
  });

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: BOB });
  // console.log(JSON.stringify(result, null, 2));

  return {
    counter: result.objectChanges?.find((obj: any) => isCounter(obj?.objectType))!,
  };
}