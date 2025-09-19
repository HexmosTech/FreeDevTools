---
title: "Search Files with Ag - Fast Code Search | Online Free DevTools by Hexmos"
name: ag
path: /freedevtools/tldr/common/ag
canonical: "https://hexmos.com/freedevtools/tldr/common/ag/"
description: "Search files quickly with Ag, the Silver Searcher. Find code efficiently across directories with advanced regex and filename pattern matching. Free online tool, no registration required."
category: common
keywords:
- code search
- file search
- silver searcher
- ag command
- regex search
- filename search
- ack alternative
- command line search
- linux search
- macos search
features:
- Recursively search directories for matching files
- Filter search by filename patterns
- Search case-insensitively
- Output only the matching part of the line
- Utilize regex for content matching
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ag

> The Silver Searcher. Like `ack`, but aims to be faster.
> More information: <https://manned.org/ag>.

- Find files containing "foo", and print the line matches in context:

`ag foo`

- Find files containing "foo" in a specific directory:

`ag foo {{path/to/directory}}`

- Find files containing "foo", but only list the filenames:

`ag {{[-l|--files-with-matches]}} foo`

- Find files containing "FOO" case-insensitively, and print only the match, rather than the whole line:

`ag {{[-i|--ignore-case]}} {{[-o|--only-matching]}} FOO`

- Find "foo" in files with a name matching "bar":

`ag foo {{[-G|--file-search-regex]}} bar`

- Find files whose contents match a `regex`:

`ag '{{^ba(r|z)$}}'`

- Find files with a name matching "foo":

`ag {{[-g|--filename-pattern]}} foo`
