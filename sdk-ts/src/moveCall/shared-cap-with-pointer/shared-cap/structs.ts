import { ID, UID } from '../../_dependencies/onchain/0x2/object/structs';
import { Table } from '../../_dependencies/onchain/0x2/table/structs';
import { FieldsWithTypes, Type, compressSuiType, parseTypeName } from '../../_framework/util';
import { bcs, fromHEX, toHEX } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';

/* ============================== SharedCap =============================== */

export function isSharedCap(type: Type): boolean {
  type = compressSuiType(type);
  return type.startsWith(
    '0xb1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784::shared_cap::SharedCap<',
  );
}

export interface SharedCapFields {
  id: string;
  targetId: string;
  pointerTable: Table;
}

export class SharedCap {
  static readonly $typeName =
    '0xb1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784::shared_cap::SharedCap';
  static readonly $numTypeParams = 1;

  static get bcs() {
    return bcs.struct('SharedCap', {
      id: UID.bcs,
      target_id: ID.bcs,
      pointer_table: Table.bcs,
    });
  }

  readonly $typeArg: Type;

  readonly id: string;
  readonly targetId: string;
  readonly pointerTable: Table;

  constructor(typeArg: Type, fields: SharedCapFields) {
    this.$typeArg = typeArg;

    this.id = fields.id;
    this.targetId = fields.targetId;
    this.pointerTable = fields.pointerTable;
  }

  static fromFields(typeArg: Type, fields: Record<string, any>): SharedCap {
    return new SharedCap(typeArg, {
      id: UID.fromFields(fields.id).id,
      targetId: ID.fromFields(fields.target_id).bytes,
      pointerTable: Table.fromFields([`address`, `0x2::object::ID`], fields.pointer_table),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): SharedCap {
    if (!isSharedCap(item.type)) {
      throw new Error('not a SharedCap type');
    }
    const { typeArgs } = parseTypeName(item.type);

    return new SharedCap(typeArgs[0], {
      id: item.fields.id.id,
      targetId: item.fields.target_id,
      pointerTable: Table.fromFieldsWithTypes(item.fields.pointer_table),
    });
  }

  static fromBcs(typeArg: Type, data: Uint8Array): SharedCap {
    return SharedCap.fromFields(typeArg, SharedCap.bcs.parse(data));
  }

  static fromSuiParsedData(content: SuiParsedData) {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object');
    }
    if (!isSharedCap(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a SharedCap object`);
    }
    return SharedCap.fromFieldsWithTypes(content);
  }

  static async fetch(client: SuiClient, id: string): Promise<SharedCap> {
    const res = await client.getObject({ id, options: { showContent: true } });
    if (res.error) {
      throw new Error(`error fetching SharedCap object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.content?.dataType !== 'moveObject' || !isSharedCap(res.data.content.type)) {
      throw new Error(`object at id ${id} is not a SharedCap object`);
    }
    return SharedCap.fromFieldsWithTypes(res.data.content);
  }
}

/* ============================== EventHolderInfo =============================== */

export function isEventHolderInfo(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type ===
    '0xb1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784::shared_cap::EventHolderInfo'
  );
}

export interface EventHolderInfoFields {
  holder: string;
  pointerId: string;
}

export class EventHolderInfo {
  static readonly $typeName =
    '0xb1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784::shared_cap::EventHolderInfo';
  static readonly $numTypeParams = 0;

  static get bcs() {
    return bcs.struct('EventHolderInfo', {
      holder: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      pointer_id: ID.bcs,
    });
  }

  readonly holder: string;
  readonly pointerId: string;

  constructor(fields: EventHolderInfoFields) {
    this.holder = fields.holder;
    this.pointerId = fields.pointerId;
  }

  static fromFields(fields: Record<string, any>): EventHolderInfo {
    return new EventHolderInfo({
      holder: `0x${fields.holder}`,
      pointerId: ID.fromFields(fields.pointer_id).bytes,
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): EventHolderInfo {
    if (!isEventHolderInfo(item.type)) {
      throw new Error('not a EventHolderInfo type');
    }
    return new EventHolderInfo({
      holder: `0x${item.fields.holder}`,
      pointerId: item.fields.pointer_id,
    });
  }

  static fromBcs(data: Uint8Array): EventHolderInfo {
    return EventHolderInfo.fromFields(EventHolderInfo.bcs.parse(data));
  }
}
