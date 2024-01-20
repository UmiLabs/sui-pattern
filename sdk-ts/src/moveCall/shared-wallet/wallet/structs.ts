import { UID } from '../../_dependencies/onchain/0x2/object/structs';
import { FieldsWithTypes, Type, compressSuiType } from '../../_framework/util';
import { bcs, fromHEX, toHEX } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';

/* ============================== Wallet =============================== */

export function isWallet(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type === '0x2a5c6790608eb9523c962ad80cb58a7439eb2ed4b5e38a9c229b5a5379d37704::wallet::Wallet'
  );
}

export interface WalletFields {
  id: string;
  allowList: Array<string>;
}

export class Wallet {
  static readonly $typeName =
    '0x2a5c6790608eb9523c962ad80cb58a7439eb2ed4b5e38a9c229b5a5379d37704::wallet::Wallet';
  static readonly $numTypeParams = 0;

  static get bcs() {
    return bcs.struct('Wallet', {
      id: UID.bcs,
      allow_list: bcs.vector(
        bcs.bytes(32).transform({
          input: (val: string) => fromHEX(val),
          output: (val: Uint8Array) => toHEX(val),
        }),
      ),
    });
  }

  readonly id: string;
  readonly allowList: Array<string>;

  constructor(fields: WalletFields) {
    this.id = fields.id;
    this.allowList = fields.allowList;
  }

  static fromFields(fields: Record<string, any>): Wallet {
    return new Wallet({
      id: UID.fromFields(fields.id).id,
      allowList: fields.allow_list.map((item: any) => `0x${item}`),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Wallet {
    if (!isWallet(item.type)) {
      throw new Error('not a Wallet type');
    }
    return new Wallet({
      id: item.fields.id.id,
      allowList: item.fields.allow_list.map((item: any) => `0x${item}`),
    });
  }

  static fromBcs(data: Uint8Array): Wallet {
    return Wallet.fromFields(Wallet.bcs.parse(data));
  }

  static fromSuiParsedData(content: SuiParsedData) {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object');
    }
    if (!isWallet(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Wallet object`);
    }
    return Wallet.fromFieldsWithTypes(content);
  }

  static async fetch(client: SuiClient, id: string): Promise<Wallet> {
    const res = await client.getObject({ id, options: { showContent: true } });
    if (res.error) {
      throw new Error(`error fetching Wallet object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.content?.dataType !== 'moveObject' || !isWallet(res.data.content.type)) {
      throw new Error(`object at id ${id} is not a Wallet object`);
    }
    return Wallet.fromFieldsWithTypes(res.data.content);
  }
}
