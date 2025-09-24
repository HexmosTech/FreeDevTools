---
title: "Visualize Disk Usage - Inspect Files with Duc | Online Free DevTools by Hexmos"
name: duc
path: /freedevtools/tldr/common/duc
canonical: "https://hexmos.com/freedevtools/tldr/common/duc/"
description: "Visualize disk usage with Duc. Index, inspect, and graph directory sizes to analyze file system space. Free online tool, no registration required."
category: common
keywords:
- disk usage analyzer
- directory size scanner
- file system visualization
- disk space inspector
- duc disk usage
- linux disk analyzer
- command line disk usage
- file size graph
- directory indexing tool
- storage space analysis
features:
- Index file system directory sizes for quick analysis
- Generate interactive graphs of disk space usage
- Explore file systems via console and graphical interfaces
- Analyze disk usage from the command line
- Dump database info for detailed file system inspection
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# duc

> A collection of tools for indexing, inspecting, and visualizing disk usage.
> Duc maintains a database of accumulated sizes of directories of the file system, allowing queries in this database, or creating fancy graphs to show where data is.
> More information: <http://duc.zevv.nl>.

- Index the `/usr` directory, writing to the default database location `~/.duc.db`:

`duc index {{/usr}}`

- List all files and directories under `/usr/local`, showing relative file sizes in a graph:

`duc ls {{[-Fg|--classify --graph]}} {{/usr/local}}`

- List all files and directories under `/usr/local` using treeview recursively:

`duc ls {{[-Fg|--classify --graph]}} {{[-R|--recursive]}} {{/usr/local}}`

- Start the graphical interface to explore the file system using sunburst graphs:

`duc gui {{/usr}}`

- Run the ncurses console interface to explore the file system:

`duc ui {{/usr}}`

- Dump database info:

`duc info`
