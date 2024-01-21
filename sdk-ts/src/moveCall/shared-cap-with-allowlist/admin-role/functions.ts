import { PUBLISHED_AT } from '..';
import { pure } from '../../_framework/util';
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions';

export function createAdminRole(txb: TransactionBlock, string: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::admin_role::create_admin_role`,
    arguments: [pure(txb, string, `0x1::string::String`)],
  });
}
