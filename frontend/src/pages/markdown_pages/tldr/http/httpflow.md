---
title: "Capture HTTP Streams - Analyze Network Traffic | Free DevTools"
name: httpflow
path: /freedevtools/tldr/http/httpflow
canonical: "https://hexmos.com/freedevtools/tldr/http/httpflow/"
description: "Capture network traffic with HTTPflow. Analyze HTTP streams and debug network communication using command line. Free online tool, no registration required."
category: common
keywords:
- HTTP stream capture
- Network traffic analysis
- PCAP file analysis
- HTTP session recording
- Command-line packet capture
- Network debugging tool
- TCP stream inspection
- HTTP request filtering
- HTTP response inspection
- Linux network monitoring
features:
- Capture HTTP traffic on all network interfaces
- Filter network traffic using BPF-style filters
- Filter HTTP requests based on URL regular expressions
- Analyze HTTP streams from PCAP files
- Save captured HTTP streams to a directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# httpflow

> A utility to capture and dump HTTP streams.
> More information: <https://github.com/six-ddc/httpflow>.

- Capture traffic on all interfaces:

`httpflow -i {{any}}`

- Use a bpf-style capture to filter the results:

`httpflow {{host httpbin.org or host baidu.com}}`

- Use a `regex` to filter requests by URLs:

`httpflow -u '{{regex}}'`

- Read packets from PCAP format binary file:

`httpflow -r {{out.cap}}`

- Write the output to a directory:

`httpflow -w {{path/to/directory}}`
