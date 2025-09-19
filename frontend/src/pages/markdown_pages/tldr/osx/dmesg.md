---
title: "Dmesg - Display Kernel Messages | Online Free DevTools by Hexmos"
name: dmesg
path: /freedevtools/tldr/osx/dmesg
canonical: "https://hexmos.com/freedevtools/tldr/osx/dmesg/"
description: "Display kernel messages with Dmesg. Diagnose hardware issues, debug kernel errors, and monitor system events on macOS. Free online tool, no registration required."
category: osx
keywords:
- kernel messages osx
- system logs macos
- diagnose hardware issues
- dmesg command mac
- view kernel events
- osx system debugging
- macos kernel logging
- system error messages
- hardware diagnostics osx
- dmesg alternative mac
features:
- Show kernel messages in real time
- Filter kernel messages using grep
- Display available physical memory
- Page through kernel messages using less
- Diagnose hardware-related kernel errors
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dmesg

> Write the kernel messages to `stdout`.
> More information: <https://keith.github.io/xcode-man-pages/dmesg.8.html>.

- Show kernel messages:

`dmesg`

- Show how much physical memory is available on this system:

`dmesg | grep -i memory`

- Show kernel messages 1 page at a time:

`dmesg | less`
