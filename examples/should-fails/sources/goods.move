module should_fails::goods {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::event;
    use sui::tx_context::{TxContext};

    public struct LogEvnet has copy, drop {
        goods: ID,
        token: u64,
        sender: address,
    }

    public struct Goods has key, store {
        id: UID,
        token: u64,
    }

    public fun new(token: u64, ctx: &mut TxContext): Goods {
        Goods {
            id: object::new(ctx),
            token,
        }
    }

    public entry fun create(ctx: &mut TxContext) {
        transfer::public_transfer(new(42, ctx), ctx.sender());
    }

    public entry fun log(goods: &Goods, ctx: &TxContext) {
        event::emit(LogEvnet {
            goods: object::id(goods),
            token: goods.token,
            sender: ctx.sender(),
        });
    }

    #[test_only] use std::debug;
    #[test_only] use sui::test_scenario::{Self as test, ctx};

    #[test_only] const ALICE: address = @0xA11CE;
    #[test_only] const BOB: address = @0xB0B;

    #[test]
    fun test_new() {
        let mut scenario = test::begin(@0x1);
        let test = &mut scenario;
        test.next_tx(ALICE); {
            let goods = new(42, test.ctx());
            transfer::public_transfer(goods, ALICE);
        };

        // if you call this from off-chain, it should fail
        // because goods is not owned by ALICE
        test.next_tx(BOB); {
            let goods = test.take_from_address<Goods>(ALICE);
            log(&goods, test.ctx());
            test::return_to_address(ALICE, goods);
        };
        test::end(scenario);
    }
}
