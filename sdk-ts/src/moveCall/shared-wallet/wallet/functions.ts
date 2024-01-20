import { PUBLISHED_AT } from '..';
import { ObjectArg, obj, pure } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';

export interface ReceiveArgs {
  wallet: ObjectArg;
  receiving: ObjectArg;
}

export function receive(txb: TransactionBlock, args: ReceiveArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::wallet::receive`,
    arguments: [obj(txb, args.wallet), obj(txb, args.receiving)],
  });
}

export function create(
  txb: TransactionBlock,
  vecAddress: Array<string | TransactionArgument> | TransactionArgument,
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::wallet::create`,
    arguments: [pure(txb, vecAddress, `vector<address>`)],
  });
}

export function checkCap(txb: TransactionBlock, wallet: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::wallet::check_cap`,
    arguments: [obj(txb, wallet)],
  });
}
