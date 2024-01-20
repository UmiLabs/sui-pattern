import { FieldsWithTypes, Type } from '../../_framework/util';
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client';
export declare function isActiveJwk(type: Type): boolean;
export interface ActiveJwkFields {
    jwkId: JwkId;
    jwk: JWK;
    epoch: bigint;
}
export declare class ActiveJwk {
    static readonly $typeName = "0x2::authenticator_state::ActiveJwk";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        jwk_id: {
            iss: {
                bytes: number[];
            };
            kid: {
                bytes: number[];
            };
        };
        jwk: {
            kty: {
                bytes: number[];
            };
            e: {
                bytes: number[];
            };
            n: {
                bytes: number[];
            };
            alg: {
                bytes: number[];
            };
        };
        epoch: string;
    }, {
        jwk_id: {
            iss: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            kid: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        jwk: {
            kty: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            e: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            n: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            alg: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        epoch: string | number | bigint;
    }>;
    readonly jwkId: JwkId;
    readonly jwk: JWK;
    readonly epoch: bigint;
    constructor(fields: ActiveJwkFields);
    static fromFields(fields: Record<string, any>): ActiveJwk;
    static fromFieldsWithTypes(item: FieldsWithTypes): ActiveJwk;
    static fromBcs(data: Uint8Array): ActiveJwk;
}
export declare function isAuthenticatorState(type: Type): boolean;
export interface AuthenticatorStateFields {
    id: string;
    version: bigint;
}
export declare class AuthenticatorState {
    static readonly $typeName = "0x2::authenticator_state::AuthenticatorState";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        version: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        version: string | number | bigint;
    }>;
    readonly id: string;
    readonly version: bigint;
    constructor(fields: AuthenticatorStateFields);
    static fromFields(fields: Record<string, any>): AuthenticatorState;
    static fromFieldsWithTypes(item: FieldsWithTypes): AuthenticatorState;
    static fromBcs(data: Uint8Array): AuthenticatorState;
    static fromSuiParsedData(content: SuiParsedData): AuthenticatorState;
    static fetch(client: SuiClient, id: string): Promise<AuthenticatorState>;
}
export declare function isAuthenticatorStateInner(type: Type): boolean;
export interface AuthenticatorStateInnerFields {
    version: bigint;
    activeJwks: Array<ActiveJwk>;
}
export declare class AuthenticatorStateInner {
    static readonly $typeName = "0x2::authenticator_state::AuthenticatorStateInner";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        version: string;
        active_jwks: {
            jwk_id: {
                iss: {
                    bytes: number[];
                };
                kid: {
                    bytes: number[];
                };
            };
            jwk: {
                kty: {
                    bytes: number[];
                };
                e: {
                    bytes: number[];
                };
                n: {
                    bytes: number[];
                };
                alg: {
                    bytes: number[];
                };
            };
            epoch: string;
        }[];
    }, {
        version: string | number | bigint;
        active_jwks: Iterable<{
            jwk_id: {
                iss: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                kid: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            jwk: {
                kty: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                e: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                n: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                alg: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            epoch: string | number | bigint;
        }> & {
            length: number;
        };
    }>;
    readonly version: bigint;
    readonly activeJwks: Array<ActiveJwk>;
    constructor(fields: AuthenticatorStateInnerFields);
    static fromFields(fields: Record<string, any>): AuthenticatorStateInner;
    static fromFieldsWithTypes(item: FieldsWithTypes): AuthenticatorStateInner;
    static fromBcs(data: Uint8Array): AuthenticatorStateInner;
}
export declare function isJWK(type: Type): boolean;
export interface JWKFields {
    kty: string;
    e: string;
    n: string;
    alg: string;
}
export declare class JWK {
    static readonly $typeName = "0x2::authenticator_state::JWK";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        kty: {
            bytes: number[];
        };
        e: {
            bytes: number[];
        };
        n: {
            bytes: number[];
        };
        alg: {
            bytes: number[];
        };
    }, {
        kty: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        e: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        n: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        alg: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    readonly kty: string;
    readonly e: string;
    readonly n: string;
    readonly alg: string;
    constructor(fields: JWKFields);
    static fromFields(fields: Record<string, any>): JWK;
    static fromFieldsWithTypes(item: FieldsWithTypes): JWK;
    static fromBcs(data: Uint8Array): JWK;
}
export declare function isJwkId(type: Type): boolean;
export interface JwkIdFields {
    iss: string;
    kid: string;
}
export declare class JwkId {
    static readonly $typeName = "0x2::authenticator_state::JwkId";
    static readonly $numTypeParams = 0;
    static get bcs(): import("@mysten/bcs").BcsType<{
        iss: {
            bytes: number[];
        };
        kid: {
            bytes: number[];
        };
    }, {
        iss: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        kid: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    readonly iss: string;
    readonly kid: string;
    constructor(fields: JwkIdFields);
    static fromFields(fields: Record<string, any>): JwkId;
    static fromFieldsWithTypes(item: FieldsWithTypes): JwkId;
    static fromBcs(data: Uint8Array): JwkId;
}
