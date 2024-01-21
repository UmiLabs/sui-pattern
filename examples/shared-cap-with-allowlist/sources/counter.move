module counter::counter {
    use std::string::{String, utf8};

    use sui::dynamic_object_field as dof;
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext};

    use shared_cap::shared_cap::{Self, SharedCap};


    public struct Counter has key {
        id: UID,
        count: u64,
    }

    public fun count(self: &Counter): u64 {
        self.count
    }

    public fun admin_cap_key(): String {
        utf8(b"admin_cap")
    }

    public fun create(allow_list: vector<address>, ctx: &mut TxContext): ID {
        let mut self = Counter {
            id: object::new(ctx),
            count: 0,
        };
        let cap = shared_cap::new(&self, allow_list, ctx);
        let counter_id = object::id(&self);
        dof::add(&mut self.id, admin_cap_key(), cap);
        transfer::share_object(self);
        counter_id
    }

    fun get_cap(self: &Counter): &SharedCap<Counter> {
        dof::borrow<String, SharedCap<Counter>>(&self.id, admin_cap_key())
    }

    public entry fun check_cap(self: &Counter, ctx: &TxContext) {
        self.get_cap().check_cap(ctx);
    }

    public(friend) fun increment(self: &mut Counter, ctx: &TxContext) {
        self.check_cap(ctx);
        self.count = self.count + 1;
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
        test.next_tx(ALICE); {
            create(vector[ALICE], test.ctx());
        };
        test.next_tx(ALICE); {
            let mut counter = test.take_shared<Counter>();
            counter.increment(test.ctx());
            test::return_shared(counter);
        };
        test.next_tx(ALICE); {
            let counter = test.take_shared<Counter>();
            assert!(counter.count() == 1, 2);
            test::return_shared(counter);
        }; test.next_tx(ALICE);
        test::end(scenario);
    }
}
