---
title: "Hledger-ui TUI - Manage Plain Text Accounting | Online Free DevTools by Hexmos"
name: hledger-ui
path: "/freedevtools/tldr/hledger/hledger-ui/"
canonical: "https://hexmos.com/freedevtools/tldr/hledger/hledger-ui/"
description: "Manage plain text accounting with Hledger-ui TUI. Analyze journal files, create balance sheets, and track transactions with this terminal interface. Free online tool, no registration required."
category: common
keywords:
- plain text accounting
- hledger terminal interface
- tui accounting tool
- hledger command line
- journal file analyzer
- balance sheet generator
- transaction tracker
- accounting reporting
- hledger ui
- ledger cli
features:
- View accounting data through a terminal user interface (TUI)
- Analyze balance sheets with customizable depth
- Monitor specific accounts and cleared transactions in real-time
- Read and combine multiple journal files for consolidated reporting
- Display hledger manual in Info format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hledger-ui

> A terminal interface (TUI) for `hledger`, a robust, friendly plain text accounting app.
> More information: <https://hledger.org/hledger-ui.html>.

- Start in the main menu screen, reading from the default journal file:

`hledger-ui`

- Start with a different color theme:

`hledger-ui --theme {{terminal|greenterm|dark}}`

- Start in the balance sheet accounts screen, showing hierarchy down to level 3:

`hledger-ui --bs {{[-t|--tree]}} {{[-3|--depth 3]}}`

- Start in this account's screen, showing cleared transactions, and reload on change:

`hledger-ui --register {{assets:bank:checking}} {{[-C|--cleared]}} {{[-w|--watch]}}`

- Read two journal files, and show amounts as current value when known:

`hledger-ui {{[-f|--file]}} {{path/to/2024.journal}} {{[-f|--file]}} {{path/to/2024-prices.journal}} --value now`

- Show the manual in Info format, if possible:

`hledger-ui --info`

- Display help:

`hledger-ui {{[-h|--help]}}`
