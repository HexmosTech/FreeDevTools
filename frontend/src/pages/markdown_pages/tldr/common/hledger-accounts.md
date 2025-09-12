---
title: "List Hledger Accounts - Manage Ledger Account Names | Free DevTools"
name: hledger-accounts
path: /freedevtools/tldr/common/hledger-accounts
canonical: "https://hexmos.com/freedevtools/tldr/common/hledger-accounts/"
description: "List accounts with Hledger, the powerful accounting tool. Manage account names, filter by type, and generate account directives. Free online tool, no registration required."
category: common
keywords:
- hledger accounts
- ledger accounts
- accounting accounts
- command line accounting
- hledger commands
- hledger accounting tool
- financial ledger
- ledger account types
- declare hledger accounts
- hledger account directives
features:
- List all accounts used or declared
- Show accounts used by transactions
- Show accounts declared with directives
- Generate account directives for undeclared accounts
- Filter accounts by name and type
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hledger accounts

> List account names.
> More information: <https://hledger.org/hledger.html#accounts>.

- Show all accounts used or declared in the default journal file:

`hledger {{[acc|accounts]}}`

- Show accounts used by transactions:

`hledger {{[acc|accounts]}} {{[-u|--used]}}`

- Show accounts declared with account directives:

`hledger {{[acc|accounts]}} {{[-d|--declared]}}`

- Add new account directives, for accounts used but not declared, to the journal:

`hledger {{[acc|accounts]}} --undeclared --directives >> {{2024-accounts.journal}}`

- Show accounts with `asset` in their name, and their declared/inferred types:

`hledger {{[acc|accounts]}} asset --types`

- Show accounts of the `Asset` type:

`hledger {{[acc|accounts]}} type:A`

- Show the first two levels of the accounts hierarchy:

`hledger {{[acc|accounts]}} {{[-t|--tree]}} {{[-2|--depth 2]}}`
