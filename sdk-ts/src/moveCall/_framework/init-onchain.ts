import * as package_1 from '../_dependencies/onchain/0x1/init';
import * as package_2 from '../_dependencies/onchain/0x2/init';
import * as package_7834ebcdc91698656da64df52f9b323d13b3ee810e64f9193c9a3abb8bd39e34 from '../counter-with-pointer/init';
import * as package_7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147 from '../shared-cap-with-allowlist/init';
import * as package_b1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784 from '../shared-cap-with-pointer/init';
import * as package_2a5c6790608eb9523c962ad80cb58a7439eb2ed4b5e38a9c229b5a5379d37704 from '../shared-wallet/init';
import { structClassLoaderOnchain as structClassLoader } from './loader';

let initialized = false;
export function initLoaderIfNeeded() {
  if (initialized) {
    return;
  }
  initialized = true;
  package_1.registerClasses(structClassLoader);
  package_2.registerClasses(structClassLoader);
  package_2a5c6790608eb9523c962ad80cb58a7439eb2ed4b5e38a9c229b5a5379d37704.registerClasses(
    structClassLoader,
  );
  package_7834ebcdc91698656da64df52f9b323d13b3ee810e64f9193c9a3abb8bd39e34.registerClasses(
    structClassLoader,
  );
  package_7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147.registerClasses(
    structClassLoader,
  );
  package_b1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784.registerClasses(
    structClassLoader,
  );
}
