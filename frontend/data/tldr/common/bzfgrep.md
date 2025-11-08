---
title: "Bzfgrep Search - Find Strings in bzip2 Files | Online Free DevTools by Hexmos"
name: bzfgrep
path: "/freedevtools/tldr/common/bzfgrep/"
canonical: "https://hexmos.com/freedevtools/tldr/common/bzfgrep/"
description: "Find strings within bzip2 compressed files with Bzfgrep, quickly locating specific content. An efficient command-line search tool. Free online tool, no registration required."
category: common
keywords:
- bzip2 search tool
- compressed file grep
- command line string finder
- bzip2 text search
- linux bzfgrep command
- bz2 file content finder
- bzip2 archive search
- grep bzip2 data
- find text in bz2
- bzip2 regex search
features:
- Search for strings within bzip2 compressed files
- Ignore case during the string search
- Invert the match to find non-matching lines
- Print the filename and line number of each match
- Recursively search bzip2 compressed tar archives
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bzfgrep

> Find any fixed strings separated by new lines in `bzip2` compressed files using `fgrep`.
> More information: <https://manned.org/bzfgrep>.

- Search for lines matching the list of search strings separated by new lines in a compressed file (case-sensitive):

`bzfgrep "{{search_string}}" {{path/to/file}}`

- Search for lines matching the list of search strings separated by new lines in a compressed file (case-insensitive):

`bzfgrep {{[-i|--ignore-case]}} "{{search_string}}" {{path/to/file}}`

- Search for lines that do not match the list of search strings separated by new lines in a compressed file:

`bzfgrep {{[-v|--invert-match]}} "{{search_string}}" {{path/to/file}}`

- Print file name and line number for each match:

`bzfgrep {{[-H|--with-filename]}} {{[-n|--line-number]}} "{{search_string}}" {{path/to/file}}`

- Search for lines matching a pattern, printing only the matched text:

`bzfgrep {{[-o|--only-matching]}} "{{search_string}}" {{path/to/file}}`

- Recursively search files in a bzip2 compressed tar archive for the given list of strings:

`bzfgrep {{[-r|--recursive]}} "{{search_string}}" {{path/to/file}}`
