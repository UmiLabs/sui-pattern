module shared_cap::shared_cap {
    use sui::event;
    use sui::object::{Self, ID, UID};
    use sui::table::{Self, Table};
    use sui::transfer;
    use sui::tx_context::{TxContext};

    use shared_cap::regulated_pointer::{Self, RegulatedPointer};


    const E_INVALID_POINTER: u64 = 0x0101;
    const E_NOT_FOUND_POINTER: u64 = 0x0102;

    /// SharedCap is assumed to be a shared object or owned/stored by a shared object
    public struct SharedCap<phantom T: key> has key {
        id: UID,
        target_id: ID, // ojbect::id(&T)
        pointer_table: Table<address, ID> // Holder -> Pointer
    }

    fun new<T: key>(target: &T, ctx: &mut TxContext): SharedCap<T> {
        let mut self = SharedCap<T> {
            id: object::new(ctx),
            target_id: object::id(target),
            pointer_table: table::new(ctx),
        };

        let new_holder = ctx.sender();
        let pointer_id = regulated_pointer::create(&self, new_holder, ctx);
        self.pointer_table.add(new_holder, pointer_id);

        self
    }

    public entry fun create<T: key>(target: &T, ctx: &mut TxContext): ID {
        let self = new(target, ctx);
        let id = object::id(&self);
        transfer::share_object(self);
        id
    }

    public struct EventHolderInfo has copy, drop {
        holder: address,
        pointer_id: ID
    }

    public fun get_pointer_by_holder<T: key>(self: &SharedCap<T>, holder: address): ID {
        let exists = self.pointer_table.contains(holder);
        assert!(exists, E_NOT_FOUND_POINTER);

        let pointer_id = *self.pointer_table.borrow(holder);
        event::emit(EventHolderInfo {
            holder,
            pointer_id,
        });
        pointer_id
    }

    public fun check_cap<T: key>(self: &SharedCap<T>, cap_ptr: &RegulatedPointer<SharedCap<T>>) {
        let valid_pointer_id = self.get_pointer_by_holder(cap_ptr.holder());
        assert!(valid_pointer_id == object::id(cap_ptr), E_INVALID_POINTER);
    }

    public fun add_pointer<T: key>(self: &mut SharedCap<T>, cap_ptr: &RegulatedPointer<SharedCap<T>>, new_holder: address, ctx: &mut TxContext) {
        self.check_cap(cap_ptr);

        let pointer_id = regulated_pointer::create(self, new_holder, ctx);
        self.pointer_table.add(new_holder, pointer_id);
    }

    // Return: ID of the removed pointer
    public fun remove_pointer<T: key>(self: &mut SharedCap<T>, cap_ptr: &RegulatedPointer<SharedCap<T>>, target_holder: address): ID {
        self.check_cap(cap_ptr);
        self.get_pointer_by_holder(target_holder);
        self.pointer_table.remove(target_holder)
    }
}
