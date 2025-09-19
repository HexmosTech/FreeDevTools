---
title: "Search Files with rgrep - Find Patterns Recursively | Online Free DevTools by Hexmos"
name: rgrep
path: /freedevtools/tldr/common/rgrep
canonical: "https://hexmos.com/freedevtools/tldr/common/rgrep/"
description: "Search files with rgrep command across directories. Find patterns, regular expressions, and exact strings recursively. Free online tool, no registration required."
category: common
keywords:
- recursive file search
- grep command line
- regex file finder
- directory pattern search
- linux grep recursive
- macos rgrep command
- file content search
- text pattern locator
- search files with regex
- find files by content
features:
- Recursively search for patterns in files
- Perform case-insensitive file searches
- Search using extended regular expressions
- Find exact strings in files
- Search specific directories or files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rgrep

> Recursively find patterns in files using `regex`.
> Equivalent to `grep -r`.
> More information: <https://www.gnu.org/software/grep/manual/grep.html#Command_002dline-Options>.

- Recursively search for a pattern in the current working directory:

`rgrep "{{search_pattern}}"`

- Recursively search for a case-insensitive pattern in the current working directory:

`rgrep {{[-i|--ignore-case]}} "{{search_pattern}}"`

- Recursively search for an extended `regex` pattern (supports `?`, `+`, `{}`, `()` and `|`) in the current working directory:

`rgrep {{[-E|--extended-regexp]}} "{{search_pattern}}"`

- Recursively search for an exact string (disables `regex`) in the current working directory:

`rgrep {{[-F|--fixed-strings]}} "{{exact_string}}"`

- Recursively search for a pattern in a specified directory (or file):

`rgrep "{{search_pattern}}" {{path/to/file_or_directory}}`
