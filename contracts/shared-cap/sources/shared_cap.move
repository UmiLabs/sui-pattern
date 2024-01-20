module shared_cap::shared_cap {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::vec_set::{Self, VecSet};
    use sui::tx_context::{TxContext};
    use std::vector;

    const E_INVALID_CAP: u64 = 1;

    public struct SharedCap<phantom T> has key {
        id: UID,
        for: ID,
        allow_list: VecSet<address>,
    }

    fun new<T>(for: ID, mut address_list: vector<address>, ctx: &mut TxContext): SharedCap<T> {
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

        SharedCap<T> {
            id: object::new(ctx),
            for,
            allow_list,
        }
    }

    public fun create<T>(for: ID, address_list: vector<address>, ctx: &mut TxContext) {
        let cap = new<T>(for, address_list, ctx);
        transfer::share_object(cap);
    }

    public fun check_cap<T>(self: &SharedCap<T>, ctx: &TxContext) {
        assert!(self.allow_list.contains(&ctx.sender()), E_INVALID_CAP);
    }

    public fun add_allow_list<T>(self: &mut SharedCap<T>, addr: address, ctx: &TxContext) {
        check_cap(self, ctx);
        self.allow_list.insert(addr);
    }

    public fun remove_allow_list<T>(self: &mut SharedCap<T>, addr: address, ctx: &TxContext) {
        check_cap(self, ctx);
        self.allow_list.remove(&addr);
    }
}

