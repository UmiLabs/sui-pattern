module counter::exp_coin {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext};


    public struct ExpCoin has key, store {
        id: UID,
        amount: u64,
    }

    public fun amount(self: &ExpCoin): u64 {
        self.amount
    }

    public fun new(amount: u64, ctx: &mut TxContext): ExpCoin {
        ExpCoin {
            id: object::new(ctx),
            amount,
        }
    }

    public fun mint_to(amount: u64, to: address, ctx: &mut TxContext) {
        let coin = new(amount, ctx);
        transfer::public_transfer(coin, to);
    }
}
