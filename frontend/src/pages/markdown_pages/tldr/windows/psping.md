---
title: "PSPing - Measure Network Latency | Free DevTools"
name: psping
path: /freedevtools/tldr/windows/psping
canonical: "https://hexmos.com/freedevtools/tldr/windows/psping/"
description: "Measure network latency with PSPing, a versatile command-line tool for TCP ping, bandwidth tests, and ICMP pinging on Windows. Free online tool, no registration required."
category: windows
keywords:
- Network Latency Meter
- TCP Ping Tool
- Windows Network Monitor
- ICMP Ping Command
- Bandwidth Measurement Tool
- PSPing Windows
- Network Diagnostics Windows
- Command Line Ping
- Network Performance Analyzer
- Windows Network Tester
features:
- Measure network latency using ICMP
- Test TCP port connectivity
- Conduct bandwidth measurements
- Generate ping result histograms
- Execute silent ping tests
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# psping

> A ping tool that includes TCP ping, latency and bandwidth measurement.
> More information: <https://learn.microsoft.com/sysinternals/downloads/psping>.

- Ping a host using ICMP:

`psping {{hostname}}`

- Ping a host over a TCP port:

`psping {{hostname}}:{{port}}`

- Specify the number of pings and perform it quietly:

`psping {{hostname}} -n {{pings}} -q`

- Ping the target over TCP 50 times and produce a histogram of the results:

`psping {{hostname}}:{{port}} -q -n {{50}} -h`

- Display help:

`psping /?`
