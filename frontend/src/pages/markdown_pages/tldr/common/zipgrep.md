---
title: "Zipgrep - Search Zip Files with Regex | Free DevTools"
name: zipgrep
path: /freedevtools/tldr/common/zipgrep
canonical: "https://hexmos.com/freedevtools/tldr/common/zipgrep/"
description: "Search Zip files effectively with Zipgrep, using regex patterns for precise matching. Extract specific data from archives. Free online tool, no registration required."
category: common
keywords:
- zip file search
- zipgrep regex search
- command line zipgrep
- zip archive pattern matching
- linux zipgrep
- macos zipgrep
- common commands zipgrep
- find text in zip files
- zip file content extraction
- grep zip archive
features:
- Search for patterns within Zip archives using regular expressions.
- Print file names and line numbers for each match.
- Search for lines that do not match a specified pattern.
- Specify individual files inside a Zip archive for searching.
- Exclude specified files inside a Zip archive from the search.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zipgrep

> Find patterns in files in a Zip archive using extended `regex` (supports `?`, `+`, `{}`, `()` and `|`).
> More information: <https://manned.org/zipgrep>.

- Search for a pattern within a Zip archive:

`zipgrep "{{search_pattern}}" {{path/to/file.zip}}`

- Print file name and line number for each match:

`zipgrep {{[-H|--with-filename]}} {{[-n|--line-number]}} "{{search_pattern}}" {{path/to/file.zip}}`

- Search for lines that do not match a pattern:

`zipgrep {{[-v|--invert-match]}} "{{search_pattern}}" {{path/to/file.zip}}`

- Specify files inside a Zip archive from search:

`zipgrep "{{search_pattern}}" {{path/to/file.zip}} {{file/to/search1}} {{file/to/search2}}`

- Exclude files inside a Zip archive from search:

`zipgrep "{{search_pattern}}" {{path/to/file.zip}} {{[-x|--line-regexp]}} {{file/to/exclude1}} {{file/to/exclude2}}`
