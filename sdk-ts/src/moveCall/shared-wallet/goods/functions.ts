import { PUBLISHED_AT } from '..';
import { ObjectArg, obj, pure } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';

export function new_(txb: TransactionBlock, u64: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::goods::new`,
    arguments: [pure(txb, u64, `u64`)],
  });
}

export function token(txb: TransactionBlock, goods: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::goods::token`, arguments: [obj(txb, goods)] });
}
