module shared_wallet::wallet {
    use std::vector::{Self};

    use sui::object::{Self, UID};
    use sui::transfer::{Self, Receiving};
    use sui::tx_context::{TxContext};

    use shared_wallet::goods::{Goods};

    const E_INVALID_CAP: u64 = 1;

    public struct Wallet has key {
        id: UID,
        allow_list: vector<address>,
    }

    public fun create(allow_list: vector<address>, ctx: &mut TxContext) {
        let wallet = Wallet {
            id: object::new(ctx),
            allow_list,
        };
        transfer::share_object(wallet);
    }

    public fun check_cap(wallet: &Wallet, ctx: &TxContext) {
        let is = vector::contains(&wallet.allow_list, &ctx.sender());
        assert!(is, E_INVALID_CAP);
    }

    public fun receive(wallet: &mut Wallet, goods: Receiving<Goods>, ctx: &TxContext): Goods {
        wallet.check_cap(ctx);
        transfer::public_receive(&mut wallet.id, goods)
    }


    #[test_only] use std::debug;
    #[test_only] use sui::test_scenario::{Self as test, ctx};


    #[test_only] const ALICE: address = @0xA11CE;
    #[test_only] const BOB: address = @0xB0B;
    #[test_only] const CAROL: address = @0xC4401;
    #[test_only] const EVE: address = @0xE0E;


    #[test]
    fun test_admin_cap() {
        let allow_list = vector[ALICE, BOB];

        let mut scenario = test::begin(@0x1);
        let test = &mut scenario;
        // Ready a shared wallet for Alice and Bob
        test.next_tx(ALICE); {
            create(allow_list, test.ctx());
        };
        // Alice trnasfers the goods to the wallet
        test.next_tx(ALICE); {
            let wallet = test.take_shared<Wallet>();
            let goods = goods::new(42, test.ctx());
            transfer::public_transfer(goods, object::id_address(&wallet));
            test::return_shared(wallet);
        }; test.next_tx(ALICE);
        // TODO: EVE tries to take the goods from the wallet
        //
        test::end(scenario);
    }
}
