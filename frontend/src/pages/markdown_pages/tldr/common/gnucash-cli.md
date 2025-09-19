---
title: "Generate Financial Reports - GnuCash-cli | Online Free DevTools by Hexmos"
name: gnucash-cli
path: /freedevtools/tldr/common/gnucash-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/gnucash-cli/"
description: "Generate financial reports with GnuCash-cli. Analyze finances and get stock quotes using command line interface. Free online tool, no registration required."
category: common
keywords:
- GnuCash financial reports
- GnuCash stock quotes
- command line finance
- gnucash-cli report generator
- financial data analysis
- GnuCash currency quotes
- command-line accounting
- ledger report generation
- GnuCash automation
- accounting command line tool
features:
- Generate balance sheet reports from GnuCash files
- Fetch real-time stock and currency quotes
- Automate financial reporting tasks
- Process financial data from the command line
- Extract specific financial information programmatically
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gnucash-cli

> A command-line version of GnuCash.
> More information: <https://gnucash.org/viewdoc.phtml?rev=5&lang=C&doc=help>.

- Get quotes for currencies and stocks specified in a file and print them:

`gnucash-cli {{[-Q|--quotes]}} get {{path/to/file.gnucash}}`

- Generate a financial report of a specific type, specified by `--name`:

`gnucash-cli --report run --name "{{Balance Sheet}}" {{path/to/file.gnucash}}`
