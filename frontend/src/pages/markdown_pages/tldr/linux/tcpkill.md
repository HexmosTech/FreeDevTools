---
title: "TCPkill - Control TCP Connections | Online Free DevTools by Hexmos"
name: tcpkill
path: /freedevtools/tldr/linux/tcpkill
canonical: "https://hexmos.com/freedevtools/tldr/linux/tcpkill/"
description: "Control TCP connections with TCPkill, a network analysis tool for terminating specified TCP connections. Free online tool, no registration required."
category: linux
keywords:
- TCP connection killer
- network connection control
- linux tcpkill command
- terminate TCP session
- connection reset utility
- network traffic management
- kill active TCP connections
- tcpkill network tool
- command line tcp killer
- linux network debugging
features:
- Terminate specified in-progress TCP connections.
- Kill connections based on host and port.
- Operate on a specified network interface.
- Control network traffic flow.
- Reset TCP connections instantly.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tcpkill

> Kill specified in-progress TCP connections.
> More information: <https://manned.org/tcpkill>.

- Kill in-progress connections at a specified interface, host and port:

`tcpkill -i {{eth1}} host {{192.95.4.27}} and port {{2266}}`
