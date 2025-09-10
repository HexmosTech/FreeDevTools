---
title: prstat
name: prstat
path: /freedevtools/tldr/sunos/prstat
canonical: "https://hexmos.com/freedevtools/tldr/sunos/prstat/"
description: Report active process statistics.
category: sunos
keywords:
- system monitoring and analysis
- process activity reporting
- CPU usage analysis
- memory utilization monitoring
- user-based resource accounting
- microstate process accounting
- real-time process statistics
- top process identification
- performance bottleneck detection
- resource consumption tracking
features:
- examine all running processes
- sort processes by resource usage
- report usage summary per user
- provide microstate accounting information
- display top processes in real-time
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
