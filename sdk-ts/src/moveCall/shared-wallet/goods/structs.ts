import { UID } from '../../_dependencies/onchain/0x2/object/structs';
import { FieldsWithTypes, Type, compressSuiType } from '../../_framework/util';
import { bcs } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';

/* ============================== Goods =============================== */

export function isGoods(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type === '0x2a5c6790608eb9523c962ad80cb58a7439eb2ed4b5e38a9c229b5a5379d37704::goods::Goods'
  );
}

export interface GoodsFields {
  id: string;
  token: bigint;
}

export class Goods {
  static readonly $typeName =
    '0x2a5c6790608eb9523c962ad80cb58a7439eb2ed4b5e38a9c229b5a5379d37704::goods::Goods';
  static readonly $numTypeParams = 0;

  static get bcs() {
    return bcs.struct('Goods', {
      id: UID.bcs,
      token: bcs.u64(),
    });
  }

  readonly id: string;
  readonly token: bigint;

  constructor(fields: GoodsFields) {
    this.id = fields.id;
    this.token = fields.token;
  }

  static fromFields(fields: Record<string, any>): Goods {
    return new Goods({ id: UID.fromFields(fields.id).id, token: BigInt(fields.token) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Goods {
    if (!isGoods(item.type)) {
      throw new Error('not a Goods type');
    }
    return new Goods({ id: item.fields.id.id, token: BigInt(item.fields.token) });
  }

  static fromBcs(data: Uint8Array): Goods {
    return Goods.fromFields(Goods.bcs.parse(data));
  }

  static fromSuiParsedData(content: SuiParsedData) {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object');
    }
    if (!isGoods(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Goods object`);
    }
    return Goods.fromFieldsWithTypes(content);
  }

  static async fetch(client: SuiClient, id: string): Promise<Goods> {
    const res = await client.getObject({ id, options: { showContent: true } });
    if (res.error) {
      throw new Error(`error fetching Goods object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.content?.dataType !== 'moveObject' || !isGoods(res.data.content.type)) {
      throw new Error(`object at id ${id} is not a Goods object`);
    }
    return Goods.fromFieldsWithTypes(res.data.content);
  }
}
