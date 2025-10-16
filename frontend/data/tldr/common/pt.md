---
title: "Search Code with Platinum Searcher | Online Free DevTools by Hexmos"
name: pt
path: "/freedevtools/tldr/common/pt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pt/"
description: "Search code efficiently with Platinum Searcher. Find files and match patterns in your codebase quickly using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- code searcher
- platinum searcher
- ag alternative
- file search cli
- regex search
- code grepping
- text search command line
- linux search tool
- macos search tool
- command line search
features:
- Find files containing specific strings or regex patterns
- Display the number of matches per file
- Perform case-insensitive and whole-word searches
- Search for files with a specific extension using regex
- Limit the search depth to specific directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pt

> Platinum Searcher.
> A code search tool similar to `ag`.
> More information: <https://github.com/monochromegane/the_platinum_searcher>.

- Find files containing "foo" and print the files with highlighted matches:

`pt {{foo}}`

- Find files containing "foo" and display count of matches in each file:

`pt {{[-c|--count]}} {{foo}}`

- Find files containing "foo" as a whole word and ignore its case:

`pt {{[-wi|--word-regexp --ignore-case]}} {{foo}}`

- Find "foo" in files with a given extension using a `regex`:

`pt {{[-G|--file-search-regexp]}}='{{\.bar$}}' {{foo}}`

- Find files whose contents match the `regex`, up to 2 directories deep:

`pt --depth={{2}} -e '{{^ba[rz]*$}}'`
