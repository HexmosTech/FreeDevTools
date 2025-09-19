---
title: "Handshake Wallet CLI - Control Handshake Wallet | Online Free DevTools by Hexmos"
name: hsw-cli
path: /freedevtools/tldr/common/hsw-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/hsw-cli/"
description: "Control your Handshake Wallet with Handshake Wallet CLI. Manage balances, send transactions, and view history using the command line. Free online tool, no registration required."
category: common
keywords:
- Handshake wallet CLI
- HSW-CLI tool
- Handshake transaction management
- Handshake wallet balance checker
- Handshake wallet history viewer
- Handshake transaction sender
- Handshake pending transaction viewer
- Handshake transaction details
- Handshake CLI
- Handshake wallet unlocker
features:
- Unlock and lock Handshake wallet via CLI.
- View Handshake wallet balance and transaction history.
- Send Handshake coins to specified addresses.
- Display pending Handshake transactions.
- Show details of a specific Handshake transaction.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hsw-cli

> The REST tool for the Handshake wallet.
> More information: <https://github.com/handshake-org/hs-client>.

- Unlock the current wallet (timeout in seconds):

`hsw-cli unlock {{passphrase}} {{timeout}}`

- Lock the current wallet:

`hsw-cli lock`

- View the current wallet's details:

`hsw-cli get`

- View the current wallet's balance:

`hsw-cli balance`

- View the current wallet's transaction history:

`hsw-cli history`

- Send a transaction with the specified coin amount to an address:

`hsw-cli send {{address}} {{1.05}}`

- View the current wallet's pending transactions:

`hsw-cli pending`

- View details about a transaction:

`hsw-cli tx {{transaction_hash}}`
