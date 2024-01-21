module counter::regulated_pointer {
    use sui::object::{Self, ID, UID};
    use sui::transfer::{Self, Receiving};
    use sui::tx_context::{TxContext};

    const E_WRONG_OBJECT: u64 = 0x0102;
    // const E_INVALID_HOLDER: u64 = 0x0103;

    friend counter::shared_cap;

    /// Pointer is assumed to be a single owner object.
    public struct RegulatedPointer<phantom T> has key {
        id: UID,
        refer_to: ID,
        holder: address,
    }

    public struct PointerReceipt {
        pointer_id: ID,
        return_to: address,
    }

    // public fun check_holder<T: key>(pointer: &RegulatedPointer<T>, holder: address) {
    //     assert!(pointer.holder == holder, E_INVALID_HOLDER);
    // }

    public(friend) fun create<T: key>(refer_to: &T, holder: address, ctx: &mut TxContext): ID {
        let pointer = RegulatedPointer<T> {
            id: object::new(ctx),
            refer_to: object::id(refer_to),
            holder,
        };
        let id = object::id(&pointer);
        transfer::transfer(pointer, holder);
        id
    }

    public fun delete<T: key>(pointer: RegulatedPointer<T>) {
        let RegulatedPointer<T> { id, refer_to: _, holder: _ } = pointer;
        object::delete(id);
    }


    // Bellow code is for Transfer-To-Object(TTO)

    public fun take_pointer<T: key>(
        parent: &mut UID,
        ticket: Receiving<RegulatedPointer<T>>,
    ): (RegulatedPointer<T>, PointerReceipt) {
        let pointer = transfer::receive(parent, ticket);
        let return_receipt = PointerReceipt {
            pointer_id: object::id(&pointer),
            return_to: object::uid_to_address(parent),
        };
        (pointer, return_receipt)
    }

    public fun return_pointer<T: key>(pointer: RegulatedPointer<T>, receipt: PointerReceipt) {
        let PointerReceipt { pointer_id, return_to }  = receipt;
        assert!(object::id(&pointer) == pointer_id, E_WRONG_OBJECT);
        sui::transfer::transfer(pointer, return_to);
    }
}
