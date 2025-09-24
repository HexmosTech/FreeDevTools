---
title: "Hledger Print - Show Journal Entries | Online Free DevTools by Hexmos"
name: hledger-print
path: /freedevtools/tldr/hledger/hledger-print
canonical: "https://hexmos.com/freedevtools/tldr/hledger/hledger-print/"
description: "Show journal entries with Hledger Print. Display transactions, control output format, and filter by criteria. Free online tool, no registration required."
category: common
keywords:
- hledger print transactions
- hledger journal entries
- hledger command line
- accounting ledger print
- financial data print
- transaction reporting
- hledger query
- hledger ledger format
- hledger export
- ledger data analysis
features:
- Display full journal entries
- Filter transactions by criteria
- Export transactions to CSV
- Convert amounts to cost
- Round amounts with decimal commas
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hledger print

> Show full journal entries, representing transactions.
> More information: <https://hledger.org/hledger.html#print>.

- Show all transactions in the default journal file:

`hledger print`

- Show transactions, with any implied amounts or costs made explicit:

`hledger print {{[-x|--explicit]}} --infer-costs`

- Show transactions from two specified files, with amounts converted to cost:

`hledger print {{[-f|--file]}} {{path/to/2023.journal}} {{[-f|--file]}} {{path/to/2024.journal}} {{[-B|--cost]}}`

- Show `$` transactions in `*food*` but not `*groceries*` accounts this month:

`hledger print cur:\\$ food not:groceries date:thismonth`

- Show transactions of amount 50 or more, with `whole foods` in their description:

`hledger print amt:'>50' desc:'whole foods'`

- Show cleared transactions, with `EUR` amounts rounded and with decimal commas:

`hledger print {{[-C|--cleared]}} --commodity '1000, EUR' --round hard`

- Write transactions from `foo.journal` as a CSV file:

`hledger print {{[-f|--file]}} {{path/to/foo.journal}} {{[-o|--output-file]}} {{path/to/output_file.csv}}`
