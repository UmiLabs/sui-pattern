module counter::regulated_cap {
    use sui::object::{Self, ID, UID};
    use sui::transfer::{Self, Receiving};
    use sui::tx_context::{TxContext};
    use sui::vec_set::{Self, VecSet};

    const E_INVALID_POINTER: u64 = 0x0101;
    const E_WRONG_OBJECT: u64 = 0x0102;

    /// SharedCap is assumed to be a shared object or owned/stored by a shared object
    public struct SharedCap<phantom T: key> has key, store {
        id: UID,
        target_id: ID, // ojbect::id(&T)
        pointer_list: VecSet<ID>, // Pointers to this cap
    }

    /// Pointer is assumed to be a single holder object
    public struct Pointer<phantom SharedCap> has key {
        id: UID,
        cap_id: ID,
        holder: address,
    }

    public struct PointerReceipt {
        pointer_id: ID,
        return_to: address,
    }

    public fun new_cap<T: key>(target_id: ID, ctx: &mut TxContext): SharedCap<T> {
        let mut self = SharedCap<T> {
            id: object::new(ctx),
            target_id, // ojbect::id(&T)
            pointer_list: vec_set::empty(),
        };

        let holder = ctx.sender();
        let pointer = Pointer<SharedCap<T>> {
            id: object::new(ctx),
            cap_id: object::id(&self),
            holder,
        };
        self.pointer_list.insert(object::id(&pointer));
        transfer::transfer(pointer, holder);

        self
    }

    public fun check_cap<T: key>(self: &SharedCap<T>, pointer: &Pointer<SharedCap<T>>) {
        assert!(self.pointer_list.contains(&object::id(pointer)), E_INVALID_POINTER);
    }

    public fun add_pointer<T: key>(self: &mut SharedCap<T>, subject: &Pointer<SharedCap<T>>, new_holder: address, ctx: &mut TxContext) {
        self.check_cap(subject);
        let pointer = Pointer<SharedCap<T>> {
            id: object::new(ctx),
            cap_id: object::id(self),
            holder: new_holder,
        };
        self.pointer_list.insert(object::id(&pointer));
        transfer::transfer(pointer, new_holder);
    }

    public fun remove_pointer<T: key>(self: &mut SharedCap<T>, subject: &Pointer<SharedCap<T>>, target_pointer: ID) {
        self.check_cap(subject);
        self.pointer_list.remove(&target_pointer);
    }


    // Bellow code is for Transfer-To-Object(TTO)

    public fun take_pointer<T: key>(
        parent: &mut UID,
        ticket: Receiving<Pointer<SharedCap<T>>>,
    ): (Pointer<SharedCap<T>>, PointerReceipt) {
        let pointer = transfer::receive(parent, ticket);
        let return_receipt = PointerReceipt {
            pointer_id: object::id(&pointer),
            return_to: object::uid_to_address(parent),
        };
        (pointer, return_receipt)
    }

    public fun return_pointer<T: key>(pointer: Pointer<SharedCap<T>>, receipt: PointerReceipt) {
        let PointerReceipt { pointer_id, return_to }  = receipt;
        assert!(object::id(&pointer) == pointer_id, E_WRONG_OBJECT);
        sui::transfer::transfer(pointer, return_to);
    }
}
