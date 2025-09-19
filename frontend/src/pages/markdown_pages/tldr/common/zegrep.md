---
title: "Zegrep - Search Compressed Files with Regex | Online Free DevTools by Hexmos"
name: zegrep
path: /freedevtools/tldr/common/zegrep
canonical: "https://hexmos.com/freedevtools/tldr/common/zegrep/"
description: "Search compressed files with Zegrep, utilizing extended regex patterns to find specific matches. Free online tool, no registration required."
category: common
keywords:
- compressed file search
- regex pattern matching
- zegrep command
- egrep for compressed files
- linux compressed file tools
- unix file searching
- extended regex search
- grep alternative
- text search compressed
- command line file search
features:
- Search compressed files using extended regular expressions.
- Perform case-insensitive searches in compressed files.
- Invert the match to find lines that do not match the pattern.
- Display file name and line number for each match.
- Print only the matched text from the compressed file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zegrep

> Find extended `regex` patterns in compressed files using `egrep`.
> More information: <https://www.unix.com/man-page/freebsd/1/zegrep/>.

- Search for extended `regex` (supporting `?`, `+`, `{}`, `()` and `|`) in a compressed file (case-sensitive):

`zegrep "{{search_pattern}}" {{path/to/file}}`

- Search for extended `regex` (supporting `?`, `+`, `{}`, `()` and `|`) in a compressed file (case-insensitive):

`zegrep {{[-i|--ignore-case]}} "{{search_pattern}}" {{path/to/file}}`

- Search for lines that do not match a pattern:

`zegrep {{[-v|--invert-match]}} "{{search_pattern}}" {{path/to/file}}`

- Print file name and line number for each match:

`zegrep {{[-H|--with-filename]}} {{[-n|--line-number]}} "{{search_pattern}}" {{path/to/file}}`

- Search for lines matching a pattern, printing only the matched text:

`zegrep {{[-o|--only-matching]}} "{{search_pattern}}" {{path/to/file}}`

- Recursively search files in a compressed file for a pattern:

`zegrep {{[-r|--recursive]}} "{{search_pattern}}" {{path/to/file}}`
