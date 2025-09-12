---
title: "Paste Tool - Merge File Lines | Free DevTools"
name: paste
path: /freedevtools/tldr/common/paste
canonical: "https://hexmos.com/freedevtools/tldr/common/paste/"
description: "Merge file lines with Paste. Combine text files, specify delimiters, and create formatted output with this versatile command-line tool. Free online tool, no registration required."
category: common
keywords:
- File line merger
- Text file combination
- Command line paste utility
- Linux paste command
- macOS paste command
- Paste with custom delimiter
- Merge files side by side
- Join lines with tab delimiter
- Paste serial merge
- Text formatting tool
features:
- Merge lines from multiple files
- Specify custom delimiters for merging
- Merge files side by side into columns
- Join all lines into a single line
- Merge files with alternating lines
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# paste

> Merge lines of files.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/paste-invocation.html>.

- Join all the lines into a single line, using TAB as delimiter:

`paste {{[-s|--serial]}} {{path/to/file}}`

- Join all the lines into a single line, using the specified delimiter:

`paste {{[-sd|--serial --delimiters]}} {{delimiter}} {{path/to/file}}`

- Merge two files side by side, each in its column, using TAB as delimiter:

`paste {{path/to/file1}} {{path/to/file2}}`

- Merge two files side by side, each in its column, using the specified delimiter:

`paste {{[-d|--delimiters]}} {{delimiter}} {{path/to/file1}} {{path/to/file2}}`

- Merge two files, with lines added alternatively:

`paste {{[-d|--delimiters]}} '\n' {{path/to/file1}} {{path/to/file2}}`
