module counter::counter {
    use std::string::{String, utf8};

    use sui::event;
    use sui::dynamic_field as df;
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext};

    use shared_cap::shared_cap::{Self, SharedCap};
    use shared_cap::regulated_pointer::{Self, RegulatedPointer};

    const E_INVALID_CAP: u64 = 0x0101;

    public struct Counter has key {
        id: UID,
        count: u64,
    }

    fun new(ctx: &mut TxContext): Counter {
        let mut self = Counter {
            id: object::new(ctx),
            count: 0,
        };
        let cap_id = shared_cap::create(&self, ctx);
        df::add(&mut self.id, admin_cap_key(), cap_id);
        self
    }

    public fun create(ctx: &mut TxContext): ID {
        let self = new(ctx);
        let id = object::id(&self);
        transfer::share_object(self);
        id
    }

    public fun count(self: &Counter): u64 {
        self.count
    }

    public fun admin_cap_key(): String {
        utf8(b"admin_cap")
    }

    public struct LogAdminCapId has copy, drop {
        cap_id: ID,
    }

    public entry fun get_admin_cap_id(self: &Counter): ID {
        let cap_id = *df::borrow(&self.id, admin_cap_key());
        event::emit(LogAdminCapId {
            cap_id,
        });
        cap_id
    }

    public entry fun check_cap(
        self: &Counter,
        cap: &SharedCap<Counter>,
        cap_ptr: &RegulatedPointer<SharedCap<Counter>>,
    ) {
        assert!(self.get_admin_cap_id() == object::id(cap), E_INVALID_CAP);
        cap.check_cap(cap_ptr);
    }

    public fun increment(
        self: &mut Counter,
        cap: &SharedCap<Counter>,
        cap_ptr: &RegulatedPointer<SharedCap<Counter>>,
    ) {
        cap.check_cap(cap_ptr);
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
            create(test.ctx());
        };
        test.next_tx(ALICE); {
            let mut counter = test.take_shared<Counter>();
            let cap = test.take_shared<SharedCap<Counter>>();
            let cap_ptr = test.take_from_address<RegulatedPointer<SharedCap<Counter>>>(ALICE);

            counter.increment(&cap, &cap_ptr);
            debug::print(&counter);

            test::return_to_address(ALICE, cap_ptr);
            test::return_shared(cap);
            test::return_shared(counter);
        };

        test.next_tx(ALICE); {
            let counter = test.take_shared<Counter>();
            let cap_id = counter.get_admin_cap_id();
            debug::print(&cap_id);
            test::return_shared(counter);
        };

        // if you call this from off-chain, it should fail
        test.next_tx(BOB); {
            let mut counter = test.take_shared<Counter>();
            let cap = test.take_shared<SharedCap<Counter>>();
            let cap_ptr = test.take_from_address<RegulatedPointer<SharedCap<Counter>>>(ALICE);

            counter.increment(&cap, &cap_ptr);
            debug::print(&counter);

            test::return_to_address(ALICE, cap_ptr);
            test::return_shared(cap);
            test::return_shared(counter);
        };
        test::end(scenario);
    }
}
