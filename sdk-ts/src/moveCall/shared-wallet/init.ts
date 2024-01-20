import * as goods from './goods/structs';
import * as wallet from './wallet/structs';
import { StructClassLoader } from '../_framework/loader';

export function registerClasses(loader: StructClassLoader) {
  loader.register(goods.Goods);
  loader.register(wallet.Wallet);
}
