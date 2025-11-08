---
title: "Generate Hledger Balancesheet - Financial Summary | Online Free DevTools by Hexmos"
name: hledger-balancesheet
path: "/freedevtools/tldr/hledger/hledger-balancesheet/"
canonical: "https://hexmos.com/freedevtools/tldr/hledger/hledger-balancesheet/"
description: "Generate financial summaries with Hledger Balancesheet. Analyze assets and liabilities using command line. Free online tool, no registration required."
category: common
keywords:
- hledger balancesheet
- financial balancesheet
- hledger accounting
- balancesheet generator
- ledger balancesheet
- hledger command
- asset liability report
- financial reporting
- command line accounting
- hledger finance
features:
- Show asset and liability account balances.
- Filter balances by account type.
- Include accounts with zero balances.
- Display account hierarchy in a tree format.
- Generate monthly or quarterly balance reports.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hledger balancesheet

> Show the end balances in asset and liability accounts.
> Amounts are shown with normal positive sign, as in conventional financial statements.
> More information: <https://hledger.org/hledger.html#balancesheet>.

- Show the current balances in `Asset` and `Liability` accounts, excluding zeros:

`hledger {{[bs|balancesheet]}}`

- Show just the liquid assets (`Cash` account type):

`hledger {{[bs|balancesheet]}} type:C`

- Include accounts with zero balances, and show the account hierarchy:

`hledger {{[bs|balancesheet]}} {{[-E|--empty]}} {{[-t|--tree]}}`

- Show the balances at the end of each month:

`hledger {{[bs|balancesheet]}} {{[-M|--monthly]}}`

- Show the balances' market value in home currency at the end of each month:

`hledger {{[bs|balancesheet]}} {{[-M|--monthly]}} {{[-V|--market]}}`

- Show quarterly balances, with just the top two levels of account hierarchy:

`hledger {{[bs|balancesheet]}} {{[-Qt|--quarterly --tree]}} {{[-2|--depth 2]}}`

- Same as above above, and generate HTML output in `bs.html`:

`hledger {{[bs|balancesheet]}} {{[-Qt|--quarterly --tree]}} {{[-2|--depth 2]}} {{[-o|--output-file]}} bs.html`
