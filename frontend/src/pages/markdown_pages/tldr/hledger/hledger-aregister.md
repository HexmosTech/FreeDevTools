---
title: "Generate hledger Register - Account Balances | Online Free DevTools by Hexmos"
name: hledger-aregister
path: /freedevtools/tldr/hledger/hledger-aregister
canonical: "https://hexmos.com/freedevtools/tldr/hledger/hledger-aregister/"
description: "Generate account registers with hledger-aregister, display transactions and balances per account. Control your ledger entries efficiently. Free online tool, no registration required."
category: common
keywords:
- hledger account register
- hledger aregister command
- hledger accounting tool
- hledger balance sheet
- ledger transaction viewer
- command line accounting
- hledger finance management
- hledger reporting
- ledger CLI
- plaintext accounting
features:
- Display transactions for a specified account
- Calculate and show running balances for each transaction
- Filter transactions by clearance status
- Customize output width for readability
- Include transactions from forecast rules
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hledger aregister

> Show the transactions and running balances in one account, with each transaction on one line.
> More information: <https://hledger.org/hledger.html#aregister>.

- Show transactions and running balance in the `assets:bank:checking` account:

`hledger {{[areg|aregister]}} assets:bank:checking`

- Show transactions and running balance in the first account named `*savings*`:

`hledger {{[areg|aregister]}} savings`

- Show the checking account's cleared transactions, with a specified width:

`hledger {{[areg|aregister]}} checking {{[-C|--cleared]}} {{[-w|--width]}} {{120}}`

- Show the checking register, including transactions from forecast rules:

`hledger {{[areg|aregister]}} checking --forecast`
