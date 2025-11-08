---
title: "View Network Stats - ifstat Command | Online Free DevTools by Hexmos"
name: ifstat
path: "/freedevtools/tldr/linux/ifstat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ifstat/"
description: "View network interface statistics with ifstat. Monitor network traffic, identify bottlenecks, and troubleshoot network issues using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - network statistics viewer
  - linux network monitoring
  - ifstat command linux
  - command-line network tool
  - network interface statistics
  - real-time network monitoring
  - ifstat usage examples
  - monitor network bandwidth
  - network error rate analysis
  - system network diagnostics
features:
  - Displays real-time network interface statistics.
  - Shows cumulative network statistics since boot or last query.
  - Reports network errors and error rates.
  - Provides detailed bandwidth usage information.
  - Allows for flexible reporting intervals.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ifstat

> View network interface statistics.
> More information: <https://manned.org/ifstat>.

- View network interface statistics since last query:

`ifstat`

- View network interface statistics since last boot:

`ifstat {{[-a|--ignore]}}`

- View error rate:

`ifstat {{[-e|--errors]}}`
