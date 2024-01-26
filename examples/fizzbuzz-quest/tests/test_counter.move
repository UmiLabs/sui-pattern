#[test_only]
module counter::test_counter {
    use std::debug;
    use std::string::{String, utf8};

    use sui::test_scenario::{Self as test, ctx};
    use sui::token::{Self, Token, ActionRequest, TokenPolicy};
    use sui::transfer;

    use counter::counter::{Self, Counter};
    use counter::exp_coin::{Self, ExpCoin};
    use counter::quest::{Self, Quest};
    use counter::ticket::{Self, Ticket};
    use counter::gem::{Self, GEM, GemStore};

    const ALICE: address = @0xA11CE;
    const BOB: address = @0xB0B;
    const CAROL: address = @0xCAA01;


    #[test]
    fun test_counter() {
        let mut scenario = test::begin(@0x1);
        let test = &mut scenario;
        test.next_tx(ALICE); {
            counter::create(test.ctx());
            quest::create<ExpCoin>(
                utf8(b"Quest"),
                3,
                test.ctx()
            );
        };
        test.next_tx(ALICE); {
            let mut counter = test.take_shared<Counter>();
            let quest = test.take_shared<Quest<ExpCoin>>();

            counter.increment(&quest, test.ctx());
            counter.increment(&quest, test.ctx());

            test::return_shared(quest);
            test::return_shared(counter);
        };
        test.next_tx(BOB); {
            let mut counter = test.take_shared<Counter>();
            let quest = test.take_shared<Quest<ExpCoin>>();

            counter.increment(&quest, test.ctx());
            counter.increment(&quest, test.ctx());

            test::return_shared(quest);
            test::return_shared(counter);
        };
        test.next_tx(BOB); {
            let coin = test.take_from_address<ExpCoin>(BOB);
            debug::print(&coin);

            assert!(coin.amount() == 1, 111);

            test::return_to_address(BOB, coin);
        };
        test::end(scenario);
    }

    #[test]
    fun test_gem() {
        let mut scenario = test::begin(@0x1);
        let test = &mut scenario;
        gem::init_for_test(test.ctx());

        test.next_tx(ALICE); {
            let mut policy = test.take_shared<TokenPolicy<GEM>>();
            let mut gem_store = test.take_shared<GemStore>();
            let ticket = ticket::new(10, test.ctx());
            let (gem, request) = gem_store.claim_gems(ticket, test.ctx());
            policy.confirm_request(request, test.ctx());

            let request = token::transfer(gem, ALICE, test.ctx());
            policy.confirm_request(request, test.ctx());

            test::return_shared(gem_store);
            test::return_shared(policy);
        };
        test::end(scenario);
    }
}