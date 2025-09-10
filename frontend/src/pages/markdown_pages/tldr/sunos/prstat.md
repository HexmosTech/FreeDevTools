---
title: "Prstat - Report Process Statistics | Free DevTools"
name: prstat
path: /freedevtools/tldr/sunos/prstat
canonical: "https://hexmos.com/freedevtools/tldr/sunos/prstat/"
description: "Report process statistics with Prstat. Monitor CPU usage, memory utilization, and user resource consumption on SunOS. Free online tool, no registration required."
category: sunos
keywords:
  - SunOS process monitoring
  - real-time process statistics
  - CPU usage analysis
  - memory utilization monitoring
  - user resource accounting
  - process activity reporting
  - performance bottleneck detection
  - SunOS resource tracking
  - microstate process accounting
  - top process identification
features:
  - Examine all running processes on SunOS
  - Sort processes by CPU or memory usage
  - Report usage summary per user
  - Provide microstate accounting information
  - Display top processes in real-time
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prstat

> Report active process statistics.
> More information: <https://www.unix.com/man-page/sunos/1m/prstat>.

- Examine all processes and reports statistics sorted by CPU usage:

`prstat`

- Examine all processes and reports statistics sorted by memory usage:

`prstat -s rss`

- Report total usage summary for each user:

`prstat -t`

- Report microstate process accounting information:

`prstat -m`

- Print out a list of top 5 CPU using processes every second:

`prstat -c -n 5 -s cpu 1`
