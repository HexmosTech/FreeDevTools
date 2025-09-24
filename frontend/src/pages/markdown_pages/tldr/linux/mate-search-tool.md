---
title: "MATE Search Tool - Find Files on Linux | Online Free DevTools by Hexmos"
name: mate-search-tool
path: /freedevtools/tldr/linux/mate-search-tool
canonical: "https://hexmos.com/freedevtools/tldr/linux/mate-search-tool/"
description: "Find files quickly with MATE Search Tool on Linux.  Locate documents and directories using name, regex, and other filters. Free online tool, no registration required."
category: linux
keywords:
  - mate search linux
  - linux file search mate
  - mate file finder
  - regex file search linux
  - linux file location
  - desktop file search linux
  - mate search command
  - find files mate desktop
  - linux file discovery tool
  - advanced file search linux
features:
  - Search files by name or regular expression.
  - Filter search results by file type, size, date, and ownership.
  - Specify search directory for targeted file location.
  - Sort search results by name, size, type, date, or folder.
  - Initiate searches without user confirmation for automated processes.
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
