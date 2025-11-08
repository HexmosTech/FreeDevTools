---
title: "Generate hledger Incomestatement - Analyze Finances | Online Free DevTools by Hexmos"
name: hledger-incomestatement
path: "/freedevtools/tldr/hledger/hledger-incomestatement/"
canonical: "https://hexmos.com/freedevtools/tldr/hledger/hledger-incomestatement/"
description: "Generate hledger incomestatements for financial analysis with hledger-incomestatement. Analyze revenue and expenses with command-line reporting. Free online tool, no registration required."
category: common
keywords:
- hledger incomestatement
- financial reporting
- revenue expenses report
- hledger finance command
- command line accounting
- income statement analysis
- hledger report generation
- account balance reporting
- ledger file analysis
- hledger accounting tool
features:
- Generate revenue and expense reports
- Display monthly financial data
- Summarize data to specified levels
- Sort output by amount
- Output to HTML for reporting
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hledger incomestatement

> Show revenue inflows and expense outflows during the report period.
> Amounts are shown with normal positive sign, as in conventional financial statements.
> More information: <https://hledger.org/hledger.html#incomestatement>.

- Show revenues and expenses (changes in `Revenue` and `Expense` accounts):

`hledger {{[is|incomestatement]}}`

- Show revenues and expenses each month:

`hledger {{[is|incomestatement]}} {{[-M|--monthly]}}`

- Show monthly revenues/expenses/totals, largest first, summarised to 2 levels:

`hledger {{[is|incomestatement]}} {{[-MTAS|--monthly --row-total --average --sort-amount]}} {{[-2|--depth 2]}}`

- Same as above, and generate HTML output in `is.html`:

`hledger {{[is|incomestatement]}} {{[-MTAS|--monthly --row-total --average --sort-amount]}} {{[-2|--depth 2]}} {{[-o|--output-file]}} is.html`
