---
title: "Control Network Traffic - Termshark Packet Analysis | Online Free DevTools by Hexmos"
name: termshark
path: "/freedevtools/tldr/linux/termshark/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/termshark/"
description: "Control network traffic instantly with Termshark, a terminal-based network analyzer. Capture packets, filter protocols, and inspect connections. Free online tool, no registration required."
category: linux
keywords:
  - Network Packet Analysis
  - Terminal Network Monitor
  - Wireshark Terminal Interface
  - Packet Capture Tool
  - Network Troubleshooting Linux
  - Command Line Packet Sniffer
  - Network Protocol Analyzer
  - Traffic Analysis Tool
  - Security Monitoring
  - Pcap Analysis
features:
  - Monitor network traffic in a terminal
  - Filter packets by protocol and address
  - Inspect packet contents using Wireshark-like interface
  - Capture network traffic to a file
  - Analyze network connections
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# termshark

> Terminal UI for `tshark`, but looks more like `wireshark`.
> More information: <https://github.com/gcla/termshark/blob/master/docs/UserGuide.md>.

- Monitor the default network interface:

`sudo termshark`

- Specify the interface to monitor:

`sudo termshark {{interface}}`
