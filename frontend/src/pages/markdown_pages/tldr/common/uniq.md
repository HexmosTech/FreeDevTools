---
title: "Uniq Command - Filter Unique Lines | Online Free DevTools by Hexmos"
name: uniq
path: /freedevtools/tldr/common/uniq
canonical: "https://hexmos.com/freedevtools/tldr/common/uniq/"
description: "Filter duplicate lines with Uniq Command, enabling easy data cleaning and analysis. Identify unique entries from files. Free online tool, no registration required."
category: common
keywords:
- Unique lines filter
- Uniq command
- Deduplicate text
- Remove duplicate lines
- Sort and unique
- Command line uniq
- Coreutils uniq
- Linux uniq
- macOS uniq
- Text processing
features:
- Filter unique lines from input
- Display only repeated lines
- Count occurrences of each line
- Sort lines before filtering
- Identify adjacent duplicates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uniq

> Output the unique lines from a input or file.
> Since it does not detect repeated lines unless they are adjacent, we need to sort them first.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html>.

- Display each line once:

`sort {{path/to/file}} | uniq`

- Display only unique lines:

`sort {{path/to/file}} | uniq {{[-u|--unique]}}`

- Display only duplicate lines:

`sort {{path/to/file}} | uniq {{[-d|--repeated]}}`

- Display number of occurrences of each line along with that line:

`sort {{path/to/file}} | uniq {{[-c|--count]}}`

- Display number of occurrences of each line, sorted by the most frequent:

`sort {{path/to/file}} | uniq {{[-c|--count]}} | sort {{[-nr|--numeric-sort --reverse]}}`
