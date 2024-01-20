import { TransactionBlock } from '@mysten/sui.js/transactions';
import { create, receive } from 'src/moveCall/shared-wallet/wallet/functions';
import { isWallet } from 'src/moveCall/shared-wallet/wallet/structs';
import { new_ } from 'src/moveCall/shared-wallet/goods/functions';
import { isGoods } from 'src/moveCall/shared-wallet/goods/structs';
import { ALICE, BOB, EVE, signAndExecuteTxb } from './common';


// Alice creates a shared wallet for Alice and Bob.
const { wallet } = await (async () => {
  const txb = new TransactionBlock();
  create(txb, [ALICE.toSuiAddress(), BOB.toSuiAddress()]);

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: ALICE });
  console.log(JSON.stringify(result, null, 2));


  return {
    wallet: result.objectChanges?.find((obj: any) => isWallet(obj?.objectType))!,
  };
})();
console.log({ wallet });


// Alice creates a goods and sends it to the shared wallet.
const { goods } = await (async () => {
  const txb = new TransactionBlock();
  const new_goods = new_(txb, BigInt(42));
  txb.transferObjects([new_goods], wallet.objectId);

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: ALICE });
  console.log(JSON.stringify(result, null, 2));

  return {
    goods: result.objectChanges?.find((obj: any) => isGoods(obj?.objectType))!,
  };
})();
console.log({ goods });

const store = {
  wallet: wallet.objectId,
  receiving: goods.objectId,
};


// EVE tries to receive the goods but fails.
{
  const txb = new TransactionBlock();
  const goods = receive(txb, {
    wallet: store.wallet,
    receiving: store.receiving,
  });
  txb.transferObjects([goods], EVE.toSuiAddress());

  await signAndExecuteTxb({ transactionBlock: txb, signer: EVE })
  .catch((err) => { console.log(err); });
}


// BOB receives the goods from the shared wallet.
{
  const txb = new TransactionBlock();
  const goods = receive(txb, {
    wallet: store.wallet,
    receiving: store.receiving,
  });
  txb.transferObjects([goods], BOB.toSuiAddress());

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: BOB });
  console.log(JSON.stringify(result, null, 2));

  console.log({
    goods: result.objectChanges?.find((obj: any) => isGoods(obj?.objectType))!,
  });
}