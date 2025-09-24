---
title: "pmap Memory Map - Inspect Process Memory | Online Free DevTools by Hexmos"
name: pmap
path: /freedevtools/tldr/linux/pmap
canonical: "https://hexmos.com/freedevtools/tldr/linux/pmap/"
description: "Inspect process memory maps with pmap.  View memory usage details for specific processes or ranges. Free online tool, no registration required."
category: linux
keywords:
  - process memory map
  - pmap command
  - linux process memory
  - memory usage analysis
  - system memory inspection
  - process memory viewer
  - command-line memory tool
  - memory address range
  - extended process memory
  - process id memory
features:
  - Displays detailed memory map of processes.
  - Shows memory usage by address range.
  - Supports extended and device format outputs.
  - Allows specifying process IDs for targeted analysis.
  - Handles multiple process memory map requests simultaneously.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pmap

> Report memory map of a process or processes.
> More information: <https://manned.org/pmap>.

- Print memory map for a specific process ID (PID):

`pmap {{pid}}`

- Show the extended format:

`pmap --extended {{pid}}`

- Show the device format:

`pmap --device {{pid}}`

- Limit results to a memory address range specified by `low` and `high`:

`pmap --range {{low}},{{high}}`

- Print memory maps for multiple processes:

`pmap {{pid1 pid2 ...}}`
