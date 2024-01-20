module sui_pattern::admin_cap {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext};

    const E_INVALID_CAP: u64 = 1;

    public struct Counter has key {
        id: UID,
        count: u64,
    }

    public struct AdminCap has key, store {
        id: UID,
        counter_id: ID,
    }

    fun new_admin_cap(counter: &Counter, ctx: &mut TxContext): AdminCap {
        AdminCap {
            id: object::new(ctx),
            counter_id: object::id(counter)
        }
    }

    public entry fun create_counter(admin: address, ctx: &mut TxContext) {
        let counter = Counter {
            id: object::new(ctx),
            count: 0,
        };
        let cap = new_admin_cap(&counter, ctx);

        transfer::share_object(counter);
        transfer::public_transfer(cap, admin);
    }

    public fun check_cap(counter: &Counter, cap: &AdminCap){
        assert!(object::id(counter) == cap.counter_id, E_INVALID_CAP);
    }

    public entry fun increment(counter: &mut Counter, cap: &AdminCap) {
        check_cap(counter, cap);
        counter.count = counter.count + 1;
    }


    #[test_only] use sui::test_scenario::{Self as test, ctx};

    #[test_only] const ALICE: address = @0xA11CE;


    #[test]
    fun test_admin_cap() {
        let mut scenario = test::begin(@0x1);
        let test = &mut scenario;
        {
            create_counter(ALICE, ctx(test));
        };
        test::next_tx(test, ALICE);
        {
            let mut counter = test::take_shared<Counter>(test);
            let cap = test::take_from_address<AdminCap>(test, ALICE);
            increment(&mut counter, &cap);

            test::return_to_address<AdminCap>(ALICE, cap);
            test::return_shared(counter);
        };
        test::end(scenario);
    }
}
