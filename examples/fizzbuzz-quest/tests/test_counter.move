#[test_only]
module counter::test_counter {
    use std::debug;
    use std::option::{Self, Option};
    use std::string::{String, utf8};

    use sui::test_scenario::{Self as test, ctx};
    use sui::token::{Self, Token, ActionRequest, TokenPolicy, TokenPolicyCap};
    use sui::transfer;

    use counter::counter::{Self, Counter};
    use counter::gem::{Self, GEM, GemStore};
    use counter::ticket::{Self, Ticket};
    use counter::quest;
    use counter::goods;

    const ALICE: address = @0xA11CE;
    const BOB: address = @0xB0B;
    const CAROL: address = @0xCAA01;


    #[test]
    fun test_gem() {
        let mut scenario = test::begin(@0x1);
        let test = &mut scenario;
        test.next_tx(ALICE); {
            gem::init_for_test(test.ctx());
        };

        test.next_tx(ALICE); {
            let mut policy = test.take_shared<TokenPolicy<GEM>>();
            let policy_cap = test.take_from_address<TokenPolicyCap<GEM>>(ALICE);

            ticket::add_claim_policy(&mut policy, &policy_cap, test.ctx());

            test::return_to_address(ALICE, policy_cap);
            test::return_shared(policy);
        };

        test.next_tx(ALICE); {
            let mut policy = test.take_shared<TokenPolicy<GEM>>();
            let mut gem_store = test.take_shared<GemStore>();

            let ticket = ticket::new_for_test(10, test.ctx());
            let (gem, request) = ticket.claim_gems(gem_store.treasury_mut(), test.ctx());
            policy.confirm_request(request, test.ctx());

            let request = token::transfer(gem, ALICE, test.ctx());
            policy.confirm_request(request, test.ctx());

            test::return_shared(gem_store);
            test::return_shared(policy);
        };
        test::end(scenario);
    }

    // // #[test]
    // fun test_counter() {
    //     let mut scenario = test::begin(@0x1);
    //     let test = &mut scenario;
    //     gem::init_for_test(test.ctx());

    //     test.next_tx(ALICE); {
    //         counter::create(test.ctx());
    //     };

    //     test.next_tx(BOB); {
    //         let policy = test.take_shared<TokenPolicy<GEM>>();
    //         let mut gem_store = test.take_shared<GemStore>();
    //         let mut counter = test.take_shared<Counter>();

    //         quest::increment_plus(
    //             &mut counter,
    //             &mut gem_store,
    //             &policy,
    //             test.ctx()
    //         );
    //         quest::increment_plus(
    //             &mut counter,
    //             &mut gem_store,
    //             &policy,
    //             test.ctx()
    //         );
    //         quest::increment_plus(
    //             &mut counter,
    //             &mut gem_store,
    //             &policy,
    //             test.ctx()
    //         );

    //         test::return_shared(counter);
    //         test::return_shared(gem_store);
    //         test::return_shared(policy);
    //     };

    //     test.next_tx(BOB); {
    //         let mut policy = test.take_shared<TokenPolicy<GEM>>();
    //         let mut gem = test.take_from_address<Token<GEM>>(BOB);

    //         debug::print(&policy);

    //         assert!(gem.value() == 30, 1234);

    //         let pay = gem.split(10, test.ctx());
    //         assert!(pay.value() == 10, 1234);

    //         let (sword, request) = goods::buy_sword(pay, test.ctx());
    //         policy.confirm_request_mut(request, test.ctx());
    //         transfer::public_transfer(sword, BOB);

    //         test::return_to_address(BOB, gem);
    //         test::return_shared(policy);
    //     };
    //     test::end(scenario);
    // }

}