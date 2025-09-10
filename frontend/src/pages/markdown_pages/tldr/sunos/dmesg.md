---
title: dmesg
name: dmesg
path: /freedevtools/tldr/sunos/dmesg
canonical: "https://hexmos.com/freedevtools/tldr/sunos/dmesg/"
description: Write the kernel messages to stdout.
category: sunos
keywords:
- display kernel ring buffer
- system startup messages
- hardware detection information
- diagnostic message analysis
- troubleshooting system errors
- memory allocation details
- device driver initialization
- system event logging
- kernel configuration details
- examining boot process
features:
- display kernel messages
- filter messages with grep
- paginate output with less
- analyze system memory
- view hardware information
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
