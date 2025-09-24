---
title: "Ganache CLI - Create Private Ethereum Blockchains | Online Free DevTools by Hexmos"
name: ganache-cli
path: /freedevtools/tldr/common/ganache-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/ganache-cli/"
description: "Create private Ethereum blockchains with Ganache CLI. Easily test and debug smart contracts in a controlled environment. Free online tool, no registration required."
category: common
keywords:
- Ethereum blockchain
- private blockchain
- ganache-cli
- truffle suite
- smart contract testing
- ethereum development
- blockchain testing
- ganache cli commands
- ethereum simulation
- blockchain emulator
features:
- Simulate a local Ethereum blockchain environment
- Deploy and test smart contracts
- Customize accounts and balances
- Control blockchain parameters such as gas limit
- Inspect transactions and blocks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ganache-cli

> Command-line version of Ganache, your personal blockchain for Ethereum development.
> More information: <https://www.trufflesuite.com/ganache>.

- Run Ganache:

`ganache-cli`

- Run Ganache with a specific number of accounts:

`ganache-cli --accounts={{number_of_accounts}}`

- Run Ganache and lock available accounts by default:

`ganache-cli --secure`

- Run Ganache server and unlock specific accounts:

`ganache-cli --secure --unlock "{{account_private_key1}}" --unlock "{{account_private_key2}}"`

- Run Ganache with a specific account and balance:

`ganache-cli --account="{{account_private_key}},{{account_balance}}"`

- Run Ganache with accounts with a default balance:

`ganache-cli --defaultBalanceEther={{default_balance}}`

- Run Ganache and log all requests to `stdout`:

`ganache-cli --verbose`
