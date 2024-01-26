module counter::gem {
    use std::option::none;
    use std::string::{Self, String};
    use sui::sui::SUI;
    use sui::transfer;
    use sui::object::{Self, UID};
    use sui::balance::{Self, Balance};
    use sui::tx_context::{sender, TxContext};
    use sui::coin::{Self, Coin, TreasuryCap};

    use sui::token::{Self, Token, ActionRequest};

    use counter::ticket::Ticket;

    /// Trying to purchase Gems with an unexpected amount.
    const EUnknownAmount: u64 = 0;

    #[lint_allow(coin_field)]
    /// Gems can be purchased through the `Store`.
    public struct GemStore has key {
        id: UID,
        /// The Treasury Cap for the in-game currency.
        gem_treasury: TreasuryCap<GEM>,
    }

    /// The OTW to create the in-game currency.
    public struct GEM has drop {}

    // In the module initializer we create the in-game currency and define the
    // rules for different types of actions.
    fun init(otw: GEM, ctx: &mut TxContext) {
        let (treasury_cap, coin_metadata) = coin::create_currency(
            otw, 0, b"GEM", b"Capy Gems", // otw, decimal, symbol, name
            b"In-game currency for Capy Miners", none(), // description, url
            ctx
        );

        // create a `TokenPolicy` for GEMs
        let (mut policy, cap) = token::new_policy(&treasury_cap, ctx);

        token::allow(&mut policy, &cap, claim_action(), ctx);
        token::allow(&mut policy, &cap, token::spend_action(), ctx);
        token::allow(&mut policy, &cap, token::transfer_action(), ctx);

        // create and share the GemStore
        transfer::share_object(GemStore {
            id: object::new(ctx),
            gem_treasury: treasury_cap,
        });

        // deal with `TokenPolicy`, `CoinMetadata` and `TokenPolicyCap`
        transfer::public_freeze_object(coin_metadata);
        transfer::public_transfer(cap, sender(ctx));
        token::share_policy(policy);
    }

    public fun claim_gems(
        self: &mut GemStore, ticket: Ticket<GEM>, ctx: &mut TxContext
    ): (Token<GEM>, ActionRequest<GEM>) {
        let amount = ticket.amount();

        // create custom request and mint some Gems
        let gems = token::mint(&mut self.gem_treasury, amount, ctx);
        let req = token::new_request(claim_action(), amount, none(), none(), ctx);
        ticket.delete();

        (gems, req)
    }

    /// The name of the `buy` action in the `GemStore`.
    public fun claim_action(): String { string::utf8(b"claim") }


    #[test_only]
    public fun init_for_test(ctx: &mut TxContext) {
        init(GEM {}, ctx);
    }

}