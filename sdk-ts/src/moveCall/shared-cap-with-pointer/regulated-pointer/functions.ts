import { PUBLISHED_AT } from '..';
import { GenericArg, ObjectArg, Type, generic, obj, pure } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';

export function delete_(txb: TransactionBlock, typeArg: Type, regulatedPointer: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::regulated_pointer::delete`,
    typeArguments: [typeArg],
    arguments: [obj(txb, regulatedPointer)],
  });
}

export interface CreateArgs {
  t0: GenericArg;
  address: string | TransactionArgument;
}

export function create(txb: TransactionBlock, typeArg: Type, args: CreateArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::regulated_pointer::create`,
    typeArguments: [typeArg],
    arguments: [generic(txb, `${typeArg}`, args.t0), pure(txb, args.address, `address`)],
  });
}

export function referTo(txb: TransactionBlock, typeArg: Type, regulatedPointer: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::regulated_pointer::refer_to`,
    typeArguments: [typeArg],
    arguments: [obj(txb, regulatedPointer)],
  });
}

export function holder(txb: TransactionBlock, typeArg: Type, regulatedPointer: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::regulated_pointer::holder`,
    typeArguments: [typeArg],
    arguments: [obj(txb, regulatedPointer)],
  });
}

export interface TakePointerArgs {
  uid: ObjectArg;
  receiving: ObjectArg;
}

export function takePointer(txb: TransactionBlock, typeArg: Type, args: TakePointerArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::regulated_pointer::take_pointer`,
    typeArguments: [typeArg],
    arguments: [obj(txb, args.uid), obj(txb, args.receiving)],
  });
}

export interface ReturnPointerArgs {
  regulatedPointer: ObjectArg;
  pointerReceipt: ObjectArg;
}

export function returnPointer(txb: TransactionBlock, typeArg: Type, args: ReturnPointerArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::regulated_pointer::return_pointer`,
    typeArguments: [typeArg],
    arguments: [obj(txb, args.regulatedPointer), obj(txb, args.pointerReceipt)],
  });
}
