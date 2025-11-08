---
title: "Web Search - Query Websites from Terminal | Online Free DevTools by Hexmos"
name: s
path: "/freedevtools/tldr/common/s/"
canonical: "https://hexmos.com/freedevtools/tldr/common/s/"
description: "Web search directly from your terminal with 's'. Quickly search Google and other providers using command line. Free online tool, no registration required."
category: common
keywords:
- command line web search
- terminal web search
- google search terminal
- command line search tool
- web search CLI
- linux web search
- macos web search
- search provider selection
- custom search binary
- command line browser
features:
- Search the web from the terminal
- Specify a custom search provider
- Utilize a custom binary for search queries
- List available search providers
- Easily integrate with shell scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# s

> Web search from the terminal.
> More information: <https://github.com/zquestz/s>.

- Search for a query on Google (default provider):

`s {{query}}`

- List all providers:

`s {{[-l|--list-providers]}}`

- Search for a query with a given provider:

`s {{[-p|--provider]}} {{provider}} {{query}}`

- Use a specified binary to perform the search query:

`s {{[-b|--binary]}} "{{binary}} {{arguments}}" {{query}}`
