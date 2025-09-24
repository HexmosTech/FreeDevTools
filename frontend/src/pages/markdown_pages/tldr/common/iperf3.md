---
title: "Generate Network Traffic - iperf3 Bandwidth Test | Online Free DevTools by Hexmos"
name: iperf3
path: /freedevtools/tldr/common/iperf3
canonical: "https://hexmos.com/freedevtools/tldr/common/iperf3/"
description: "Generate network traffic with iperf3. Run bandwidth tests and analyze network performance metrics using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- network bandwidth test
- iperf3 bandwidth
- network performance analysis
- traffic generation
- iperf3 server
- iperf3 client
- network troubleshooting
- linux network tools
- macos network tools
- windows network performance
features:
- Measure network bandwidth between two hosts
- Run tests in both client and server modes
- Simulate multiple parallel data streams
- Reverse the direction of data transfer
- Specify custom ports for network testing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iperf3

> Traffic generator for testing network bandwidth.
> More information: <https://iperf.fr>.

- Run iperf3 as a server:

`iperf3 {{[-s|--server]}}`

- Run an iperf3 server on a specific port:

`iperf3 {{[-s|--server]}} {{[-p|--port]}} {{port}}`

- Start bandwidth test:

`iperf3 {{[-c|--client]}} {{server}}`

- Run iperf3 in multiple parallel streams:

`iperf3 {{[-c|--client]}} {{server}} {{[-P|--parallel]}} {{streams}}`

- Reverse direction of the test. Server sends data to the client:

`iperf3 {{[-c|--client]}} {{server}} {{[-R|--reverse]}}`
