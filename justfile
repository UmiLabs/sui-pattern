# https://docs.sui.io/guides/developer/getting-started/sui-environment#move-ides-and-plugins
install-move-analyzer:
    cargo install --force --git https://github.com/move-language/move move-analyzer --branch sui-move --features "address32"

install-sui-client-gen:
    cargo install --locked --git https://github.com/kunalabs-io/sui-client-gen.git --tag v0.2.0

install-sui-test-validator:
    cargo install --git https://github.com/mystenlabs/sui --branch testnet sui-test-validator

install-sui:
    brew install mystenlabs/tap/sui

install-suivm:
    cargo install --git https://github.com/origin-byte/suivm

sui-info:
    sui client envs
    sui client active-address

sui-add-env NET="testnet":
    echo NET=devnet, testnet, mainnet
    sui client new-env --alias {{NET}} --rpc https://fullnode.{{NET}}.sui.io:443

sui-switch ALIAS:
    sui client envs
    sui client switch --env {{ALIAS}}
    sui client envs
    sui client active-address



create-key:
    cd keys && sui keytool generate ed25519


# sui

@build:
    sui move build

@test:
    sui move test

@publish:
    sui client publish --gas-budget 123456789 --json | tee publish-result.json 2> /dev/null

pick-package-id:
    @jq -r '.objectChanges[] | select(.type == "published") | .packageId' publish-result.json

pick-upgrade-cap-id:
    @jq -r '.objectChanges[] | select(.objectType == "0x2::package::UpgradeCap") | .objectId' publish-result.json

upgrade:
    sui client upgrade --gas-budget 123456789 --upgrade-capability `just pick-upgrade-cap-id` --json

pub-and-pick: publish pick-package-id

# sdk-ts
@build-ts:
    cd sdk-ts
    bun gen:sui
    bun run build
