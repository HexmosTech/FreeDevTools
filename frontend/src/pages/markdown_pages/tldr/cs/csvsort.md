---
title: "Sort CSV Files - Control CSV Sorting with csvsort | Online Free DevTools by Hexmos"
name: csvsort
path: /freedevtools/tldr/cs/csvsort
canonical: "https://hexmos.com/freedevtools/tldr/cs/csvsort/"
description: "Control CSV sorting with csvsort. Sort data, reorder columns, and refine CSV files. Free online tool, no registration required."
category: common
keywords:
- csv sort
- csv sorting tool
- sort csv data
- sort csv columns
- csvkit csvsort
- command line csv sort
- linux csv sort
- macos csv sort
- sort comma separated values
- csv data manipulation
features:
- Sort CSV files by specified columns
- Sort in ascending or descending order
- Sort without inferring data types
- Sort based on multiple columns
- Reorder CSV columns using command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# csvsort

> Sort CSV files.
> Included in csvkit.
> More information: <https://csvkit.readthedocs.io/en/latest/scripts/csvsort.html>.

- Sort a CSV file by column 9:

`csvsort {{[-c|--columns]}} {{9}} {{data.csv}}`

- Sort a CSV file by the "name" column in descending order:

`csvsort {{[-r|--reverse]}} {{[-c|--columns]}} {{name}} {{data.csv}}`

- Sort a CSV file by column 2, then by column 4:

`csvsort {{[-c|--columns]}} {{2,4}} {{data.csv}}`

- Sort a CSV file without inferring data types:

`csvsort {{[-I|--no-inference]}} {{[-c|--columns]}} {{columns}} {{data.csv}}`
