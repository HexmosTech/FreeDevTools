---
title: "Capture Network Packets - Dumpcap Tool | Online Free DevTools by Hexmos"
name: dumpcap
path: /freedevtools/tldr/common/dumpcap
canonical: "https://hexmos.com/freedevtools/tldr/common/dumpcap/"
description: "Capture network packets efficiently with Dumpcap. Analyze network traffic and diagnose issues using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- network packet capture
- packet sniffing linux
- network traffic analysis
- pcapng capture utility
- command-line packet sniffer
- dumpcap command examples
- wireshark network analysis
- network troubleshooting tool
- linux network monitoring
- tcpdump alternative
features:
  - Capture network packets from specified interfaces.
  - Save captured packets to pcapng files for analysis.
  - Utilize ring buffer for continuous packet capture.
  - Manage capture file size and number with defined limits.
  - List available network interfaces for targeted capture.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
- Capture network packets from specified interfaces.
- Save captured packets to pcapng files.
- Utilize ring buffer functionality for continuous capture.
- Limit capture file size and number for efficient management.
- List available network interfaces for targeted capture.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dumpcap

> A network traffic dump tool.
> More information: <https://www.wireshark.org/docs/man-pages/dumpcap.html>.

- Display available interfaces:

`dumpcap {{[-D|--list-interfaces]}}`

- Capture packets on a specific interface:

`dumpcap {{[-i|--interface]}} {{1}}`

- Capture packets to a specific location:

`dumpcap {{[-i|--interface]}} {{1}} -w {{path/to/output_file.pcapng}}`

- Write to a ring buffer with a specific max file limit of a specific size:

`dumpcap {{[-i|--interface]}} {{1}} -w {{path/to/output_file.pcapng}} {{[-b|--ring-buffer]}} filesize:{{500000}} {{[-b|--ring-buffer]}} files:{{10}}`
