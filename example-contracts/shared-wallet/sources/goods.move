module shared_wallet::goods {
    use sui::object::{Self, UID};
    use sui::tx_context::{TxContext};

    public struct Goods has key, store {
        id: UID,
        token: u64,
    }

    public fun token(self: &Goods): u64 {
        self.token
    }

    public fun new(token: u64, ctx: &mut TxContext): Goods {
        Goods {
            id: object::new(ctx),
            token,
        }
    }
}
