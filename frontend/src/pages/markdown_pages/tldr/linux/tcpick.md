---
title: "Analyze Network Traffic with tcpick | Online Free DevTools by Hexmos"
name: tcpick
path: /freedevtools/tldr/linux/tcpick
canonical: "https://hexmos.com/freedevtools/tldr/linux/tcpick/"
description: "Analyze network traffic with tcpick, a powerful packet sniffing and network analysis tool. Capture and display TCP connections and data with ease. Free online tool, no registration required."
category: linux
keywords:
  - network traffic analyzer
  - tcp connection analyzer
  - packet sniffer linux
  - tcpick command
  - network monitoring tool
  - tcp data capture
  - interface traffic monitoring
  - port traffic analysis
  - host traffic analysis
  - linux network analysis
features:
  - Capture network traffic on a specific interface
  - Monitor traffic on specific ports and hosts
  - Display detailed TCP connection information
  - Analyze captured network data
  - Filter traffic based on host, port, and interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tcpick

> Packet sniffing and network traffic analysis tool.
> It can capture and display TCP connections and data. It can also monitor network traffic on a interface, host, or port.
> More information: <https://manned.org/tcpick.8>.

- Capture traffic on a specific interface, port and host::

`sudo tcpick {{[-i|--interface]}} {{interface}} {{[-C|--colors]}} -h {{host}} -p {{port}}`

- Capture traffic on port 80 (HTTP) of a specific host:

`sudo tcpick {{[-i|--interface]}} {{eth0}} {{[-C|--colors]}} -h {{192.168.1.100}} -p {{80}}`

- Display help:

`tcpick --help`
