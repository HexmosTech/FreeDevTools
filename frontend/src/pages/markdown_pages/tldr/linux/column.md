---
title: "Format Text - Columnar Formatting | Free DevTools"
name: column
path: /freedevtools/tldr/unknown/column
canonical: "https://hexmos.com/freedevtools/tldr/unknown/column/"
description: "Format text into columns with Column command-line tool. Easily create tabular output and control text alignment for enhanced readability. Free online tool, no registration required."
category: unknown
keywords:
- text columnar formatting
- format text columns
- command-line text formatter
- linux column utility
- macos column command
- stdin text formatting
- tabular output generator
- fixed width text format
- delimited text formatter
- text alignment tool
features:
- Format stdin or files into columns
- Auto-align text in tabular format
- Specify custom column delimiters
- Fill rows before filling columns
- Control output width for text columns
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# column

> Format `stdin` or a file into multiple columns.
> Columns are filled before rows; the default separator is a whitespace.
> More information: <https://manned.org/column>.

- Format the output of a command for a 30 characters wide display:

`printf "header1 header2\nbar foo\n" | column {{[-c|--output-width]}} {{30}}`

- Split columns automatically and auto-align them in a tabular format:

`printf "header1 header2\nbar foo\n" | column {{[-t|--table]}}`

- Specify the column delimiter character for the `--table` option (e.g. "," for CSV) (defaults to whitespace):

`printf "header1,header2\nbar,foo\n" | column {{[-t|--table]}} {{[-s|--separator]}} {{,}}`

- Fill rows before filling columns:

`printf "header1\nbar\nfoobar\n" | column {{[-c|--output-width]}} {{30}} {{[-x|--fillrows]}}`
