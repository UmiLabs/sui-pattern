module counter::shared_cap {
    use sui::object::{Self, ID, UID};
    use sui::tx_context::{TxContext};
    use sui::vec_set::{Self, VecSet};

    use counter::regulated_pointer::{Self, RegulatedPointer};


    const E_INVALID_POINTER: u64 = 0x0101;

    /// SharedCap is assumed to be a shared object or owned/stored by a shared object
    public struct SharedCap<phantom T: key> has key, store {
        id: UID,
        target_id: ID, // ojbect::id(&T)
        pointer_list: VecSet<ID>, // Pointers to this cap
    }

    public fun new<T: key>(target: &T, ctx: &mut TxContext): SharedCap<T> {
        let mut self = SharedCap<T> {
            id: object::new(ctx),
            target_id: object::id(target),
            pointer_list: vec_set::empty(),
        };

        let pointer_id = regulated_pointer::create(&self, ctx.sender(), ctx);
        self.pointer_list.insert(pointer_id);

        self
    }

    public fun check_cap<T: key>(self: &SharedCap<T>, pointer: &RegulatedPointer<SharedCap<T>>) {
        assert!(self.pointer_list.contains(&object::id(pointer)), E_INVALID_POINTER);
    }

    public fun add_pointer<T: key>(self: &mut SharedCap<T>, subject: &RegulatedPointer<SharedCap<T>>, new_holder: address, ctx: &mut TxContext) {
        self.check_cap(subject);
        let pointer_id = regulated_pointer::create(self, new_holder, ctx);
        self.pointer_list.insert(pointer_id);
    }

    public fun remove_pointer<T: key>(self: &mut SharedCap<T>, subject: &RegulatedPointer<SharedCap<T>>, target_pointer: ID) {
        self.check_cap(subject);
        self.pointer_list.remove(&target_pointer);
    }
}
