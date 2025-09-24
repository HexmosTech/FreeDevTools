---
title: "Hledger Import - Import Transactions | Online Free DevTools by Hexmos"
name: hledger-import
path: /freedevtools/tldr/hledger/hledger-import
canonical: "https://hexmos.com/freedevtools/tldr/hledger/hledger-import/"
description: "Import transactions instantly with Hledger Import. Convert financial data and manage your journal. Free online tool, no registration required."
category: common
keywords:
- hledger import csv
- financial data import
- ledger transaction import
- hledger rules
- command line accounting
- transaction conversion tool
- financial statement import
- hledger catchup
- hledger dry-run
- hledger financial management
features:
- Import transactions from multiple data files
- Convert data based on predefined rules
- Simulate imports using dry-run mode
- Mark data as already imported
- Reset import status for a specific file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hledger import

> Import new transactions from one or more data files to the main journal.
> More information: <https://hledger.org/hledger.html#import>.

- Import new transactions from `bank.csv`, using `bank.csv.rules` to convert:

`hledger import {{path/to/bank.csv}}`

- Show what would be imported from these two files, without doing anything:

`hledger import {{path/to/bank1.csv}} {{path/to/bank2.csv}} --dry-run`

- Import new transactions from all CSV files, using the same rules for all:

`hledger import --rules-file {{common.rules}} *.csv`

- Show conversion errors or results while editing `bank.csv.rules`:

`watchexec -- hledger {{[-f|--file]}} {{path/to/bank.csv}} print`

- Mark `bank.csv`'s current data as seen, as if already imported:

`hledger import --catchup {{path/to/bank.csv}}`

- Mark `bank.csv` as all new, as if not yet imported:

`rm {{[-f|--force]}} .latest.bank.csv`
