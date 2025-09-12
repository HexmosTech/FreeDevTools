---
title: "MPSTAT - Report CPU Statistics | Free DevTools"
name: mpstat
path: /freedevtools/tldr/linux/mpstat
canonical: "https://hexmos.com/freedevtools/tldr/linux/mpstat/"
description: "Report CPU statistics with MPSTAT, a powerful system monitoring tool for Linux. Analyze CPU performance and identify bottlenecks quickly. Free online tool, no registration required."
category: linux
keywords:
- linux cpu statistics
- system performance monitoring
- cpu usage report
- mpstat command
- linux system monitoring
- cpu utilization analysis
- performance metrics linux
- system diagnostic tool
- process accounting linux
- cpu performance analysis
features:
- Display CPU utilization statistics
- Report CPU activity at specified intervals
- Monitor individual processor performance
- Analyze CPU performance metrics on Linux
- Provide comprehensive system-level CPU information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mpstat

> Report CPU statistics.
> More information: <https://manned.org/mpstat>.

- Display CPU statistics every 2 seconds:

`mpstat {{2}}`

- Display 5 reports, one by one, at 2 second intervals:

`mpstat {{2}} {{5}}`

- Display 5 reports, one by one, from a given processor, at 2 second intervals:

`mpstat -P {{0}} {{2}} {{5}}`
