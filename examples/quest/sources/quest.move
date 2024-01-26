module counter::quest {
    use std::string::{String, utf8};

    use sui::dynamic_field as df;
    use sui::event;
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext};

    use shared_cap::shared_cap::{Self, SharedCap};
    use shared_cap::regulated_pointer::{RegulatedPointer};

    const E_INVALID_CAP: u64 = 0x0101;

    public struct Quest<phantom T> has key {
        id: UID,
        title: String,
        length: u64,
    }

    public fun length<T>(self: &Quest<T>): u64 {
        self.length
    }

    public struct LogAdminCapId has copy, drop {
        cap_id: ID,
    }

    public fun admin_cap_key(): String {
        utf8(b"admin_cap")
    }

    public entry fun get_admin_cap_id<T>(self: &Quest<T>): ID {
        let cap_id = *df::borrow(&self.id, admin_cap_key());
        event::emit(LogAdminCapId { cap_id });
        cap_id
    }

    public entry fun check_cap<T>(
        self: &Quest<T>,
        cap: &SharedCap<Quest<T>>,
        cap_ptr: &RegulatedPointer<SharedCap<Quest<T>>>,
    ) {
        assert!(self.get_admin_cap_id<T>() == object::id(cap), E_INVALID_CAP);
        cap.check_cap(cap_ptr);
    }

    fun new<T>(
        title: String, length: u64, ctx: &mut TxContext
    ): Quest<T> {
        Quest {
            id: object::new(ctx),
            title,
            length,
        }
    }

    public fun create<T>(
        title: String, length: u64, ctx: &mut TxContext
    ): ID {
        let mut self = new<T>(title, length, ctx);
        let cap_id = shared_cap::create(&self, ctx);
        df::add(&mut self.id, admin_cap_key(), cap_id);

        let id = object::id(&self);
        transfer::share_object(self);
        id
    }
}
