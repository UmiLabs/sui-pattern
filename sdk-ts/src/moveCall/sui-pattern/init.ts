import * as adminCap from './admin-cap/structs';
import { StructClassLoader } from '../_framework/loader';

export function registerClasses(loader: StructClassLoader) {
  loader.register(adminCap.Counter);
  loader.register(adminCap.AdminCap);
}
