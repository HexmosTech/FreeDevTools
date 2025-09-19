---
title: "Display Kernel Messages - Analyze System Startup | Online Free DevTools by Hexmos"
name: dmesg
path: /freedevtools/tldr/sunos/dmesg
canonical: "https://hexmos.com/freedevtools/tldr/sunos/dmesg/"
description: "Display kernel messages with dmesg. Analyze system startup, detect hardware, and troubleshoot errors on SunOS. Free online tool, no registration required."
category: sunos
keywords:
  - kernel message analyzer
  - sunos diagnostic tool
  - system startup debugging
  - hardware detection information
  - memory allocation details
  - device driver initialization
  - system event logging
  - kernel configuration analysis
  - sunos boot process examiner
  - dmesg command for sunos
features:
  - Display kernel messages to stdout
  - Filter kernel messages using grep
  - Paginate kernel output with less
  - Analyze system memory information
  - View hardware detection details
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dmesg

> Write the kernel messages to `stdout`.
> More information: <https://www.unix.com/man-page/sunos/1m/dmesg>.

- Show kernel messages:

`dmesg`

- Show how much physical memory is available on this system:

`dmesg | grep -i memory`

- Show kernel messages 1 page at a time:

`dmesg | less`
