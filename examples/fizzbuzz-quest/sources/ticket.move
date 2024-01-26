module counter::ticket {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext};


    friend counter::quest;
    friend counter::gem;

    public struct Ticket<phantom T> {
        id: UID,
        amount: u64,
    }

    public fun amount<T>(self: &Ticket<T>): u64 {
        self.amount
    }

    public fun new<T>(amount: u64, ctx: &mut TxContext): Ticket<T> {
        Ticket {
            id: object::new(ctx),
            amount,
        }
    }

    public(friend) fun delete<T>(self: Ticket<T>) {
    // public(friend) fun delete<T>(self: Ticket, ctx: &mut TxContext) {
        let Ticket { id, amount: _ } = self;
        object::delete(id);
    }

}
