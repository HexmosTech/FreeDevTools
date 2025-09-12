---
title: "Netperf - Benchmark Network Throughput | Free DevTools"
name: netperf
path: /freedevtools/tldr/common/netperf
canonical: "https://hexmos.com/freedevtools/tldr/common/netperf/"
description: "Benchmark network performance with Netperf. Measure network throughput and latency using command line interface. Free online tool, no registration required."
category: common
keywords:
- network throughput benchmark
- netperf network testing
- network performance analysis
- linux network benchmark
- network latency measurement
- command line network testing
- network performance monitoring
- netperf command examples
- socket performance testing
- tcp/udp network benchmark
features:
- Measure network throughput between two hosts
- Specify the sampling length for network tests
- Connect to a remote server via IP address and port
- Force IPv4 or IPv6 protocol for network connections
- Test network performance using command-line options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# netperf

> Client-side command for `netperf`, the benchmarking application that measures network throughput. Similar to `iperf`.
> See also: `netserver` for the server-side command.
> More information: <https://hewlettpackard.github.io/netperf/doc/netperf.html#Global-Command_002dline-Options>.

- Connect to server on a specific IP address via default port (12865):

`netperf {{address}}`

- Specify [p]ort:

`netperf {{address}} -p {{port}}`

- Specify the sampling [l]ength in seconds (default is 10):

`netperf {{address}} -l {{seconds}}`

- Force IPv[4] or IPv[6]:

`netperf {{address}} -{{4|6}}`
