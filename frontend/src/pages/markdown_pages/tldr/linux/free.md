---
title: "Memory Monitor - Display System Memory Usage | Online Free DevTools by Hexmos"
name: free
path: /freedevtools/tldr/linux/free
canonical: "https://hexmos.com/freedevtools/tldr/linux/free/"
description: "Monitor system memory usage with the free command.  View free and used RAM,  easily check memory statistics in various units. Free online tool, no registration required."
category: linux
keywords:
  - memory monitor command
  - system memory usage command
  - ram usage command line
  - free memory checker
  - linux memory command
  - unix memory command
  - memory statistics command
  - display memory usage
  - check system memory
  - command line memory info
features:
  - Displays total, used, and free memory.
  - Shows memory usage in various units (bytes, KB, MB, GB).
  - Provides human-readable output for easy understanding.
  - Offers real-time monitoring with the -s option.
  - Supports various operating systems including Linux and Unix-like systems.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# free

> Display amount of free and used memory in the system.
> More information: <https://manned.org/free>.

- Display system memory:

`free`

- Display memory in Bytes/KB/MB/GB:

`free -{{b|k|m|g}}`

- Display memory in human-readable units:

`free {{[-h|--human]}}`

- Refresh the output every 2 seconds:

`free {{[-s|--seconds]}} 2`
