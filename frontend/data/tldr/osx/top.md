---
title: "Control Processes - Top Command Utility | Online Free DevTools by Hexmos"
name: top
path: "/freedevtools/tldr/osx/top/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/top/"
description: "Control running processes with the Top Command utility. Monitor CPU usage, memory consumption, and system performance on macOS. Free online tool, no registration required."
category: osx
keywords:
- osx process monitor
- macos system monitor
- command line process viewer
- terminal task manager
- top command osx
- process id sorting
- cpu usage analysis
- memory usage analysis
- system performance analysis
- osx activity monitor
features:
- Display dynamic real-time process information
- Sort processes by CPU usage
- Sort processes by memory usage
- Filter processes by user
- Display interactive help commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# top

> Display dynamic real-time information about running processes.
> More information: <https://keith.github.io/xcode-man-pages/top.1.html>.

- Start `top`, all options are available in the interface:

`top`

- Start `top` sorting processes by internal memory size (default order - process ID):

`top -o mem`

- Start `top` sorting processes first by CPU, then by running time:

`top -o cpu -O time`

- Start `top` displaying only processes owned by given user:

`top -user {{user_name}}`

- Display help about interactive commands:

`<?>`
