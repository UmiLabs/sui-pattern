module counter::ticket {
    use std::option::none;
    use std::string::{Self, String};

    use sui::object::{Self, UID};
    use sui::token::{Self, Token, TokenPolicy, TokenPolicyCap, ActionRequest};
    use sui::tx_context::{TxContext};

    use counter::gem::{Self, GEM, GemStore};


    friend counter::quest;

    public struct Ticket<phantom T> {
        id: UID,
        amount: u64,
    }

    public fun amount<T>(self: &Ticket<T>): u64 {
        self.amount
    }

    fun new<T>(amount: u64, ctx: &mut TxContext): Ticket<T> {
        Ticket {
            id: object::new(ctx),
            amount,
        }
    }

    fun delete<T>(self: Ticket<T>) {
    // public(friend) fun delete<T>(self: Ticket, ctx: &mut TxContext) {
        let Ticket { id, amount: _ } = self;
        object::delete(id);
    }

    public fun into_amount<T>(self: Ticket<T>): u64 {
        let amount = self.amount;
        self.delete();
        amount
    }

    public fun add_claim_policy<T>(
        policy: &mut TokenPolicy<T>,
        policy_cap: &TokenPolicyCap<T>,
        ctx: &mut TxContext,
    ) {
        policy.allow(policy_cap, claim_action(), ctx);
    }

    /// The name of the `buy` action in the `GemStore`.
    public fun claim_action(): String { string::utf8(b"claim") }

    public fun claim_gems(
        gem_store: &mut GemStore, ticket: Ticket<GEM>, ctx: &mut TxContext
    ): (Token<GEM>, ActionRequest<GEM>) {
        let amount = ticket.into_amount();

        // create custom request and mint some Gems
        let gems = token::mint(gem_store.gem_treasury_mut(), amount, ctx);
        let req = token::new_request<GEM>(claim_action(), amount, none(), none(), ctx);

        (gems, req)
    }

    #[test_only]
    public fun new_for_test<T>(amount: u64, ctx: &mut TxContext): Ticket<T> {
        new(amount, ctx)
    }

}
