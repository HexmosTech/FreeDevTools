---
title: "Monitor System Performance with sar | Online Free DevTools by Hexmos"
name: sar
path: /freedevtools/tldr/linux/sar
canonical: "https://hexmos.com/freedevtools/tldr/linux/sar/"
description: "Monitor Linux system performance efficiently with the sar command.  Track CPU usage, memory, I/O, and network activity. Free online tool, no registration required."
category: linux
keywords:
  - linux system monitoring
  - sar command linux
  - system performance analysis linux
  - linux resource usage
  - sar cpu monitoring
  - sar memory monitoring
  - sar network monitoring
  - sar I/O monitoring
  - linux performance metrics
  - command-line system monitoring
features:
  - Reports I/O and transfer rates for physical devices.
  - Provides detailed network device statistics.
  - Monitors CPU utilization across all cores.
  - Tracks memory utilization and paging activity.
  - Displays run queue length and load averages.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sar

> Monitor performance of various Linux subsystems.
> More information: <https://manned.org/sar>.

- Report I/O and transfer rate issued to physical devices, one per second (press `<Ctrl c>` to quit):

`sar -b {{1}}`

- Report a total of 10 network device statistics, one per 2 seconds:

`sar -n DEV {{2}} {{10}}`

- Report CPU utilization, one per 2 seconds:

`sar -u ALL {{2}}`

- Report a total of 20 memory utilization statistics, one per second:

`sar -r ALL {{1}} {{20}}`

- Report the run queue length and load averages, one per second:

`sar -q {{1}}`

- Report paging statistics, one per 5 seconds:

`sar -B {{5}}`
