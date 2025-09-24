---
title: "Capture Network Packets with Dumpcap | Online Free DevTools by Hexmos"
name: dumpcap
path: /freedevtools/tldr/common/dumpcap
canonical: "https://hexmos.com/freedevtools/tldr/common/dumpcap/"
description: "Capture network packets efficiently with Dumpcap. Analyze network traffic and diagnose issues using this command-line network troubleshooting tool. Free online tool, no registration required."
category: common
keywords:
  - network packet capture command
  - linux packet sniffing dumpcap
  - network traffic analysis dumpcap
  - pcapng file capture command
  - command-line network sniffer
  - dumpcap command examples and syntax
  - wireshark compatible capture
  - network troubleshooting with dumpcap
  - linux network monitoring tool
  - tcpdump alternative command
features:
  - Capture network packets from specified interfaces.
  - Save captured packets to pcapng files for analysis.
  - Utilize ring buffer for continuous packet capture.
  - Manage capture file size and number with defined limits.
  - List available network interfaces for targeted capture.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
