---
title: "Capture TCP Traffic - Debug Network Packets | Free DevTools"
name: tcpflow
path: /freedevtools/tldr/unknown/tcpflow
canonical: "https://hexmos.com/freedevtools/tldr/unknown/tcpflow/"
description: "Capture TCP traffic instantly with tcpflow for network debugging. Analyze packets and troubleshoot network issues easily. Free online tool, no registration required."
category: unknown
keywords:
- TCP packet capture
- network traffic analysis
- tcpdump alternative
- network debugging linux
- packet flow visualization
- command line packet sniffer
- tcp connection monitoring
- network forensics tool
- wireshark alternative cli
- tcp stream extraction
features:
- Captures TCP traffic based on interface and port
- Extracts and stores TCP streams
- Provides command-line access to packet data
- Supports various output formats for analysis
- Facilitates network troubleshooting and security analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tcpflow

> Capture TCP traffic for debugging and analysis.
> More information: <https://manned.org/tcpflow>.

- Show all data on the given interface and port:

`tcpflow -c -i {{eth0}} port {{80}}`
