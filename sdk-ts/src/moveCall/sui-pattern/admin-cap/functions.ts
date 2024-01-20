import { PUBLISHED_AT } from '..';
import { ObjectArg, obj, pure } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';

export function newAdminCap(txb: TransactionBlock, counter: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::admin_cap::new_admin_cap`,
    arguments: [obj(txb, counter)],
  });
}

export function createCounter(txb: TransactionBlock, address: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::admin_cap::create_counter`,
    arguments: [pure(txb, address, `address`)],
  });
}

export interface CheckCapArgs {
  counter: ObjectArg;
  adminCap: ObjectArg;
}

export function checkCap(txb: TransactionBlock, args: CheckCapArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::admin_cap::check_cap`,
    arguments: [obj(txb, args.counter), obj(txb, args.adminCap)],
  });
}

export interface IncrementArgs {
  counter: ObjectArg;
  adminCap: ObjectArg;
}

export function increment(txb: TransactionBlock, args: IncrementArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::admin_cap::increment`,
    arguments: [obj(txb, args.counter), obj(txb, args.adminCap)],
  });
}
