---
title: "Bitcoin CLI - Control Bitcoin Daemon via RPC | Online Free DevTools by Hexmos"
name: bitcoin-cli
path: "/freedevtools/tldr/common/bitcoin-cli/"
canonical: "https://hexmos.com/freedevtools/tldr/common/bitcoin-cli/"
description: "Control Bitcoin Core daemon with Bitcoin-cli command. Manage blockchain, send transactions, and get wallet information via RPC calls. Free online tool, no registration required."
category: common
keywords:
- bitcoin command line interface
- bitcoin rpc client
- bitcoin core cli
- blockchain command line
- bitcoin wallet cli
- bitcoin transaction cli
- linux bitcoin cli
- macos bitcoin cli
- windows bitcoin cli
- bitcoin daemon control
features:
- Send Bitcoin transactions to specified addresses
- Generate new blocks on the Bitcoin blockchain
- Retrieve comprehensive wallet information
- List unspent transaction outputs
- Export wallet data to a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bitcoin-cli

> Client to interact with the Bitcoin Core daemon via RPC calls.
> Uses the configuration defined in `bitcoin.conf`.
> More information: <https://en.bitcoin.it/wiki/Running_Bitcoin#Command-line_arguments>.

- Send a transaction to a given address:

`bitcoin-cli sendtoaddress "{{address}}" {{amount}}`

- Generate one or more blocks:

`bitcoin-cli generate {{num_blocks}}`

- Print high-level information about the wallet:

`bitcoin-cli getwalletinfo`

- List all outputs from previous transactions available to fund outgoing transactions:

`bitcoin-cli listunspent`

- Export the wallet information to a text file:

`bitcoin-cli dumpwallet "{{path/to/file}}"`

- Get blockchain information:

`bitcoin-cli getblockchaininfo`

- Get network information:

`bitcoin-cli getnetworkinfo`

- Stop the Bitcoin Core daemon:

`bitcoin-cli stop`
