---
title: "Fincore - Display Cache Memory | Online Free DevTools by Hexmos"
name: fincore
path: "/freedevtools/tldr/linux/fincore/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/fincore/"
description: "Display cache memory usage with fincore. Analyze file cache utilization and optimize memory performance on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux fincore
- file cache analysis
- memory usage display
- page cache metrics
- cache memory monitor
- disk cache utilization
- linux memory management
- fincore command line
- file system performance
- cache statistics
features:
- Display cache usage for a specified file
- Output all available data columns for detailed analysis
- Provide insights into page cache residency
- Help optimize file system performance
- Offer a command-line interface for cache monitoring
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fincore

> Display how much cache memory a file is taking.
> See also: `fadvise`.
> More information: <https://manned.org/fincore>.

- Display cache details for a file:

`fincore {{path/to/file}}`

- Display all possible data columns:

`fincore --output-all {{path/to/file}}`

- Display help:

`fincore {{[-h|--help]}}`
