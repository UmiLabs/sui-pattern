import { SuiClient, SuiTransactionBlockResponse, getFullnodeUrl } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { fromB64 } from '@mysten/sui.js/utils';
import { create, receive } from 'src/moveCall/shared-wallet/wallet/functions';
import { isWallet } from 'src/moveCall/shared-wallet/wallet/structs';
import { createCounter, increment } from 'src/moveCall/sui-pattern/admin-cap/functions';
import { isAdminCap, isCounter } from 'src/moveCall/sui-pattern/admin-cap/structs';
import { createAdminRole } from 'src/moveCall/sui-pattern/admin-role/functions';
import { isRole } from 'src/moveCall/sui-pattern/admin-role/structs';
import { new_ } from 'src/moveCall/shared-wallet/goods/functions';
import { isGoods } from 'src/moveCall/shared-wallet/goods/structs';
import { Keypair } from '@mysten/sui.js/cryptography';
import { PUBLISHED_AT } from 'src/moveCall/shared-wallet';
import { obj } from 'src/moveCall/_framework/util';

const client = new SuiClient({ url: getFullnodeUrl('testnet') });

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ALICE = Ed25519Keypair.fromSecretKey(
  fromB64('AOXuSlNf/WRN74tdITj8eglJFfI/qp2eLIh+DzjGYRoA').slice(1),
);
const BOB = Ed25519Keypair.fromSecretKey(
  fromB64('AJCdbMCitYfiSDcrd29eMkXAQXP0jCT6Ebxbo6ZYT1J9').slice(1),
);
const EVE = Ed25519Keypair.fromSecretKey(
  fromB64('AAoCWSIPmaJ9L+zjd1q6erxCObuWtIvIHYg9aIMnV0XG').slice(1),
);

console.log('ALICE:', ALICE.toSuiAddress());
console.log('BOB:', BOB.toSuiAddress());
console.log('EVE:', EVE.toSuiAddress());

const signAndExecuteTxb = async (props: {
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

const { wallet } = await (async () => {
  const txb = new TransactionBlock();
  create(txb, [ALICE.toSuiAddress(), BOB.toSuiAddress()]);

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: ALICE });
  console.log(JSON.stringify(result, null, 2));

  const wallet = result.objectChanges?.find((obj: any) => isWallet(obj?.objectType))!;
  return { wallet };
})();
console.log({ wallet });

const { goods } = await (async () => {
  const txb = new TransactionBlock();
  const new_goods = new_(txb, BigInt(42));
  txb.transferObjects([new_goods], wallet.objectId);

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: ALICE });
  console.log(JSON.stringify(result, null, 2));

  const goods = result.objectChanges?.find((obj: any) => isGoods(obj?.objectType))!;
  return { goods };
})();
console.log({ goods });

const store = {
  wallet: wallet.objectId,
  receiving: goods.objectId,
};

await (async () => {
  const txb = new TransactionBlock();
  const goods = receive(txb, {
    wallet: store.wallet,
    receiving: store.receiving,
  });
  txb.transferObjects([goods], BOB.toSuiAddress());

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: EVE });
  console.log(JSON.stringify(result, null, 2));

  return {
    goods: result.objectChanges?.find((obj: any) => isGoods(obj?.objectType))!,
  };
})();

await (async () => {
  const txb = new TransactionBlock();
  const goods = receive(txb, {
    wallet: store.wallet,
    receiving: store.receiving,
  });
  txb.transferObjects([goods], BOB.toSuiAddress());

  const result = await signAndExecuteTxb({ transactionBlock: txb, signer: BOB });
  console.log(JSON.stringify(result, null, 2));

  return {
    goods: result.objectChanges?.find((obj: any) => isGoods(obj?.objectType))!,
  };
})();
