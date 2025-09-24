---
title: "Control Processes - htop Process Viewer | Online Free DevTools by Hexmos"
name: htop
path: /freedevtools/tldr/common/htop
canonical: "https://hexmos.com/freedevtools/tldr/common/htop/"
description: "Control system processes with htop process viewer. Monitor CPU usage and memory consumption with ease. Free online tool, no registration required."
category: common
keywords:
- process monitor
- system process viewer
- htop linux
- htop macos
- htop command line
- process activity manager
- cpu usage monitor
- memory usage monitor
- process tree viewer
- real time process info
features:
- Display real-time process information
- Filter processes by username
- Visualize process hierarchy in tree view
- Sort processes by various metrics
- Adjust update delay for monitoring frequency
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# htop

> Display dynamic real-time information about running processes. An enhanced version of `top`.
> More information: <https://manned.org/htop>.

- Start `htop`:

`htop`

- Start `htop` displaying processes owned by a specific user:

`htop {{[-u|--user]}} {{username}}`

- Display processes hierarchically in a tree view to show the parent-child relationships:

`htop {{[-t|--tree]}}`

- Sort processes by a specified `sort_item` (use `htop --sort help` for available options):

`htop {{[-s|--sort]}} {{sort_item}}`

- Start `htop` with the specified delay between updates, in tenths of a second (i.e. 50 = 5 seconds):

`htop {{[-d|--delay]}} {{50}}`

- See interactive commands while running htop:

`<?>`

- Switch to a different tab:

`<Tab>`

- Display help:

`htop {{[-h|--help]}}`
