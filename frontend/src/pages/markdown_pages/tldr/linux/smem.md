---
title: "smem Memory Usage - Monitor System Processes | Free DevTools"
name: smem
path: /freedevtools/tldr/linux/smem
canonical: "https://hexmos.com/freedevtools/tldr/linux/smem/"
description: "Monitor system memory usage with smem.  View process memory consumption per user, filter by username, and analyze system memory information. Free online tool, no registration required."
category: linux
keywords:
  - memory usage monitor
  - system process monitor
  - linux memory monitor
  - process memory analysis
  - smem command
  - command-line memory tool
  - memory usage analyzer
  - system resource monitor
  - process memory details
  - memory management command
features:
  - Displays memory usage of running processes.
  - Shows memory usage per user on the system.
  - Allows filtering processes by specific usernames.
  - Provides detailed system memory information.
  - Offers a command-line interface for easy usage.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# smem

> Print memory usage for programs.
> More information: <https://manned.org/smem>.

- Print memory usage for current processes:

`smem`

- Print memory usage for current processes for a every user on a system:

`smem --users`

- Print memory usage for current processes for a specified user:

`smem --userfilter {{username}}`

- Print system memory information:

`smem --system`
