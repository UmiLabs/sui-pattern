module counter::quest {
    use std::option::{Self, Option};

    use sui::token::{Self, TokenPolicy};
    use sui::tx_context::{TxContext};

    use counter::counter::{Counter};
    use counter::ticket::{Self, Ticket};
    use counter::gem::{GEM, GemStore};


    // fun check(counter: &Counter, ctx: &mut TxContext): Option<Ticket<GEM>> {
    //     if (counter.count() % 15 == 0) {
    //         option::some(ticket::new(150, ctx))
    //     } else if (counter.count() % 50 == 0) {
    //         option::some(ticket::new(50, ctx))
    //     } else if (counter.count() % 3 == 0) {
    //         option::some(ticket::new(30, ctx))
    //     } else {
    //         option::none()
    //     }
    // }

    // fun claim_gems(
    //     ticket: Option<Ticket<GEM>>,
    //     recipient: address,
    //     gem_store: &mut GemStore,
    //     policy: &TokenPolicy<GEM>,
    //     ctx: &mut TxContext,
    // ) {
    //     if (ticket.is_none()) {
    //         ticket.destroy_none();
    //         return
    //     };

    //     let ticket = ticket.destroy_some();
    //     let (gem, request) = ticket::claim_gems(gem_store, ticket, ctx);
    //     policy.confirm_request(request, ctx);

    //     let request = token::transfer(gem, recipient, ctx);
    //     policy.confirm_request(request, ctx);
    // }

    // public fun increment_plus(
    //     counter: &mut Counter,
    //     gem_store: &mut GemStore,
    //     policy: &TokenPolicy<GEM>,
    //     ctx: &mut TxContext,
    // ) {
    //     counter.increment();

    //     let ticket = check(counter, ctx);
    //     claim_gems(
    //         ticket,
    //         ctx.sender(),
    //         gem_store,
    //         policy,
    //         ctx,
    //     );
    // }
}
