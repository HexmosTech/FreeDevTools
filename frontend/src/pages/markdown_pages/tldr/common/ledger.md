---
title: "Ledger Accounting - Track Finances | Online Free DevTools by Hexmos"
name: ledger
path: /freedevtools/tldr/common/ledger
canonical: "https://hexmos.com/freedevtools/tldr/common/ledger/"
description: "Track finances efficiently with Ledger Accounting, a powerful double-entry accounting system. Analyze transactions and generate comprehensive reports. Free online tool, no registration required."
category: common
keywords:
- Ledger accounting
- Double-entry accounting
- Financial reporting
- Balance sheet generator
- Transaction analysis
- Budget tracking
- Command line accounting
- Journal entry analysis
- Ledger cli
- Ledger linux
features:
- Generate balance reports with totals
- List expenses sorted by amount
- Calculate expenses excluding specific categories
- Print budget reports for financial planning
- Display summary statistics of postings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ledger

> A powerful, double-entry accounting system.
> More information: <https://www.ledger-cli.org>.

- Print a balance report showing totals:

`ledger balance --file {{path/to/ledger.journal}}`

- List all postings in Expenses ordered by amount:

`ledger register {{expenses}} --sorted {{amount}}`

- Print total Expenses other than Drinks and Food:

`ledger balance {{Expenses}} and not ({{Drinks}} or {{Food}})`

- Print a budget report:

`ledger budget`

- Print summary information about all the postings:

`ledger stats`
