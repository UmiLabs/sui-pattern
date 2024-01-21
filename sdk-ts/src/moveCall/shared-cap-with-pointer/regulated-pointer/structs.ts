import { ID, UID } from '../../_dependencies/onchain/0x2/object/structs';
import { FieldsWithTypes, Type, compressSuiType, parseTypeName } from '../../_framework/util';
import { bcs, fromHEX, toHEX } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';

/* ============================== RegulatedPointer =============================== */

export function isRegulatedPointer(type: Type): boolean {
  type = compressSuiType(type);
  return type.startsWith(
    '0xb1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784::regulated_pointer::RegulatedPointer<',
  );
}

export interface RegulatedPointerFields {
  id: string;
  referTo: string;
  holder: string;
}

export class RegulatedPointer {
  static readonly $typeName =
    '0xb1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784::regulated_pointer::RegulatedPointer';
  static readonly $numTypeParams = 1;

  static get bcs() {
    return bcs.struct('RegulatedPointer', {
      id: UID.bcs,
      refer_to: ID.bcs,
      holder: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
    });
  }

  readonly $typeArg: Type;

  readonly id: string;
  readonly referTo: string;
  readonly holder: string;

  constructor(typeArg: Type, fields: RegulatedPointerFields) {
    this.$typeArg = typeArg;

    this.id = fields.id;
    this.referTo = fields.referTo;
    this.holder = fields.holder;
  }

  static fromFields(typeArg: Type, fields: Record<string, any>): RegulatedPointer {
    return new RegulatedPointer(typeArg, {
      id: UID.fromFields(fields.id).id,
      referTo: ID.fromFields(fields.refer_to).bytes,
      holder: `0x${fields.holder}`,
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RegulatedPointer {
    if (!isRegulatedPointer(item.type)) {
      throw new Error('not a RegulatedPointer type');
    }
    const { typeArgs } = parseTypeName(item.type);

    return new RegulatedPointer(typeArgs[0], {
      id: item.fields.id.id,
      referTo: item.fields.refer_to,
      holder: `0x${item.fields.holder}`,
    });
  }

  static fromBcs(typeArg: Type, data: Uint8Array): RegulatedPointer {
    return RegulatedPointer.fromFields(typeArg, RegulatedPointer.bcs.parse(data));
  }

  static fromSuiParsedData(content: SuiParsedData) {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object');
    }
    if (!isRegulatedPointer(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a RegulatedPointer object`);
    }
    return RegulatedPointer.fromFieldsWithTypes(content);
  }

  static async fetch(client: SuiClient, id: string): Promise<RegulatedPointer> {
    const res = await client.getObject({ id, options: { showContent: true } });
    if (res.error) {
      throw new Error(`error fetching RegulatedPointer object at id ${id}: ${res.error.code}`);
    }
    if (
      res.data?.content?.dataType !== 'moveObject' ||
      !isRegulatedPointer(res.data.content.type)
    ) {
      throw new Error(`object at id ${id} is not a RegulatedPointer object`);
    }
    return RegulatedPointer.fromFieldsWithTypes(res.data.content);
  }
}

/* ============================== PointerReceipt =============================== */

export function isPointerReceipt(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type ===
    '0xb1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784::regulated_pointer::PointerReceipt'
  );
}

export interface PointerReceiptFields {
  pointerId: string;
  returnTo: string;
}

export class PointerReceipt {
  static readonly $typeName =
    '0xb1c8875d2b7dc70a96b78bc173414365da27587fe391945991e4b8d7510eb784::regulated_pointer::PointerReceipt';
  static readonly $numTypeParams = 0;

  static get bcs() {
    return bcs.struct('PointerReceipt', {
      pointer_id: ID.bcs,
      return_to: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
    });
  }

  readonly pointerId: string;
  readonly returnTo: string;

  constructor(fields: PointerReceiptFields) {
    this.pointerId = fields.pointerId;
    this.returnTo = fields.returnTo;
  }

  static fromFields(fields: Record<string, any>): PointerReceipt {
    return new PointerReceipt({
      pointerId: ID.fromFields(fields.pointer_id).bytes,
      returnTo: `0x${fields.return_to}`,
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PointerReceipt {
    if (!isPointerReceipt(item.type)) {
      throw new Error('not a PointerReceipt type');
    }
    return new PointerReceipt({
      pointerId: item.fields.pointer_id,
      returnTo: `0x${item.fields.return_to}`,
    });
  }

  static fromBcs(data: Uint8Array): PointerReceipt {
    return PointerReceipt.fromFields(PointerReceipt.bcs.parse(data));
  }
}
