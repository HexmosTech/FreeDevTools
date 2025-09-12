---
title: "Iperf - Measure Network Bandwidth | Free DevTools"
name: iperf
path: /freedevtools/tldr/common/iperf
canonical: "https://hexmos.com/freedevtools/tldr/common/iperf/"
description: "Measure network bandwidth with Iperf, a powerful network performance measurement tool. Analyze TCP and UDP throughput. Free online tool, no registration required."
category: common
keywords:
- network bandwidth measurement
- iperf network speed test
- TCP bandwidth test
- UDP bandwidth test
- iperf command line
- network performance analysis
- network throughput measurement
- linux network testing
- macos network testing
- iperf server client
features:
- Measure network bandwidth between two hosts
- Perform TCP and UDP throughput tests
- Run iperf in server or client mode
- Specify server port for listening
- Configure parallel streams for increased load
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# iperf

> Measure network bandwidth between computers.
> More information: <https://iperf.fr>.

- Run on server:

`iperf {{[-s|--server]}}`

- Run on server using UDP mode and set server port to listen on 5001:

`iperf {{[-u|--udp]}} {{[-s|--server]}} {{[-p|--port]}} {{5001}}`

- Run on client:

`iperf {{[-c|--client]}} {{server_address}}`

- Run on client every 2 seconds:

`iperf {{[-c|--client]}} {{server_address}} {{[-i|--interval]}} {{2}}`

- Run on client with 5 parallel threads:

`iperf {{[-c|--client]}} {{server_address}} {{[-P|--parallel]}} {{5}}`

- Run on client using UDP mode:

`iperf {{[-u|--udp]}} {{[-c|--client]}} {{server_address}} {{[-p|--port]}} {{5001}}`
