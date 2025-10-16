---
title: "Capture Network Packets - Sniff Network Traffic | Online Free DevTools by Hexmos"
name: sniff.py
path: "/freedevtools/tldr/common/sniff-py/"
canonical: "https://hexmos-com/freedevtools/tldr/common/sniff-py/"
description: "Capture network packets efficiently with sniff.py. Analyze network traffic and troubleshoot network issues with this packet sniffing tool. Free online tool, no registration required."
category: common
keywords:
- network packet capture
- packet sniffing tool
- network traffic analysis
- pcapy network sniffer
- impacket packet capture
- command line network monitor
- linux packet sniffer
- tcpdump alternative
- network packet analyzer
- wireshark command line
features:
- Capture network packets from specified interfaces
- Display packet data in real-time
- Save captured packets to a file
- Filter packets based on specific criteria (future enhancement)
- Monitor network traffic for security analysis
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sniff.py

> Capture and display network packets using the `pcapy` library.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- List available network interfaces and select one to start capturing packets (requires `sudo`):

`sudo sniff.py`

- Capture packets and save output to a file while displaying it on the terminal:

`sudo sniff.py | sudo tee {{path/to/output_file}}`
