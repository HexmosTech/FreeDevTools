---
title: "Create Electrum Wallet - Manage Keys | Online Free DevTools by Hexmos"
name: electrum
path: "/freedevtools/tldr/common/electrum/"
canonical: "https://hexmos.com/freedevtools/tldr/common/electrum/"
description: "Create Bitcoin wallets securely with Electrum. Manage private keys, sign transactions offline, and verify messages. Free online tool, no registration required."
category: common
keywords:
- Bitcoin wallet creation
- Electrum wallet manager
- Cryptocurrency key management
- Offline transaction signing
- Bitcoin address generation
- Message signing verification
- Electrum server connection
- Bitcoin security tool
- Electrum wallet restoration
- Bitcoin private key management
features:
- Create new Electrum wallets with ease
- Restore existing wallets securely from seed
- Create signed Bitcoin transactions offline
- Display wallet receiving addresses comprehensively
- Sign and verify messages using your Electrum wallet
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# electrum

> Ergonomic Bitcoin wallet and private key management.
> More information: <https://electrum.org>.

- Create a new wallet:

`electrum {{[-w|--wallet]}} {{path/to/new_wallet.dat}} create`

- Restore an existing wallet from seed offline:

`electrum {{[-w|--wallet]}} {{path/to/recovery_wallet.dat}} restore {{[-o|--offline]}}`

- Create a signed transaction offline:

`electrum mktx {{recipient}} {{amount}} {{[-f|--fee]}} 0.0000001 {{[-F|--from-addr]}} {{from}} {{[-o|--offline]}}`

- Display all wallet receiving addresses:

`electrum listaddresses -a`

- Sign a message:

`electrum signmessage {{address}} {{message}}`

- Verify a message:

`electrum verifymessage {{address}} {{signature}} {{message}}`

- Connect only to a specific electrum-server instance:

`electrum {{[-p|--proxy]}} socks5:{{127.0.0.1}}:9050 {{[-s|--server]}} {{56ckl5obj37gypcu.onion}}:50001:t {{[-1|--oneserver]}}`
