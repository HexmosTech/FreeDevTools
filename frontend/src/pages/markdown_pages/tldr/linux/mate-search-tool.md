---
title: "Search Files - Find Files with MATE Search Tool | Free DevTools"
name: mate-search-tool
path: /freedevtools/tldr/unknown/mate-search-tool
canonical: "https://hexmos.com/freedevtools/tldr/unknown/mate-search-tool/"
description: "Find files efficiently with MATE Search Tool. Locate documents and directories using name, regex, and other filters. Free online tool, no registration required."
category: unknown
keywords:
- mate search files
- linux find files
- desktop file search
- file name search
- regex file search
- mate desktop environment
- search tool linux
- file discovery linux
- file locator mate
- mate file explorer
features:
- Search files by name.
- Search files using regular expressions.
- Sort search results by name, folder, size, type, or date.
- Search files owned by a specific user or group.
- Search files in a specified directory.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mate-search-tool

> Search files in MATE desktop environment.
> More information: <https://manned.org/mate-search-tool>.

- Search files containing a specific string in their name in a specific directory:

`mate-search-tool --named={{string}} --path={{path/to/directory}}`

- Search files without waiting a user confirmation:

`mate-search-tool --start --named={{string}} --path={{path/to/directory}}`

- Search files with name matching a specific `regex`:

`mate-search-tool --start --regex={{string}} --path={{path/to/directory}}`

- Set a sorting order in search results:

`mate-search-tool --start --named={{string}} --path={{path/to/directory}} --sortby={{name|folder|size|type|date}}`

- Set a descending sorting order:

`mate-search-tool --start --named={{string}} --path={{path/to/directory}} --descending`

- Search files owned by a specific user/group:

`mate-search-tool --start --{{user|group}}={{value}} --path={{path/to/directory}}`
