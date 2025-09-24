---
title: "Dstat - Generate System Statistics | Online Free DevTools by Hexmos"
name: dstat
path: /freedevtools/tldr/linux/dstat
canonical: "https://hexmos.com/freedevtools/tldr/linux/dstat/"
description: "Generate system statistics with Dstat. Monitor CPU usage, disk I/O, network traffic, and more using command line. Free online tool, no registration required."
category: linux
keywords:
- system resource monitoring
- linux performance analysis
- cpu usage statistics
- disk i/o metrics
- network traffic monitoring
- dstat command line tool
- system performance metrics
- linux system monitoring
- resource usage tracking
- system activity reporting
features:
- Display real-time CPU, disk, network, and memory statistics
- Monitor system resource usage with customizable intervals
- List all available Dstat plugins
- Identify processes consuming the most memory and CPU resources
- Display battery percentage and remaining battery time
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dstat

> Versatile tool for generating system resource statistics.
> More information: <http://dag.wieers.com/home-made/dstat>.

- Display CPU, disk, net, paging and system statistics:

`dstat`

- Display statistics every 5 seconds and 4 updates only:

`dstat {{5}} {{4}}`

- Display CPU and memory statistics only:

`dstat {{[-c|--cpu]}} {{[-m|--mem]}}`

- List all available dstat plugins:

`dstat --list`

- Display the process using the most memory and most CPU:

`dstat --top-mem --top-cpu`

- Display battery percentage and remaining battery time:

`dstat --battery --battery-remain`
