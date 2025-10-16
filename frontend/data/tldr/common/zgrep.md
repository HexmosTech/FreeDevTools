---
title: "Zgrep - Search Compressed Files | Online Free DevTools by Hexmos"
name: zgrep
path: "/freedevtools/tldr/common/zgrep/"
canonical: "https://hexmos.com/freedevtools/tldr/common/zgrep/"
description: "Search compressed files effortlessly with Zgrep. Extract text patterns and analyze data within gz files, a powerful command line utility. Free online tool, no registration required."
category: common
keywords:
- compressed file search
- zgrep command
- grep compressed files
- gz file search
- linux zgrep
- command line text search
- compressed data analysis
- regular expression search
- grep multiple patterns
- text extraction from gz
features:
- Search text within compressed files.
- Support case-insensitive searches.
- Count lines matching a pattern.
- Invert the search to find non-matching lines.
- Search for multiple patterns simultaneously.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zgrep

> Grep text patterns from files within compressed file (equivalent to `grep -Z`).
> More information: <https://manned.org/zgrep>.

- Grep a pattern in a compressed file (case-sensitive):

`zgrep {{pattern}} {{path/to/compressed/file}}`

- Grep a pattern in a compressed file (case-insensitive):

`zgrep {{[-i|--ignore-case]}} {{pattern}} {{path/to/compressed/file}}`

- Output count of lines containing matched pattern in a compressed file:

`zgrep {{[-c|--count]}} {{pattern}} {{path/to/compressed/file}}`

- Display the lines which don't have the pattern present (Invert the search function):

`zgrep {{[-v|--invert-match]}} {{pattern}} {{path/to/compressed/file}}`

- Grep a compressed file for multiple patterns:

`zgrep {{[-e|--regexp]}} "{{pattern_1}}" {{[-e|--regexp]}} "{{pattern_2}}" {{path/to/compressed/file}}`

- Use extended `regex` (supporting `?`, `+`, `{}`, `()` and `|`):

`zgrep {{[-E|--extended-regexp]}} {{regex}} {{path/to/file}}`

- Print 3 lines of [C]ontext around, [B]efore, or [A]fter each match:

`zgrep --{{context|before-context|after-context}} 3 {{pattern}} {{path/to/compressed/file}}`
