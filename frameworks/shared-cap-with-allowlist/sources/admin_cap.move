module shared_cap::admin_cap {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::vec_set::{Self, VecSet};
    use sui::tx_context::{TxContext};
    use std::vector;

    const E_INVALID_CAP: u64 = 1;

    use shared_cap::counter::{Self, Counter};

    public struct AdminCap has key {
        id: UID,
        counter_id: ID,
        allow_list: VecSet<address>,
    }

    fun new(counter_id: ID, mut address_list: vector<address>, ctx: &mut TxContext): AdminCap {
        let mut allow_list = vec_set::empty();
        let mut i = 0;
        let len = vector::length(&address_list);
        while (i < len) {
            let addr = vector::pop_back(&mut address_list);
            allow_list.insert(addr);
            i = i + 1;
        };
        // address_list.for_each!(|addr| {
        //     allow_list.insert(addr);
        // });

        AdminCap {
            id: object::new(ctx),
            counter_id,
            allow_list,
        }
    }

    public entry fun create_counter(allow_list: vector<address>, ctx: &mut TxContext) {
        let counter_id = counter::create(ctx);
        let cap = new(counter_id, allow_list, ctx);

        transfer::share_object(cap);
    }

    public fun check_cap(self: &AdminCap, ctx: &TxContext) {
        assert!(self.allow_list.contains(&ctx.sender()), E_INVALID_CAP);
    }

    public entry fun increment_counter(self: &AdminCap, counter: &mut Counter, ctx: &TxContext) {
        check_cap(self, ctx);
        counter.increment();
    }

    public fun add_allow_list(self: &mut AdminCap, addr: address, ctx: &TxContext) {
        check_cap(self, ctx);
        self.allow_list.insert(addr);
    }

    public fun remove_allow_list(self: &mut AdminCap, addr: address, ctx: &TxContext) {
        check_cap(self, ctx);
        self.allow_list.remove(&addr);
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
            let cap = test.take_shared<AdminCap>();
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

