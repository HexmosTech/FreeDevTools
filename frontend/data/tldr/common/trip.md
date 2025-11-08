---
title: "Network Trip - Diagnose Network Issues | Online Free DevTools by Hexmos"
name: trip
path: "/freedevtools/tldr/common/trip/"
canonical: "https://hexmos.com/freedevtools/tldr/common/trip/"
description: "Diagnose network issues with Network Trip, combining traceroute and ping functionality. Analyze network paths and latency with this free online tool, no registration required."
category: common
keywords:
- network diagnostic tool
- network path analysis
- latency measurement
- traceroute alternative
- ping utility
- network troubleshooting
- linux network tools
- macos network tools
- command line network analysis
- network connectivity test
features:
- Trace network paths using traceroute
- Measure network latency using ping
- Support IPv4 and IPv6 protocols
- Allow unprivileged tracing on supported platforms
- Customize destination and source ports for TCP and UDP tracing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# trip

> A network diagnostic tool.
> Combines the functionality of `traceroute` and `ping`.
> Designed to assist with the analysis of networking issues.
> More information: <https://trippy.rs/reference/cli/>.

- Basic usage with default parameters:

`sudo trip {{example.com}}`

- Trace without requiring elevated privileges (supported platforms only):

`trip {{example.com}} --unprivileged`

- Trace using `IPv6` only:

`sudo trip {{example.com}} --ipv6`

- Trace using the `udp` protocol:

`sudo trip {{example.com}} --protocol {{udp}}`

- Use custom destination port `443` for `tcp` tracing:

`sudo trip {{example.com}} --protocol {{tcp}} --target-port {{443}}`

- Use custom source port `5000` for `udp` tracing:

`sudo trip {{example.com}} --protocol {{udp}} --source-port {{5000}}`
