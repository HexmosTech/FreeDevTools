---
title: "Vgrep - Search Text with Pager | Online Free DevTools by Hexmos"
name: vgrep
path: /freedevtools/tldr/common/vgrep
canonical: "https://hexmos.com/freedevtools/tldr/common/vgrep/"
description: "Search text efficiently with Vgrep, a user-friendly pager for grep. Easily browse search results and navigate large files. Free online tool, no registration required."
category: common
keywords:
- grep pager
- command line pager
- text search tool
- grep alternative
- vgrep linux
- vgrep macos
- terminal pager
- recursive search tool
- cached grep
- command line text search
features:
- Recursively search directories for a pattern
- Cache previous search results for later use
- Open a specific match in the default editor
- Display context lines around each match
- Show match counts for each file and directory
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vgrep

> A user friendly pager for grep.
> See also: `ugrep`, `rg`.
> More information: <https://github.com/vrothberg/vgrep/blob/main/docs/vgrep.1.md>.

- Recursively search the current directory for a pattern and cache it:

`vgrep {{search_pattern}}`

- Display the contents of the cache:

`vgrep`

- Open the "4th" match from the cache in the default editor:

`vgrep {{[-s|--show]}} {{4}}`

- Display a context of "3" lines for each match in the cache:

`vgrep {{[-s|--show]}} {{[c|context]}}{{3}}`

- Display the number of matches for each directory in the tree:

`vgrep {{[-s|--show]}} {{[t|tree]}}`

- Display the number of matches for each file in the tree:

`vgrep {{[-s|--show]}} {{[f|files]}}`

- Start an interactive shell with cached matches:

`vgrep {{[-i|--interactive]}}`
