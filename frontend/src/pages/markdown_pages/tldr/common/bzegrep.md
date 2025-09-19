---
title: "BZEgrep - Search Compressed Files with Regex | Online Free DevTools by Hexmos"
name: bzegrep
path: /freedevtools/tldr/common/bzegrep
canonical: "https://hexmos.com/freedevtools/tldr/common/bzegrep/"
description: "Search compressed files with BZEgrep, find extended regex patterns in bzip2 archives. Efficient file searching without unzipping. Free online tool, no registration required."
category: common
keywords:
- bzip2 search
- compressed file grep
- regex search bzip2
- bzegrep regex search
- linux bzip2 grep
- bzip2 archive search
- file search utility
- command line grep
- text search bzip2
- compressed text search
features:
- Search compressed bzip2 files
- Find extended regex patterns
- Perform case-insensitive searches
- Invert match results
- Recursively search compressed tar archives
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bzegrep

> Find extended `regex` patterns in `bzip2` compressed files using `egrep`.
> More information: <https://manned.org/bzegrep>.

- Search for extended `regex` (supporting `?`, `+`, `{}`, `()` and `|`) in a compressed file (case-sensitive):

`bzegrep "{{search_pattern}}" {{path/to/file}}`

- Search for extended `regex` (supporting `?`, `+`, `{}`, `()` and `|`) in a compressed file (case-insensitive):

`bzegrep {{[-i|--ignore-case]}} "{{search_pattern}}" {{path/to/file}}`

- Search for lines that do not match a pattern:

`bzegrep {{[-v|--invert-match]}} "{{search_pattern}}" {{path/to/file}}`

- Print file name and line number for each match:

`bzegrep {{[-H|--with-filename]}} {{[-n|--line-number]}} "{{search_pattern}}" {{path/to/file}}`

- Search for lines matching a pattern, printing only the matched text:

`bzegrep {{[-o|--only-matching]}} "{{search_pattern}}" {{path/to/file}}`

- Recursively search files in a bzip2 compressed tar archive for a pattern:

`bzegrep {{[-r|--recursive]}} "{{search_pattern}}" {{path/to/file}}`
