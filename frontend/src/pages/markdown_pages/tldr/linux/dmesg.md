---
title: "View Kernel Messages - dmesg Command | Online Free DevTools by Hexmos"
name: dmesg
path: /freedevtools/tldr/linux/dmesg
canonical: "https://hexmos.com/freedevtools/tldr/linux/dmesg/"
description: "View and analyze Linux kernel messages with the dmesg command.  Inspect system logs, troubleshoot errors, and monitor memory usage easily. Free online tool, no registration required."
category: linux
keywords:
  - linux kernel messages
  - dmesg command linux
  - system log viewer linux
  - kernel log analysis
  - linux system monitoring
  - dmesg troubleshooting
  - linux error logs
  - memory usage dmesg
  - real-time kernel logs
  - linux command line tools
features:
  - Display real-time kernel messages
  - Filter kernel messages by level (e.g., errors)
  - View kernel messages with timestamps
  - Display memory usage information
  - Output messages in human-readable format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dmesg

> Write the kernel messages to `stdout`.
> More information: <https://manned.org/dmesg>.

- Show kernel messages:

`sudo dmesg`

- Show kernel error messages:

`sudo dmesg {{[-l|--level]}} err`

- Show kernel messages and keep [w]aiting for new ones, similar to `tail --follow` (available in kernels 3.5.0 and newer):

`sudo dmesg {{[-w|--follow]}}`

- Show how much physical memory is available on this system:

`sudo dmesg | grep {{[-i|--ignore-case]}} memory`

- Show kernel messages 1 page at a time:

`sudo dmesg | less`

- Show kernel messages with a timestamp (available in kernels 3.5.0 and newer):

`sudo dmesg {{[-T|--ctime]}}`

- Show kernel messages in human-readable form (available in kernels 3.5.0 and newer):

`sudo dmesg {{[-H|--human]}}`

- Colorize output (available in kernels 3.5.0 and newer):

`sudo dmesg {{[-L|--color]}}`
