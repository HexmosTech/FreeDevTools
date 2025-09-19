---
title: "Format JSON Table - Print JSON Data in Terminal | Online Free DevTools by Hexmos"
name: jtbl
path: /freedevtools/tldr/common/jtbl
canonical: "https://hexmos.com/freedevtools/tldr/common/jtbl/"
description: "Format JSON table data instantly with jtbl. Display JSON or JSON Lines data as a formatted table in the terminal. Free online tool, no registration required."
category: common
keywords:
- json table formatter
- json to table
- json lines to table
- command line json table
- terminal table generator
- json data formatting
- jtbl command
- linux json table
- macos json table
- json table command line
features:
- Print JSON and JSON Lines data as a table.
- Control column width for wrapping text.
- Truncate long rows instead of wrapping.
- Disable wrapping and truncation of table rows.
- Format JSON data directly from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jtbl

> Utility to print JSON and JSON Lines data as a table in the terminal.
> More information: <https://github.com/kellyjonbrazil/jtbl>.

- Print a table from JSON or JSON Lines input:

`cat {{file.json}} | jtbl`

- Print a table and specify the column width for wrapping:

`cat {{file.json}} | jtbl --cols={{width}}`

- Print a table and truncate rows instead of wrapping:

`cat {{file.json}} | jtbl {{[-t|--truncate]}}`

- Print a table and don't wrap or truncate rows:

`cat {{file.json}} | jtbl {{[-n|--no-wrap]}}`
