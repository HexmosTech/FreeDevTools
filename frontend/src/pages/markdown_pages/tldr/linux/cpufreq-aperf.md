---
title: "CPU Frequency Control - Monitor CPU Speed | Free DevTools"
name: cpufreq-aperf
path: /freedevtools/tldr/linux/cpufreq-aperf
canonical: "https://hexmos.com/freedevtools/tldr/linux/cpufreq-aperf/"
description: "Control CPU frequency with cpufreq-aperf on Linux. Monitor CPU speed and performance to optimize system resources. Free online tool, no registration required."
category: linux
keywords:
- linux cpu frequency monitor
- cpu performance analysis
- average cpu speed
- cpufreq aperf command
- cpu throttling linux
- system performance tuning
- cpu usage analysis
- linux performance monitoring
- cpu scaling frequency
- linux command line tools
features:
- Monitor average CPU frequency over time
- Calculate CPU speed for specific cores
- Set custom refresh intervals for monitoring
- Execute CPU frequency calculations once
- Optimize CPU performance on Linux systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cpufreq-aperf

> Calculate the average CPU frequency over a time period.
> Requires root privileges.
> More information: <https://manned.org/cpufreq-aperf>.

- Start calculating, defaulting to all CPU cores and 1 second refresh interval:

`sudo cpufreq-aperf`

- Start calculating for CPU 1 only:

`sudo cpufreq-aperf {{[-c|--cpu]}} {{1}}`

- Start calculating with a 3 second refresh interval for all CPU cores:

`sudo cpufreq-aperf {{[-i|--interval]}} {{3}}`

- Calculate only once:

`sudo cpufreq-aperf {{[-o|--once]}}`
