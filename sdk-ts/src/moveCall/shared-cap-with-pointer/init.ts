import * as regulatedPointer from './regulated-pointer/structs';
import * as sharedCap from './shared-cap/structs';
import { StructClassLoader } from '../_framework/loader';

export function registerClasses(loader: StructClassLoader) {
  loader.register(regulatedPointer.RegulatedPointer);
  loader.register(regulatedPointer.PointerReceipt);
  loader.register(sharedCap.SharedCap);
  loader.register(sharedCap.EventHolderInfo);
}
