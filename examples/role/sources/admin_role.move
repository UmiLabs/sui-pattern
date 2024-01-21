module shared_cap::admin_role {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::vec_set::{Self, VecSet};
    use sui::tx_context::{TxContext};
    use std::vector;

    const E_INVALID_CAP: u64 = 1;
    const E_WRONG_OBJECT: u64 = 2;

    use shared_cap::counter::{Self, Counter};

    public struct AdminRole has key {
        id: UID,
        allow_list: VecSet<address>,
    }

    struct ReturnReceipt {
        object_id: ID,
        return_to: address,
    }

    public fun take_role(parent: &mut UID, ticket: Receiving<AdminRole>): (AdminRole, ReturnReceipt) {
        let role = transfer::receive(parent, soul_bound_ticket);
        let return_receipt = ReturnReceipt {
            object_id: object::id(&role),
            return_to: object::uid_to_address(parent),
        };
        (role, return_receipt)
    }

    public fun return_role(role: AdminRole, receipt: ReturnReceipt) {
        let ReturnReceipt { object_id, return_to }  = receipt;
        assert!(object::id(&role) == object_id, E_WRONG_OBJECT);
        sui::transfer::transfer(role, return_to);
    }
}