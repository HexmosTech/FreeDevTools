---
title: "Lscpu - Display CPU Information | Online Free DevTools by Hexmos"
name: lscpu
path: /freedevtools/tldr/linux/lscpu
canonical: "https://hexmos.com/freedevtools/tldr/linux/lscpu/"
description: "Display CPU information with lscpu. Examine processor architecture, cache details, and online/offline CPU status. Free online tool, no registration required."
category: linux
keywords:
- linux cpu information
- cpu architecture details
- display cpu cores
- show lscpu output
- processor cache details
- cpu online status
- cpu offline status
- lscpu json output
- linux hardware info
- lscpu command
features:
- Display detailed CPU architecture information
- Show information about CPU caches
- List only online or offline CPUs
- Output information in JSON format
- Display information in a tabular format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lscpu

> Display information about the CPU architecture.
> More information: <https://manned.org/lscpu>.

- Display information about all CPUs:

`lscpu`

- Display information in a table:

`lscpu {{[-e|--extended]}}`

- Display only information about online CPUs in a table:

`lscpu {{[-e|--extended]}} {{[-b|--online]}}`

- Display only information about offline CPUs in a table:

`lscpu {{[-e|--extended]}} {{[-c|--offline]}}`

- Display details about CPU caches:

`lscpu {{[-C|--caches]}}`

- Display information in JSON format:

`lscpu {{[-J|--json]}}`
