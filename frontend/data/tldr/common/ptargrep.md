---
title: "Search Tar Archives - Find Regex Patterns | Online Free DevTools by Hexmos"
name: ptargrep
path: "/freedevtools/tldr/common/ptargrep/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ptargrep/"
description: "Search Tar archives with ptargrep. Find regex patterns in tar files for efficient code analysis and data extraction. Free online tool, no registration required."
category: common
keywords:
- tar archive search
- regex pattern finder
- tar file grep
- linux archive search
- command line tar grep
- tar archive regex
- file archive search
- data extraction tool
- pattern matching tar
- archive analysis
features:
- Search for patterns within tar archive files
- Extract matched content from archives based on filename
- Perform case-insensitive searches within archives
- Support multiple archive files simultaneously
- Find specific text or code within archived files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ptargrep

> Find `regex` patterns in tar archive files.
> More information: <https://manned.org/ptargrep>.

- Search for a pattern within one or more tar archives:

`ptargrep "{{search_pattern}}" {{path/to/file1 path/to/file2 ...}}`

- Extract to the current directory using the basename of the file from the archive:

`ptargrep {{[-b|--basename]}} "{{search_pattern}}" {{path/to/file}}`

- Search for a case-insensitive pattern matching within a tar archive:

`ptargrep {{[-i|--ignore-case]}} "{{search_pattern}}" {{path/to/file}}`
