import { ID, UID } from '../../_dependencies/onchain/0x2/object/structs';
import { FieldsWithTypes, Type, compressSuiType } from '../../_framework/util';
import { bcs } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';

/* ============================== Counter =============================== */

export function isCounter(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type === '0x7834ebcdc91698656da64df52f9b323d13b3ee810e64f9193c9a3abb8bd39e34::counter::Counter'
  );
}

export interface CounterFields {
  id: string;
  count: bigint;
}

export class Counter {
  static readonly $typeName =
    '0x7834ebcdc91698656da64df52f9b323d13b3ee810e64f9193c9a3abb8bd39e34::counter::Counter';
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

/* ============================== LogAdminCapId =============================== */

export function isLogAdminCapId(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type ===
    '0x7834ebcdc91698656da64df52f9b323d13b3ee810e64f9193c9a3abb8bd39e34::counter::LogAdminCapId'
  );
}

export interface LogAdminCapIdFields {
  capId: string;
}

export class LogAdminCapId {
  static readonly $typeName =
    '0x7834ebcdc91698656da64df52f9b323d13b3ee810e64f9193c9a3abb8bd39e34::counter::LogAdminCapId';
  static readonly $numTypeParams = 0;

  static get bcs() {
    return bcs.struct('LogAdminCapId', {
      cap_id: ID.bcs,
    });
  }

  readonly capId: string;

  constructor(capId: string) {
    this.capId = capId;
  }

  static fromFields(fields: Record<string, any>): LogAdminCapId {
    return new LogAdminCapId(ID.fromFields(fields.cap_id).bytes);
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): LogAdminCapId {
    if (!isLogAdminCapId(item.type)) {
      throw new Error('not a LogAdminCapId type');
    }
    return new LogAdminCapId(item.fields.cap_id);
  }

  static fromBcs(data: Uint8Array): LogAdminCapId {
    return LogAdminCapId.fromFields(LogAdminCapId.bcs.parse(data));
  }
}
