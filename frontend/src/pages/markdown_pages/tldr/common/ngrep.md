---
title: "Filter Network Traffic - Control Packets with ngrep | Online Free DevTools by Hexmos"
name: ngrep
path: /freedevtools/tldr/common/ngrep
canonical: "https://hexmos.com/freedevtools/tldr/common/ngrep/"
description: "Filter network traffic with ngrep, a powerful tool for analyzing packets using regular expressions. Capture, inspect, and debug network communications. Free online tool, no registration required."
category: common
keywords:
- network traffic filter
- packet capture ngrep
- regex network analysis
- network traffic analysis linux
- ngrep command line
- tcpdump alternative
- network debugging tool
- packet sniffer
- network monitoring
- traffic pattern analysis
features:
- Capture network traffic on any interface
- Filter packets based on regular expressions
- Monitor traffic to or from specific hosts
- Analyze traffic on a specified port
- Inspect packet content for specific keywords
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ngrep

> Filter network traffic packets using `regex`.
> More information: <https://github.com/jpr5/ngrep/blob/master/EXAMPLES.md>.

- Capture traffic of all interfaces:

`ngrep -d any`

- Capture traffic of a specific interface:

`ngrep -d {{eth0}}`

- Capture traffic crossing port 22 of interface eth0:

`ngrep -d {{eth0}} port {{22}}`

- Capture traffic from or to a host:

`ngrep host {{www.example.com}}`

- Filter keyword 'User-Agent:' of interface eth0:

`ngrep -d {{eth0}} '{{User-Agent:}}'`
