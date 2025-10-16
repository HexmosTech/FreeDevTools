---
title: "Search DuckDuckGo - Terminal Search | Online Free DevTools by Hexmos"
name: ddgr
path: "/freedevtools/tldr/common/ddgr/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ddgr/"
description: "Search DuckDuckGo from your terminal with ddgr. Efficiently find information and open results in your browser. Free online tool, no registration required."
category: common
keywords:
- DuckDuckGo terminal search
- command-line search engine
- terminal web search
- ddgr search tool
- linux command search
- macos command search
- command line duckduckgo
- privacy focused search
- terminal based browser
- text-based search
features:
- Perform DuckDuckGo searches from the command line
- Limit the number of search results displayed
- Open search results directly in your web browser
- Conduct website-specific searches using a filter
- Search for specific file types using keywords
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ddgr

> Search DuckDuckGo (HTML version) from the terminal.
> More information: <https://github.com/jarun/ddgr>.

- Start in interactive mode:

`ddgr`

- Search DuckDuckGo for a keyword:

`ddgr {{keyword}}`

- Limit the number of search results to `n`:

`ddgr {{[-n|--num]}} {{n}} {{keyword}}`

- Display the complete URL in search results:

`ddgr {{[-x|--expand]}} {{keyword}}`

- Search DuckDuckGo for a keyword and open the first result in the browser:

`ddgr !w {{keyword}}`

- Perform a website-specific search:

`ddgr {{[-w|--site]}} {{site}} {{keyword}}`

- Search for a specific file type:

`ddgr {{keyword}} filetype:{{filetype}}`

- Display help in interactive mode:

`<?>`
