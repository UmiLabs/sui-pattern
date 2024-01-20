import * as package_1 from '../_dependencies/onchain/0x1/init';
import * as package_2 from '../_dependencies/onchain/0x2/init';
import * as package_7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147 from '../sui-pattern/init';
import { structClassLoaderOnchain as structClassLoader } from './loader';

let initialized = false;
export function initLoaderIfNeeded() {
  if (initialized) {
    return;
  }
  initialized = true;
  package_1.registerClasses(structClassLoader);
  package_2.registerClasses(structClassLoader);
  package_7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147.registerClasses(
    structClassLoader,
  );
}
