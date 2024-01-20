import * as package_1 from '../_dependencies/onchain/0x1/init';
import * as package_2 from '../_dependencies/onchain/0x2/init';
import * as package_a284d5399d34a4fc727a7d03f63b54cf6a57474c9fa4565783c125d637206de8 from '../sui-pattern/init';
import { structClassLoaderOnchain as structClassLoader } from './loader';

let initialized = false;
export function initLoaderIfNeeded() {
  if (initialized) {
    return;
  }
  initialized = true;
  package_1.registerClasses(structClassLoader);
  package_2.registerClasses(structClassLoader);
  package_a284d5399d34a4fc727a7d03f63b54cf6a57474c9fa4565783c125d637206de8.registerClasses(
    structClassLoader,
  );
}
