---
title: "Record hledger Transactions - Add Transactions Interactively | Online Free DevTools by Hexmos"
name: hledger-add
path: /freedevtools/tldr/hledger/hledger-add
canonical: "https://hexmos.com/freedevtools/tldr/hledger/hledger-add/"
description: "Record hledger transactions easily with hledger-add. Create and manage financial transactions interactively in the console. Free online tool, no registration required."
category: common
keywords:
- hledger transactions
- record transactions
- ledger entries
- financial data
- command line ledger
- plain text accounting
- hledger add command
- budgeting tool
- accounting software
- ledger CLI tool
features:
- Record new financial transactions interactively
- Specify the journal file for adding transactions
- Load multiple journal files for autocompletion
- Pre-fill transaction prompts with arguments
- Access command options and documentation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hledger add

> Record new transactions with interactive prompting in the console.
> More information: <https://hledger.org/hledger.html#add>.

- Record new transactions, saving to the default journal file:

`hledger add`

- Add transactions to `2024.journal`, but also load `2023.journal` for completions:

`hledger add {{[-f|--file]}} {{path/to/2024.journal}} {{[-f|--file]}} {{path/to/2023.journal}}`

- Provide answers for the first four prompts:

`hledger add {{today}} '{{best buy}}' {{expenses:supplies}} '{{$20}}'`

- Show `add`'s options and documentation with `$PAGER`:

`hledger add {{[-h|--help]}}`

- Show `add`'s documentation with `info` or `man` if available:

`hledger help add`
