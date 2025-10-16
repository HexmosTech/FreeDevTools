---
title: "PO Count - Get Translation Progress | Online Free DevTools by Hexmos"
name: pocount
path: "/freedevtools/tldr/common/pocount/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pocount/"
description: "Get translation progress with PO Count. Analyze translation files in various formats to determine completion status. Free online tool, no registration required."
category: common
keywords:
- PO file analysis
- Translation progress report
- Localization statistics
- Gettext translation analysis
- TS file analysis
- CSV translation export
- I18n progress tool
- L10n status command
- Translate Toolkit utility
- Linux translation count
features:
- Analyze PO file translation status
- Generate CSV translation reports
- Print a colorful table of translation progress
- Support various translation file formats (PO, TS)
- Display translation statistics on the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pocount

> Translate Toolkit utility to get translation progress from file, supporting several formats.
> More information: <https://docs.translatehouse.org/projects/translate-toolkit/en/latest/commands/pocount.html>.

- Print a colorful table with the translation progress of a file:

`pocount {{path/to/file/file.po}}`

- Print translation progress of various files, one line per file:

`pocount --short {{translation_*.ts}}`

- Generate a CSV file with the translation progress of various files:

`pocount --csv {{translation_*.ts}} > {{path/to/translation_progress.csv}}`
