---
title: "Search Files - Zfgrep String Matching | Online Free DevTools by Hexmos"
name: zfgrep
path: "/freedevtools/tldr/common/zfgrep/"
canonical: "https://hexmos.com/freedevtools/tldr/common/zfgrep/"
description: "Search strings with Zfgrep. Find exact matches in compressed or uncompressed files, offering efficient text searching. Free online tool, no registration required."
category: common
keywords:
- compressed file search
- fixed string search
- zfgrep search
- file content search
- text search linux
- linux grep alternative
- string matching tool
- grep fixed strings
- command line search tool
- search compressed files
features:
- Search for fixed strings in files
- Count matching lines in files
- Display line numbers of matches
- Invert match to exclude lines
- List filenames with matching content
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zfgrep

> Matches fixed strings in possibly compressed files.
> Equivalent to `grep --fixed-strings` with input decompressed first if necessary.
> More information: <https://manned.org/zfgrep>.

- Search for an exact string in a file:

`zfgrep {{search_string}} {{path/to/file}}`

- Count the number of lines that match the given string in a file:

`zfgrep {{[-c|--count]}} {{search_string}} {{path/to/file}}`

- Show the line number in the file along with the matching lines:

`zfgrep {{[-n|--line-number]}} {{search_string}} {{path/to/file}}`

- Display all lines except those that contain the search string:

`zfgrep {{[-v|--invert-match]}} {{search_string}} {{path/to/file}}`

- List only filenames whose content matches the search string at least once:

`zfgrep {{[-l|--files-with-matches]}} {{search_string}} {{path/to/file1 path/to/file2 ...}}`
