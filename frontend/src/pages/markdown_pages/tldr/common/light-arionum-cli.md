---
title: "Arionum CLI - Manage Crypto Wallet | Online Free DevTools by Hexmos"
name: light-arionum-cli
path: /freedevtools/tldr/common/light-arionum-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/light-arionum-cli/"
description: "Manage Arionum crypto wallet with light-arionum-cli. Send transactions, check balances, and export wallet data with this simple command-line interface. Free online tool, no registration required."
category: common
keywords:
- arionum cli wallet
- arionum command line
- crypto wallet manager
- arionum transaction sender
- arionum balance checker
- arionum key pair generator
- blockchain transaction viewer
- crypto wallet exporter
- arionum block explorer
- arionum address lookup
features:
- Generate new Arionum public/private key pairs.
- Display the balance of Arionum addresses.
- Send Arionum transactions with optional messages.
- Export current Arionum wallet information.
- Display information about specific Arionum blocks and transactions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# light-arionum-cli

> The PHP light wallet for the Arionum cryptocurrency.
> More information: <https://github.com/arionum/lightWalletCLI>.

- Generate a new public/private key pair:

`light-arionum-cli`

- Display the balance of the current address:

`light-arionum-cli balance`

- Display the balance of the specified address:

`light-arionum-cli balance {{address}}`

- Send a transaction with an optional message:

`light-arionum-cli send {{address}} {{value}} {{optional_message}}`

- Export the current wallet information:

`light-arionum-cli export`

- Display information about the current block:

`light-arionum-cli block`

- Display information about the current address' transactions:

`light-arionum-cli transactions`

- Display information about a specific transaction:

`light-arionum-cli transaction {{transaction_id}}`
