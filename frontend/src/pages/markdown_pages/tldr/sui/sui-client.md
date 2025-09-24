---
title: "Sui Client - Control Smart Contracts | Online Free DevTools by Hexmos"
name: sui-client
path: /freedevtools/tldr/sui/sui-client
canonical: "https://hexmos.com/freedevtools/tldr/sui/sui-client/"
description: "Control smart contracts with Sui Client, a command-line interface for the Sui blockchain. Publish contracts, execute transactions, and manage addresses. Free online tool, no registration required."
category: common
keywords:
- sui client command
- sui blockchain interaction
- sui smart contract deployment
- sui address management
- sui transaction execution
- sui faucet interaction
- sui gas coin management
- sui programmable transaction blocks
- sui cli tool
- sui development tool
features:
- Publish smart contracts to the Sui blockchain
- Manage Sui addresses and switch environments
- Interact with the Sui faucet for test coins
- Execute programmable transaction blocks (PTBs)
- List and manage gas coins for specific addresses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sui client

> Publish smart contracts, get object information, execute transactions, and more.
> More information: <https://docs.sui.io/references/cli/client>.

- Create a new address with the ED25519 scheme:

`sui client new-address ed25519 {{address-alias}}`

- Create a new testnet environment with an RPC URL and alias:

`sui client new-env --rpc https://fullnode.testnet.sui.io:443 --alias testnet`

- Switch to the address of your choice (accepts also an alias):

`sui client switch --address {{address-alias}}`

- Switch to the given environment:

`sui client switch --env {{env-alias}}`

- Publish a smart contract:

`sui client publish {{package-path}}`

- Interact with the Sui faucet:

`sui client faucet {{subcommand}}`

- List the gas coins for the given address (accepts also an alias):

`sui client gas {{address}}`

- Create, sign, and execute programmable transaction blocks:

`sui client ptb {{options}} {{subcommand}}`
