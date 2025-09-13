---
title: "View Excel and CSV Files - Read Data with x_x | Free DevTools"
name: x_x
path: /freedevtools/tldr/common/x_x
canonical: "https://hexmos.com/freedevtools/tldr/common/x_x/"
description: "View Excel and CSV files easily with x_x. Read data, specify delimiters, and use headers for better data organization. Free online tool, no registration required."
category: common
keywords:
- excel viewer
- csv viewer
- data viewer
- excel reader
- csv reader
- file viewer
- data analysis
- common commands
- linux commands
- macos commands
features:
- View XLSX files
- View CSV files
- Use first row as header
- Specify custom delimiters
- Specify custom quote characters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# x_x

> View Excel and CSV files.
> More information: <https://github.com/kristianperkins/x_x>.

- View an XLSX or CSV file:

`x_x {{file.xlsx|file.csv}}`

- View an XLSX or CSV file, using the first row as table headers:

`x_x {{[-h|--heading]}} {{0}} {{file.xlsx|file.csv}}`

- View a CSV file with unconventional delimiters:

`x_x {{[-d|--delimiter]}} {{';'}} {{[-q|--quotechar]}} {{'|'}} {{file.csv}}`
