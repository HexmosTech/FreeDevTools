---
title: "Create Sui PTB - Execute Programmable Transactions | Free DevTools"
name: sui-client-ptb
path: /freedevtools/tldr/common/sui-client-ptb
canonical: "https://hexmos.com/freedevtools/tldr/common/sui-client-ptb/"
description: "Create Sui Programmable Transaction Blocks with sui-client-ptb. Build and execute complex transactions on the Sui blockchain. Free online tool, no registration required."
category: common
keywords:
- Sui PTB creation
- Programmable transaction builder
- Sui blockchain transaction
- Move call execution
- Sui transaction scripting
- Sui coin splitting
- Sui object transfer
- Sui package publishing
- Sui transaction signing
- Sui transaction execution
features:
- Execute Move function calls within a transaction
- Create Move vectors with specified data types
- Split Sui gas coins and assign the new coins to a variable
- Transfer Sui objects to specific addresses
- Publish Move packages and transfer upgrade capabilities
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sui client ptb

> Create, sign and execute programmable transaction blocks.
> More information: <https://docs.sui.io/references/cli/ptb>.

- Call a Move function from a package and module:

`sui client ptb --move-call p::m::f "<{{type}}>" args`

- Make a Move vector with two elements of type u64:

`sui client ptb --make-move-vec "<u64>" "[1000,2000]"`

- Split a gas coin and transfer it to address:

`sui client ptb --split-coins gas "[1000]" --assign new_coins --transfer-objects "[new_coins]" @{{address}}`

- Transfer an object to an address:

`sui client ptb --transfer-objects "[{{object_id}}]" @{{address}}`

- Publish a Move package, and transfer the upgrade capability to sender:

`sui client ptb --move-call sui::tx_context::sender --assign sender --publish "." --assign upgrade_cap --transfer-objects "[upgrade_cap]" sender`
