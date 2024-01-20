module shared_cap::counter {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext};

    friend shared_cap::admin_cap;

    public struct Counter has key {
        id: UID,
        count: u64,
    }

    public fun count(self: &Counter): u64 {
        self.count
    }

    fun new(ctx: &mut TxContext): Counter {
        Counter {
            id: object::new(ctx),
            count: 0,
        }
    }

    public(friend) fun create(ctx: &mut TxContext): ID {
        let counter = new(ctx);
        let counter_id = object::id(&counter);
        transfer::share_object(counter);
        counter_id
    }

    public(friend) fun increment(self: &mut Counter) {
        self.count = self.count + 1;
    }
}
