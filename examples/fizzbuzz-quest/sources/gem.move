module counter::gem {
    use std::option::none;
    use std::string::{Self, String};

    use sui::coin::{Self, TreasuryCap};
    use sui::object::{Self, UID};
    use sui::tx_context::{sender, TxContext};
    use sui::transfer;

    use sui::token::{Self, Token, ActionRequest};


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
        let (mut policy, policy_cap) = token::new_policy(&treasury_cap, ctx);

        policy.allow(&policy_cap, token::spend_action(), ctx);
        policy.allow(&policy_cap, token::transfer_action(), ctx);

        // create and share the GemStore
        transfer::share_object(GemStore {
            id: object::new(ctx),
            gem_treasury: treasury_cap,
        });

        // deal with `TokenPolicy`, `CoinMetadata` and `TokenPolicyCap`
        transfer::public_freeze_object(coin_metadata);
        transfer::public_transfer(policy_cap, ctx.sender());
        token::share_policy(policy);
    }

    public fun gem_treasury_mut(self: &mut GemStore): &mut TreasuryCap<GEM> {
        &mut self.gem_treasury
    }

    #[test_only]
    public fun init_for_test(ctx: &mut TxContext) {
        init(GEM {}, ctx);
    }

}