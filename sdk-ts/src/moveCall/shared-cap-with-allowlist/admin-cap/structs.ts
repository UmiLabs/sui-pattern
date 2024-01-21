import { ID, UID } from '../../_dependencies/onchain/0x2/object/structs';
import { FieldsWithTypes, Type, compressSuiType } from '../../_framework/util';
import { bcs } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';

/* ============================== Counter =============================== */

export function isCounter(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type ===
    '0x7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147::admin_cap::Counter'
  );
}

export interface CounterFields {
  id: string;
  count: bigint;
}

export class Counter {
  static readonly $typeName =
    '0x7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147::admin_cap::Counter';
  static readonly $numTypeParams = 0;

  static get bcs() {
    return bcs.struct('Counter', {
      id: UID.bcs,
      count: bcs.u64(),
    });
  }

  readonly id: string;
  readonly count: bigint;

  constructor(fields: CounterFields) {
    this.id = fields.id;
    this.count = fields.count;
  }

  static fromFields(fields: Record<string, any>): Counter {
    return new Counter({ id: UID.fromFields(fields.id).id, count: BigInt(fields.count) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Counter {
    if (!isCounter(item.type)) {
      throw new Error('not a Counter type');
    }
    return new Counter({ id: item.fields.id.id, count: BigInt(item.fields.count) });
  }

  static fromBcs(data: Uint8Array): Counter {
    return Counter.fromFields(Counter.bcs.parse(data));
  }

  static fromSuiParsedData(content: SuiParsedData) {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object');
    }
    if (!isCounter(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Counter object`);
    }
    return Counter.fromFieldsWithTypes(content);
  }

  static async fetch(client: SuiClient, id: string): Promise<Counter> {
    const res = await client.getObject({ id, options: { showContent: true } });
    if (res.error) {
      throw new Error(`error fetching Counter object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.content?.dataType !== 'moveObject' || !isCounter(res.data.content.type)) {
      throw new Error(`object at id ${id} is not a Counter object`);
    }
    return Counter.fromFieldsWithTypes(res.data.content);
  }
}

/* ============================== AdminCap =============================== */

export function isAdminCap(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type ===
    '0x7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147::admin_cap::AdminCap'
  );
}

export interface AdminCapFields {
  id: string;
  counterId: string;
}

export class AdminCap {
  static readonly $typeName =
    '0x7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147::admin_cap::AdminCap';
  static readonly $numTypeParams = 0;

  static get bcs() {
    return bcs.struct('AdminCap', {
      id: UID.bcs,
      counter_id: ID.bcs,
    });
  }

  readonly id: string;
  readonly counterId: string;

  constructor(fields: AdminCapFields) {
    this.id = fields.id;
    this.counterId = fields.counterId;
  }

  static fromFields(fields: Record<string, any>): AdminCap {
    return new AdminCap({
      id: UID.fromFields(fields.id).id,
      counterId: ID.fromFields(fields.counter_id).bytes,
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): AdminCap {
    if (!isAdminCap(item.type)) {
      throw new Error('not a AdminCap type');
    }
    return new AdminCap({ id: item.fields.id.id, counterId: item.fields.counter_id });
  }

  static fromBcs(data: Uint8Array): AdminCap {
    return AdminCap.fromFields(AdminCap.bcs.parse(data));
  }

  static fromSuiParsedData(content: SuiParsedData) {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object');
    }
    if (!isAdminCap(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`);
    }
    return AdminCap.fromFieldsWithTypes(content);
  }

  static async fetch(client: SuiClient, id: string): Promise<AdminCap> {
    const res = await client.getObject({ id, options: { showContent: true } });
    if (res.error) {
      throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.content?.dataType !== 'moveObject' || !isAdminCap(res.data.content.type)) {
      throw new Error(`object at id ${id} is not a AdminCap object`);
    }
    return AdminCap.fromFieldsWithTypes(res.data.content);
  }
}
