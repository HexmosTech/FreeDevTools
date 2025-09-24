---
title: "Netperf Server - Control Network Throughput | Online Free DevTools by Hexmos"
name: netserver
path: /freedevtools/tldr/common/netserver
canonical: "https://hexmos.com/freedevtools/tldr/common/netserver/"
description: "Control network throughput with Netperf Server. Benchmark network performance and analyze data transfer rates with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- network performance benchmark
- netperf server command
- network throughput testing
- command line network tools
- linux network analysis
- netserver performance monitoring
- network socket management
- server-side network testing
- network debugging tools
- connection speed analyzer
features:
- Start a Netperf server instance
- Specify a custom port for Netperf server
- Run Netperf server in the foreground or background
- Force IPv4 or IPv6 protocol usage
- Analyze network throughput with Netperf
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# netserver

> Server-side command for `netperf`, the benchmarking application that measures network throughput.
> See also: `netperf` for the client-side command.
> More information: <https://manned.org/netserver.1>.

- Start a server on the default port (12865) and fork to background:

`netserver`

- Start server in foreground and do not fork:

`netserver -D`

- Specify [p]ort:

`netserver -p {{port}}`

- Force IPv[4] or IPv[6]:

`netserver -{{4|6}}`
