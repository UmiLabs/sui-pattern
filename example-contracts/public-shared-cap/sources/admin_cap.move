module counter::admin_cap {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::vec_set::{Self, VecSet};
    use sui::tx_context::{TxContext};
    use std::vector;

    use shared_cap::shared_cap::{Self, SharedCap};

    const E_INVALID_CAP: u64 = 1;

    use counter::counter::{Self, Counter};

    public entry fun create_counter(allow_list: vector<address>, ctx: &mut TxContext) {
        let counter_id = counter::create(ctx);
        shared_cap::create<Counter>(counter_id, allow_list, ctx);
    }

    public entry fun increment_counter(cap: &SharedCap<Counter>, counter: &mut Counter, ctx: &TxContext) {
        cap.check_cap(ctx);
        counter.increment();
    }


    #[test_only] use std::debug;
    #[test_only] use sui::test_scenario::{Self as test, ctx};

    #[test_only]
    public fun print(counter: &Counter) {
        debug::print(&counter.count());
    }


    #[test_only] const ALICE: address = @0xA11CE;
    #[test_only] const BOB: address = @0xB0B;


    #[test]
    fun test_admin_cap() {
        let mut scenario = test::begin(@0x1);
        let test = &mut scenario;
        {
            create_counter(vector[ALICE], ctx(test));
        }; test::next_tx(test, ALICE);
        {
            let cap = test.take_shared<SharedCap<Counter>>();
            let mut counter = test.take_shared<Counter>();
            increment_counter(&cap, &mut counter, ctx(test));

            test::return_shared(counter);
            test::return_shared(cap);
        }; test::next_tx(test, ALICE);
        {
            let counter = test.take_shared<Counter>();
            assert!(counter.count() == 1, 2);
            test::return_shared(counter);
        }; test::next_tx(test, ALICE);
        test::end(scenario);
    }
}

