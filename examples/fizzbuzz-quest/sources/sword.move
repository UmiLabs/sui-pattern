module counter::sword {
    use sui::tx_context::TxContext;
    use sui::object::{Self, UID};

    use sui::token::{Self, Token, ActionRequest};
    use counter::gem::GEM;

    /// Trying to purchase a sword with an incorrect amount.
    const EWrongAmount: u64 = 0;

    /// The price of a sword in Gems.
    const SWORD_PRICE: u64 = 10;

    /// A game item that can be purchased with Gems.
    public struct Sword has key, store { id: UID }

    /// Purchase a sword with Gems.
    public fun buy_sword(
        gems: Token<GEM>, ctx: &mut TxContext
    ): (Sword, ActionRequest<GEM>) {
        assert!(SWORD_PRICE == token::value(&gems), EWrongAmount);
        (
            Sword { id: object::new(ctx) },
            token::spend(gems, ctx)
        )
    }
}


