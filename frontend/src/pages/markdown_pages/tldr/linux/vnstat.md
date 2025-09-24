---
title: "Vnstat - Control Network Traffic | Online Free DevTools by Hexmos"
name: vnstat
path: /freedevtools/tldr/linux/vnstat
canonical: "https://hexmos.com/freedevtools/tldr/linux/vnstat/"
description: "Control network traffic instantly with Vnstat. Monitor bandwidth usage, track interface statistics, and analyze network performance using the command line. Free online tool, no registration required."
category: linux
keywords:
- network traffic monitor
- linux network stats
- vnstat bandwidth usage
- command line network tool
- network interface statistics
- vnstat traffic analysis
- linux bandwidth monitoring
- real-time network stats
- console network monitor
- network traffic graphing
features:
- Display network traffic summary for all interfaces
- Monitor live network statistics for a specific interface
- Graph hourly network traffic for the last 24 hours
- Measure and show average network traffic for a set period
- Track network bandwidth usage on Linux systems
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vnstat

> A console-based network traffic monitor.
> More information: <https://manned.org/vnstat>.

- Display traffic summary for all interfaces:

`vnstat`

- Display traffic summary for a specific network interface:

`vnstat {{[-i|--iface]}} {{network_interface}}`

- Display live stats for a specific network interface:

`vnstat {{[-l|--live]}} {{[-i|--iface]}} {{network_interface}}`

- Show traffic statistics on an hourly basis for the last 24 hours using a bar graph:

`vnstat {{[-hg|--hoursgraph]}}`

- Measure and show average traffic for 30 seconds:

`vnstat {{[-tr|--traffic]}} {{30}}`
