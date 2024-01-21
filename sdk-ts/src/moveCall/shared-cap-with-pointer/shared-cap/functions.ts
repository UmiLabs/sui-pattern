import { PUBLISHED_AT } from '..';
import { GenericArg, ObjectArg, Type, generic, obj, pure } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';

export function new_(txb: TransactionBlock, typeArg: Type, t0: GenericArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::shared_cap::new`,
    typeArguments: [typeArg],
    arguments: [generic(txb, `${typeArg}`, t0)],
  });
}

export function create(txb: TransactionBlock, typeArg: Type, t0: GenericArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::shared_cap::create`,
    typeArguments: [typeArg],
    arguments: [generic(txb, `${typeArg}`, t0)],
  });
}

export interface CheckCapArgs {
  sharedCap: ObjectArg;
  regulatedPointer: ObjectArg;
}

export function checkCap(txb: TransactionBlock, typeArg: Type, args: CheckCapArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::shared_cap::check_cap`,
    typeArguments: [typeArg],
    arguments: [obj(txb, args.sharedCap), obj(txb, args.regulatedPointer)],
  });
}

export interface GetPointerByHolderArgs {
  sharedCap: ObjectArg;
  address: string | TransactionArgument;
}

export function getPointerByHolder(
  txb: TransactionBlock,
  typeArg: Type,
  args: GetPointerByHolderArgs,
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::shared_cap::get_pointer_by_holder`,
    typeArguments: [typeArg],
    arguments: [obj(txb, args.sharedCap), pure(txb, args.address, `address`)],
  });
}

export interface AddPointerArgs {
  sharedCap: ObjectArg;
  regulatedPointer: ObjectArg;
  address: string | TransactionArgument;
}

export function addPointer(txb: TransactionBlock, typeArg: Type, args: AddPointerArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::shared_cap::add_pointer`,
    typeArguments: [typeArg],
    arguments: [
      obj(txb, args.sharedCap),
      obj(txb, args.regulatedPointer),
      pure(txb, args.address, `address`),
    ],
  });
}

export interface RemovePointerArgs {
  sharedCap: ObjectArg;
  regulatedPointer: ObjectArg;
  address: string | TransactionArgument;
}

export function removePointer(txb: TransactionBlock, typeArg: Type, args: RemovePointerArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::shared_cap::remove_pointer`,
    typeArguments: [typeArg],
    arguments: [
      obj(txb, args.sharedCap),
      obj(txb, args.regulatedPointer),
      pure(txb, args.address, `address`),
    ],
  });
}
