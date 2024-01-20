import { FieldsWithTypes, Type } from '../../_framework/util';
export declare function isRole(type: Type): boolean;
export interface RoleFields {
    name: string;
    associationId: string;
}
export declare class Role {
    static readonly $typeName = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91::role::Role";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        name: {
            bytes: number[];
        };
        association_id: {
            bytes: string;
        };
    }, {
        name: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        association_id: {
            bytes: string;
        };
    }>;
    readonly name: string;
    readonly associationId: string;
    constructor(fields: RoleFields);
    static fromFields(fields: Record<string, any>): Role;
    static fromFieldsWithTypes(item: FieldsWithTypes): Role;
    static fromBcs(data: Uint8Array): Role;
}
