import { String } from '../../_dependencies/onchain/0x1/string/structs';
import { UID } from '../../_dependencies/onchain/0x2/object/structs';
import { FieldsWithTypes, Type, compressSuiType } from '../../_framework/util';
import { bcs } from '@mysten/bcs';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';

/* ============================== Role =============================== */

export function isRole(type: Type): boolean {
  type = compressSuiType(type);
  return (
    type === '0x7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147::admin_role::Role'
  );
}

export interface RoleFields {
  id: string;
  displayName: string;
}

export class Role {
  static readonly $typeName =
    '0x7dfed8f8ed1527f05a667eacc5c6ca2680c46102262488047a8370906f6c4147::admin_role::Role';
  static readonly $numTypeParams = 0;

  static get bcs() {
    return bcs.struct('Role', {
      id: UID.bcs,
      display_name: String.bcs,
    });
  }

  readonly id: string;
  readonly displayName: string;

  constructor(fields: RoleFields) {
    this.id = fields.id;
    this.displayName = fields.displayName;
  }

  static fromFields(fields: Record<string, any>): Role {
    return new Role({
      id: UID.fromFields(fields.id).id,
      displayName: new TextDecoder()
        .decode(Uint8Array.from(String.fromFields(fields.display_name).bytes))
        .toString(),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Role {
    if (!isRole(item.type)) {
      throw new Error('not a Role type');
    }
    return new Role({ id: item.fields.id.id, displayName: item.fields.display_name });
  }

  static fromBcs(data: Uint8Array): Role {
    return Role.fromFields(Role.bcs.parse(data));
  }

  static fromSuiParsedData(content: SuiParsedData) {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object');
    }
    if (!isRole(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Role object`);
    }
    return Role.fromFieldsWithTypes(content);
  }

  static async fetch(client: SuiClient, id: string): Promise<Role> {
    const res = await client.getObject({ id, options: { showContent: true } });
    if (res.error) {
      throw new Error(`error fetching Role object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.content?.dataType !== 'moveObject' || !isRole(res.data.content.type)) {
      throw new Error(`object at id ${id} is not a Role object`);
    }
    return Role.fromFieldsWithTypes(res.data.content);
  }
}
