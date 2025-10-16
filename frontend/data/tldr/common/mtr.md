---
title: "MTR Traceroute - Diagnose Network Paths | Online Free DevTools by Hexmos"
name: mtr
path: "/freedevtools/tldr/common/mtr/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mtr/"
description: "Diagnose network paths with MTR Traceroute. Identify network latency and packet loss using this combined traceroute and ping utility. Free online tool, no registration required."
category: common
keywords:
- network traceroute
- network latency tool
- packet loss diagnosis
- mtr traceroute linux
- mtr command line
- network troubleshooting
- internet connectivity test
- diagnose network issues
- mtr network analysis
- mtr ping tool
features:
- Trace network routes to identify bottlenecks.
- Continuously ping hops to monitor network stability.
- Disable hostname resolution for faster tracing.
- Customize ping intervals for detailed analysis.
- Display Autonomous System Numbers (ASN) for each hop.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mtr

> Matt's Traceroute: combined traceroute and ping tool.
> More information: <https://manned.org/mtr>.

- Traceroute to a host and continuously ping all intermediary hops:

`mtr {{example.com}}`

- Disable IP address and host name mapping:

`mtr {{[-n|--no-dns]}} {{example.com}}`

- Generate output after pinging each hop 10 times:

`mtr {{[-w|--report-wide]}} {{example.com}}`

- Force IP IPv4 or IPV6:

`mtr -4 {{example.com}}`

- Wait for a given time (in seconds) before sending another packet to the same hop:

`mtr {{[-i|--interval]}} {{10}} {{example.com}}`

- Display the Autonomous System Number (ASN) for each hop:

`mtr {{[-z|--aslookup]}} {{example.com}}`

- Display both IP address and reverse DNS name:

`mtr {{[-b|--show-ips]}} {{example.com}}`
