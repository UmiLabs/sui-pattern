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

    public struct Counter has key, store {
        id: UID,
        count: u64,
    }

    fun new(ctx: &mut TxContext): Counter {
        Counter {
            id: object::new(ctx),
            count: 0,
        }
    }

    public fun create(ctx: &mut TxContext): ID {
        let self = new(ctx);
        let id = object::id(&self);
        transfer::public_share_object(self);
        id
    }

    public fun count(self: &Counter): u64 {
        self.count
    }

    public fun increment(self: &mut Counter) {
        self.count = self.count + 1;
    }
}