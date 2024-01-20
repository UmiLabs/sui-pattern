module sui_pattern::admin_role {
    use std::string::{String, utf8};

    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext};

    const E_INVALID_CAP: u64 = 1;

    public struct Role has key {
        id: UID,
        display_name: String,
    }

    public fun create_admin_role(display_name: String, ctx: &mut TxContext) {
        let role = Role {
            id: object::new(ctx),
            display_name,
        };

        transfer::share_object(role);
    }


    #[test_only] use std::debug;
    #[test_only] use sui::test_scenario::{Self as test, ctx};

    #[test_only] const ALICE: address = @0xA11CE;
    #[test_only] const BOB: address = @0xB0B;


    #[test]
    fun test_admin_cap() {
        use sui_pattern::admin_cap::{Self, AdminCap, Counter};

        let mut scenario = test::begin(@0x1);
        let test = &mut scenario;
        {
            create_admin_role(utf8(b"admin"), ctx(test));
        }; test::next_tx(test, ALICE);
        {
            let role = test.take_shared<Role>();
            admin_cap::create_counter(object::id_address(&role), ctx(test));
            test::return_shared(role);
        }; test::next_tx(test, ALICE);
        {
            let mut counter = test.take_shared<Counter>();
            let role = test.take_shared<Role>();
            let cap = test.take_from_address<AdminCap>(object::id_address(&role));
            counter.increment(&cap);

            test::return_to_address<AdminCap>(object::id_address(&role), cap);
            test::return_shared(role);
            test::return_shared(counter);
        }; test::next_tx(test, ALICE);
        {
            let counter = test.take_shared<Counter>();
            counter.print();
            assert!(counter.count() == 1, 2);
            test::return_shared(counter);
        }; test::next_tx(test, ALICE);
        test::end(scenario);
    }
}
