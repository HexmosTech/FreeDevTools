---
title: "Capture HTTP Traffic - Analyze Network Packets | Online Free DevTools by Hexmos"
name: httpry
path: /freedevtools/tldr/http/httpry
canonical: "https://hexmos.com/freedevtools/tldr/http/httpry/"
description: "Capture HTTP traffic with httpry, a lightweight packet sniffer for analyzing network traffic. Free online tool, no registration required."
category: common
keywords:
- HTTP traffic capture
- Network packet analysis
- Packet sniffer
- HTTP monitoring tool
- Network traffic analyzer
- HTTP session recording
- Linux network analysis
- macOS network analysis
- Command-line packet capture
- HTTP debugging tool
features:
- Capture and display HTTP traffic in real-time
- Log HTTP traffic to a file for later analysis
- Filter HTTP traffic based on HTTP verbs
- Capture network packets in PCAP format
- Run as a daemon process for continuous monitoring
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# httpry

> A lightweight packet sniffer for displaying and logging HTTP traffic.
> It can be run in real-time displaying the traffic as it is parsed, or as a daemon process that logs to an output file.
> More information: <https://dumpsterventures.com/jason/httpry/>.

- Save output to a file:

`httpry -o {{path/to/file.log}}`

- Listen on a specific interface and save output to a binary PCAP format file:

`httpry {{eth0}} -b {{path/to/file.pcap}}`

- Filter output by a comma-separated list of HTTP verbs:

`httpry -m {{get|post|put|head|options|delete|trace|connect|patch}}`

- Read from an input capture file and filter by IP:

`httpry -r {{path/to/file.log}} '{{host 192.168.5.25}}'`

- Run as daemon process:

`httpry -d -o {{path/to/file.log}}`
