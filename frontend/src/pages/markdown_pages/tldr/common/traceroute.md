---
title: "Traceroute - Trace Network Routes | Online Free DevTools by Hexmos"
name: traceroute
path: "/freedevtools/tldr/common/traceroute"
canonical: "https://hexmos.com/freedevtools/tldr/common/traceroute/"
description: "Trace network routes with Traceroute. Diagnose network connectivity issues and identify bottlenecks. Free online tool, no registration required."
category: common
keywords:
- traceroute network route
- network route tracer
- linux traceroute command
- macos traceroute command
- traceroute network diagnostic
- traceroute path analysis
- diagnose network latency
- traceroute command line
- network troubleshooting traceroute
- traceroute packet route trace
features:
- Trace the route packets take to a network host
- Disable IP address and hostname mapping for privacy
- Specify the wait time for response packets
- Customize the number of queries sent per hop
- Determine the MTU (Maximum Transmission Unit) to the destination
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# traceroute

> Print the route packets trace to network host.
> More information: <https://manned.org/traceroute>.

- Traceroute to a host:

`traceroute {{example.com}}`

- Disable IP address and host name mapping:

`traceroute -n {{example.com}}`

- Specify wait time in seconds for response:

`traceroute {{[-w|--wait]}} {{0.5}} {{example.com}}`

- Specify number of queries per hop:

`traceroute {{[-q|--queries]}} {{5}} {{example.com}}`

- Specify size in bytes of probing packet:

`traceroute {{example.com}} {{42}}`

- Determine the MTU to the destination:

`traceroute --mtu {{example.com}}`

- Use ICMP instead of UDP for tracerouting:

`traceroute {{[-I|--icmp]}} {{example.com}}`
