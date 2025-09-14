---
title: "Filter CSV Data - csvgrep | Free DevTools"
name: csvgrep
path: /freedevtools/tldr/cs/csvgrep
canonical: "https://hexmos.com/freedevtools/tldr/cs/csvgrep/"
description: "Filter CSV data with csvgrep, a command-line tool for pattern matching and data extraction. Quickly find and extract relevant information. Free online tool, no registration required."
category: common
keywords:
- CSV filter
- CSV grep
- CSV data extraction
- command line CSV tool
- CSV pattern matching
- CSV search
- CSV data filtering
- CSV row filtering
- csvgrep command
- csvkit csvgrep
features:
- Filter CSV rows based on string matches
- Filter CSV rows using regular expressions
- Invert match to exclude rows
- Select specific columns for filtering
- Extract data matching complex patterns
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# csvgrep

> Filter CSV rows with string and pattern matching.
> Included in csvkit.
> More information: <https://csvkit.readthedocs.io/en/latest/scripts/csvgrep.html>.

- Find rows that have a certain string in column 1:

`csvgrep {{[-c|--columns]}} {{1}} {{[-m|--match]}} {{string_to_match}} {{data.csv}}`

- Find rows in which columns 3 or 4 match a certain `regex`:

`csvgrep {{[-c|--columns]}} {{3,4}} {{[-r|--regex]}} {{regex}} {{data.csv}}`

- Find rows in which the "name" column does NOT include the string "John Doe":

`csvgrep {{[-i|--invert-match]}} {{[-c|--columns]}} {{name}} {{[-m|--match]}} "{{John Doe}}" {{data.csv}}`
