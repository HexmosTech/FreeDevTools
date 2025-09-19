---
title: "Balooctl - Control KDE File Indexing | Online Free DevTools by Hexmos"
name: balooctl
path: /freedevtools/tldr/linux/balooctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/balooctl/"
description: "Control KDE file indexing with Balooctl. Manage index status, purge databases, and suspend/resume indexing. Free online tool, no registration required."
category: linux
keywords:
- linux file indexing
- kde plasma file indexing
- balooctl control
- file index management
- baloo search framework
- linux search tool
- balooctl purge database
- balooctl suspend indexing
- linux command line file index
- kde file system tools
features:
- Display the status of the file indexer
- Enable or disable the file indexer
- Clean the index database
- Suspend and resume file indexing
- Check for and index unindexed files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# balooctl

> File indexing and searching framework for KDE Plasma.
> More information: <https://wiki.archlinux.org/index.php/Baloo>.

- Display the status of the indexer:

`balooctl status`

- Enable/Disable the file indexer:

`balooctl {{enable|disable}}`

- Clean the index database:

`balooctl purge`

- Suspend the file indexer:

`balooctl suspend`

- Resume the file indexer:

`balooctl resume`

- Display the disk space used by Baloo:

`balooctl indexSize`

- Check for any unindexed files and index them:

`balooctl check`

- Display help:

`balooctl {{[-h|--help]}}`
