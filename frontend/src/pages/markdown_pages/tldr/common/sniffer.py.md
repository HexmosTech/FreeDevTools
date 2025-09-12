---
title: "Capture Network Packets with Sniffer.py | Free DevTools"
name: sniffer.py
path: /freedevtools/tldr/common/sniffer.py
canonical: "https://hexmos.com/freedevtools/tldr/common/sniffer.py/"
description: "Capture network packets with Sniffer.py, an Impacket tool. Analyze TCP/IP traffic and monitor network activity effectively. Free online tool, no registration required."
category: common
keywords:
- network packet capture
- tcpdump alternative
- raw socket sniffer
- impacket sniffer
- protocol analyzer
- network traffic monitor
- linux packet sniffer
- windows packet sniffer
- icmp packet capture
- tcp packet capture
features:
- Capture network packets using raw sockets
- Filter packets by protocol (TCP, UDP, ICMP)
- Display packet data for analysis
- Monitor network traffic in real-time
- Utilize Impacket library for packet manipulation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sniffer.py

> Capture and display network packets for specified protocols using raw sockets.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Capture packets for default protocols (ICMP, TCP, UDP):

`sniffer.py`

- Capture packets for specific protocols (e.g., ICMP, TCP):

`sniffer.py {{protocol1 protocol2 ...}}`

- Capture packets for specific protocols (e.g., TCP):

`sniffer.py tcp`
