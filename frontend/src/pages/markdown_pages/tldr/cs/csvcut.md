---
title: "Extract CSV Data - Filter Columns with csvcut | Free DevTools"
name: csvcut
path: /freedevtools/tldr/cs/csvcut
canonical: "https://hexmos.com/freedevtools/tldr/cs/csvcut/"
description: "Extract CSV data efficiently with csvcut, a powerful command-line tool for filtering and truncating CSV files. Streamline data manipulation. Free online tool, no registration required."
category: common
keywords:
- CSV data extraction
- CSV column filtering
- CSV file manipulation
- csvcut command
- command-line CSV tool
- Linux CSV
- macOS CSV
- common CSV utils
- CSV data truncation
- csvkit
features:
- Extract columns by index
- Extract columns by name
- Exclude specific columns
- Filter CSV data
- Truncate CSV files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# csvcut

> Filter and truncate CSV files. Like Unix's `cut` command, but for tabular data.
> Included in csvkit.
> More information: <https://csvkit.readthedocs.io/en/latest/scripts/csvcut.html>.

- Print indices and names of all columns:

`csvcut {{[-n|--names]}} {{data.csv}}`

- Extract the first and third columns:

`csvcut {{[-c|--columns]}} {{1,3}} {{data.csv}}`

- Extract all columns except the fourth one:

`csvcut {{[-C|--not-columns]}} {{4}} {{data.csv}}`

- Extract the columns named "id" and "first name" (in that order):

`csvcut {{[-c|--columns]}} {{id,"first name"}} {{data.csv}}`
