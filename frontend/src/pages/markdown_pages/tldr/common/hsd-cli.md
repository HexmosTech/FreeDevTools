---
title: "Control Handshake Blockchain - hsd-cli | Free DevTools"
name: hsd-cli
path: /freedevtools/tldr/common/hsd-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/hsd-cli/"
description: "Control the Handshake blockchain with hsd-cli. Retrieve information, broadcast transactions, and view blocks. Free online tool, no registration required."
category: common
keywords:
- handshake blockchain control
- hsd-cli command line
- blockchain transaction broadcast
- hsd node management
- blockchain mempool snapshot
- hsd-cli transaction viewer
- hsd-cli block explorer
- handshake address lookup
- blockchain chain reset
- hsd-cli rpc execution
features:
- Retrieve Handshake blockchain information
- Broadcast transactions to the network
- View mempool snapshot details
- Inspect transactions by address or hash
- Examine blocks by height or hash
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hsd-cli

> The REST tool for the Handshake blockchain.
> More information: <https://handshake.org>.

- Retrieve information about the current server:

`hsd-cli info`

- Broadcast a local transaction:

`hsd-cli broadcast {{transaction_hex}}`

- Retrieve a mempool snapshot:

`hsd-cli mempool`

- View a transaction by address or hash:

`hsd-cli tx {{address_or_hash}}`

- View a coin by its hash index or address:

`hsd-cli coin {{hash_index_or_address}}`

- View a block by height or hash:

`hsd-cli block {{height_or_hash}}`

- Reset the chain to the specified block:

`hsd-cli reset {{height_or_hash}}`

- Execute an RPC command:

`hsd-cli rpc {{command}} {{args}}`
