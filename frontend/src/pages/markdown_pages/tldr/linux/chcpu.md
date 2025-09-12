---
title: "CHCPU - Control CPU States on Linux | Free DevTools"
name: chcpu
path: /freedevtools/tldr/linux/chcpu
canonical: "https://hexmos.com/freedevtools/tldr/linux/chcpu/"
description: "Control CPU states on Linux with CHCPU. Enable, disable, and manage CPU cores efficiently using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
- Linux CPU control
- CHCPU enable CPU
- CHCPU disable CPU
- Linux CPU management
- CPU core state
- Linux system administration
- Command line CPU utility
- CHCPU command example
- CPU core activation
- CPU core deactivation
features:
- Enable specific CPU cores
- Disable specific CPU cores
- Manage CPU core ranges
- Control CPU activation states
- Modify CPU states from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chcpu

> Enable/disable a system's CPUs.
> More information: <https://manned.org/chcpu>.

- Disable one or more CPUs by their IDs:

`chcpu {{[-d|--disable]}} {{1,3}}`

- Enable one or more ranges of CPUs by their IDs:

`chcpu {{[-e|--enable]}} {{1-3,5-7}}`
