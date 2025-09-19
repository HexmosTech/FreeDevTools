---
title: "Search Google - Command-Line Search | Online Free DevTools by Hexmos"
name: googler
path: /freedevtools/tldr/common/googler
canonical: "https://hexmos.com/freedevtools/tldr/common/googler/"
description: "Search Google directly from the command-line with Googler. Quickly find information and open results in your browser. Free online tool, no registration required."
category: common
keywords:
- command-line search
- google search cli
- command line google
- googler command
- terminal google search
- linux command search
- macos command search
- command line browser
- google search tool
- text-based google search
features:
- Search Google from the command line
- Open the first search result directly in your browser
- Display a specific number of search results
- Disable automatic spelling correction for precise queries
- Search a specific site using the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# googler

> Search Google from the command-line.
> More information: <https://github.com/jarun/googler>.

- Search Google for a keyword:

`googler {{keyword}}`

- Search Google and open the first result in web browser:

`googler {{[-j|--first]}} {{keyword}}`

- Show `n` search results (default: 10):

`googler {{[-n|--count]}} {{n}} {{keyword}}`

- Disable automatic spelling correction:

`googler {{[-x|--exact]}} {{keyword}}`

- Search one site for a keyword:

`googler {{[-w|--site]}} {{site}} {{keyword}}`

- Show Google search result in JSON format:

`googler --json {{keyword}}`

- Perform in-place self-upgrade:

`googler {{[-u|--upgrade]}}`

- Display help in interactive mode:

`<?>`
