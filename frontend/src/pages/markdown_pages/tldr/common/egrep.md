---
title: "Egrep Search - Find Text Patterns with Regex | Free DevTools"
name: egrep
path: /freedevtools/tldr/common/egrep
canonical: "https://hexmos.com/freedevtools/tldr/common/egrep/"
description: "Search text patterns quickly with Egrep. Use extended regular expressions to find strings in files and directories. Free online tool, no registration required."
category: common
keywords:
- regex search linux
- text pattern search egrep
- file grep linux
- recursive grep command
- linux command line search
- grep regex examples
- egrep file search
- command line text search
- pattern matching tool
- extended regex search
features:
- Search files for patterns using extended regular expressions
- Recursively search directories for matching patterns
- Invert search to find lines that do not match
- Display filename and line number for each match
- Search standard input (stdin) for patterns
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# egrep

> Find patterns in files using extended `regex` (supports `?`, `+`, `{}`, `()`, and `|`).
> More information: <https://manned.org/egrep>.

- Search for a pattern within a file:

`egrep "{{search_pattern}}" {{path/to/file}}`

- Search for a pattern within multiple files:

`egrep "{{search_pattern}}" {{path/to/file1 path/to/file2 ...}}`

- Search `stdin` for a pattern:

`cat {{path/to/file}} | egrep {{search_pattern}}`

- Print file name and line number for each match:

`egrep {{[-H|--with-filename]}} {{[-n|--line-number]}} "{{search_pattern}}" {{path/to/file}}`

- Search for a pattern in all files recursively in a directory, ignoring binary files:

`egrep {{[-r|--recursive]}} --binary-files={{without-match}} "{{search_pattern}}" {{path/to/directory}}`

- Search for lines that do not match a pattern:

`egrep {{[-v|--invert-match]}} "{{search_pattern}}" {{path/to/file}}`
