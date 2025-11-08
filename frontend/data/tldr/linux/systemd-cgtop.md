---
title: "Control Groups - Monitor System Resources with systemd-cgtop | Online Free DevTools by Hexmos"
name: systemd-cgtop
path: "/freedevtools/tldr/linux/systemd-cgtop/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-cgtop/"
description: "Monitor and control system resource usage with systemd-cgtop.  View CPU, memory, and I/O load for control groups. Free online tool, no registration required."
category: linux
keywords:
  - linux systemd monitor
  - systemd control group monitor
  - cgtop resource monitoring
  - linux resource management
  - systemd process management
  - control group cpu usage
  - control group memory usage
  - systemd io monitoring
  - linux systemd cgtop
  - process resource monitoring
features:
  - Displays control group hierarchy and resource usage.
  - Sorts control groups by CPU, memory, path, tasks, or I/O.
  - Allows for customizable update intervals.
  - Shows CPU usage as percentage or absolute time.
  - Filters to display only userspace processes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-cgtop

> Show the top control groups of the local Linux control group hierarchy, ordered by their CPU, memory, or disk I/O load.
> See also: `top`.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-cgtop.html>.

- Start an interactive view:

`systemd-cgtop`

- Change the sort order:

`systemd-cgtop --order {{cpu|memory|path|tasks|io}}`

- Show the CPU usage by time instead of percentage:

`systemd-cgtop --cpu=percentage`

- Change the update interval in seconds (or one of these time units: `ms`, `us`, `min`):

`systemd-cgtop {{[-d|--delay]}} {{interval}}`

- Only count userspace processes (without kernel threads):

`systemd-cgtop -P`
