import { PUBLISHED_AT } from '..';
import { ObjectArg, obj } from '../../_framework/util';
import { TransactionBlock } from '@mysten/sui.js/transactions';

export function new_(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::counter::new`, arguments: [] });
}

export function create(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::counter::create`, arguments: [] });
}

export interface CheckCapArgs {
  counter: ObjectArg;
  sharedCap: ObjectArg;
  regulatedPointer: ObjectArg;
}

export function checkCap(txb: TransactionBlock, args: CheckCapArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::counter::check_cap`,
    arguments: [obj(txb, args.counter), obj(txb, args.sharedCap), obj(txb, args.regulatedPointer)],
  });
}

export function count(txb: TransactionBlock, counter: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::counter::count`,
    arguments: [obj(txb, counter)],
  });
}

export interface IncrementArgs {
  counter: ObjectArg;
  sharedCap: ObjectArg;
  regulatedPointer: ObjectArg;
}

export function increment(txb: TransactionBlock, args: IncrementArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::counter::increment`,
    arguments: [obj(txb, args.counter), obj(txb, args.sharedCap), obj(txb, args.regulatedPointer)],
  });
}

export function adminCapKey(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::counter::admin_cap_key`, arguments: [] });
}

export function getAdminCapId(txb: TransactionBlock, counter: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::counter::get_admin_cap_id`,
    arguments: [obj(txb, counter)],
  });
}
