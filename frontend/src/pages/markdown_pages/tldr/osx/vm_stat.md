---
title: "VMStat - Monitor Virtual Memory Statistics | Free DevTools"
name: vm_stat
path: /freedevtools/tldr/osx/vm_stat
canonical: "https://hexmos.com/freedevtools/tldr/osx/vm_stat/"
description: "Monitor virtual memory with VMStat. Analyze memory usage, identify bottlenecks, and optimize performance using command-line. Free online tool, no registration required."
category: osx
keywords:
- virtual memory statistics
- osx vmstat
- macos memory monitoring
- vmstat command
- memory usage analysis
- virtual memory reporting
- system performance monitoring
- memory bottleneck detection
- osx system analysis
- command-line memory tool
features:
- Display detailed virtual memory statistics
- Report active, inactive, wired, and free memory
- Monitor page faults and memory swaps
- Provide periodic memory usage reports
- Identify potential memory bottlenecks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vm_stat

> Show virtual memory statistics.
> More information: <https://keith.github.io/xcode-man-pages/vm_stat.1.html>.

- Display virtual memory statistics:

`vm_stat`

- Display reports every 2 seconds for 5 times:

`vm_stat -c {{5}} {{2}}`
