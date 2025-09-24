---
title: "Octez Client - Interact with Tezos Blockchain | Online Free DevTools by Hexmos"
name: octez-client
path: /freedevtools/tldr/common/octez-client
canonical: "https://hexmos.com/freedevtools/tldr/common/octez-client/"
description: "Interact with the Tezos blockchain using Octez Client. Manage accounts, transfer tez, and deploy smart contracts easily. Free online tool, no registration required."
category: common
keywords:
- Tezos blockchain client
- Octez client command
- Tezos account manager
- Smart contract deployment
- Tez transfer utility
- Michelson code execution
- Tezos RPC interaction
- Blockchain command line
- Tezos account balance
- Crypto transfer client
features:
- Configure connection to a Tezos RPC node
- Generate and manage Tezos accounts with aliases
- Transfer tez between accounts on the Tezos blockchain
- Originate and deploy smart contracts with initial storage
- Call smart contracts with Michelson-encoded parameters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# octez-client

> Interact with the Tezos blockchain.
> More information: <https://tezos.gitlab.io/introduction/howtouse.html#client>.

- Configure the client with a connection to a Tezos RPC node such as <https://rpc.ghostnet.teztnets.com>:

`octez-client -E {{endpoint}} config update`

- Create an account and assign a local alias to it:

`octez-client gen keys {{alias}}`

- Get the balance of an account by alias or address:

`octez-client get balance for {{alias_or_address}}`

- Transfer tez to a different account:

`octez-client transfer {{5}} from {{alias|address}} to {{alias|address}}`

- Originate (deploy) a smart contract, assign it a local alias, and set its initial storage as a Michelson-encoded value:

`octez-client originate contract {{alias}} transferring {{0}} from {{alias|address}} running {{path/to/source_file.tz}} --init "{{initial_storage}}" --burn_cap {{1}}`

- Call a smart contract by its alias or address and pass a Michelson-encoded parameter:

`octez-client transfer {{0}} from {{alias|address}} to {{contract}} --entrypoint "{{entrypoint}}" --arg "{{parameter}}" --burn-cap {{1}}`

- Display help:

`octez-client man`
