---
title: "Display Disk Usage - Monitor Filesystem Space | Free DevTools"
name: dfc
path: /freedevtools/tldr/common/dfc
canonical: "https://hexmos.com/freedevtools/tldr/common/dfc/"
description: "Display disk usage information with DFC. Monitor filesystem space and analyze disk space efficiently using command-line tools. Free online tool, no registration required."
category: common
keywords:
- disk usage monitor
- filesystem space analysis
- command line disk tool
- dfc disk utility
- linux disk space
- macos disk space
- disk space visualization
- command line disk analysis
- dfc command
- terminal disk report
features:
- Display disk usage with colors and graphs
- Show all filesystems including pseudo filesystems
- Suppress color output for plain text reports
- Filter filesystems by type
- Provide human-readable output of disk space
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dfc

> Get an overview of the filesystem disk space usage with colors and graphs.
> More information: <https://github.com/Rolinh/dfc>.

- Display filesystems and their disk usage in human-readable form with colors and graphs:

`dfc`

- Display all filesystems including pseudo, duplicate and inaccessible filesystems:

`dfc -a`

- Display filesystems without color:

`dfc -c never`

- Display filesystems containing "ext" in the filesystem type:

`dfc -t ext`
