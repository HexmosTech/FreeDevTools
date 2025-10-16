---
title: "Control System Stats - Monitor Linux with nmon | Online Free DevTools by Hexmos"
name: nmon
path: "/freedevtools/tldr/linux/nmon/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/nmon/"
description: "Monitor system statistics with nmon on Linux. Analyze CPU, memory, disk I/O, and network performance effectively. Free online tool, no registration required."
category: linux
keywords:
- linux system monitor
- nmon performance analysis
- system statistics tool
- linux performance monitoring
- cpu utilization monitor
- memory usage analyzer
- disk i/o statistics
- network performance tool
- nmon linux command
- system resource monitor
features:
- Monitor CPU, memory, and disk usage in real-time
- Save system performance data to a file for later analysis
- Analyze network I/O statistics and identify bottlenecks
- Display system configuration details and hardware information
- Customize data collection intervals and reporting options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nmon

> A system administrator, tuner, and benchmark tool.
> More information: <https://manned.org/nmon>.

- Start `nmon`:

`nmon`

- Save records to file ("-s 300 -c 288" by default):

`nmon -f`

- Save records to file with a total of 240 measurements, by taking 30 seconds between each measurement:

`nmon -f -s {{30}} -c {{240}}`
