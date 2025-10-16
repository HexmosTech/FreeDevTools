---
title: "List Sockets - Monitor Network Connections | Online Free DevTools by Hexmos"
name: sockstat
path: "/freedevtools/tldr/linux/sockstat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sockstat/"
description: "Monitor network connections with sockstat.  List open internet or UNIX domain sockets, filtering by protocol, port, process ID, or user. Free online tool, no registration required."
category: linux
keywords:
  - socket listener
  - network connection monitor
  - unix socket viewer
  - ipv4 socket checker
  - ipv6 socket monitor
  - process socket identifier
  - port socket display
  - protocol socket filter
  - linux socket command
  - network debugging tool
features:
  - Displays open IPv4 and IPv6 sockets.
  - Filters sockets by listening status, connected status, and protocol.
  - Allows filtering by specific ports, process IDs (PIDs), user IDs (UIDs), and group IDs (GIDs).
  - Shows details of both internet and UNIX domain sockets.
  - Provides a concise and easily understandable output.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sockstat

> List open Internet or UNIX domain sockets.
> See also: `netstat`.
> More information: <https://manned.org/sockstat>.

- Show information for IPv4 and IPv6 sockets for both listening and connected sockets:

`sockstat`

- Show information for IPv[4]/IPv[6] sockets [l]istening on specific [p]orts using a specific p[R]otocol:

`sockstat -{{4|6}} -l -R {{tcp|udp|raw|unix}} -p {{port1,port2...}}`

- Also show [c]onnected sockets and [u]nix sockets:

`sockstat -cu`

- Only show sockets of the specified `pid` or process:

`sockstat -P {{pid|process}}`

- Only show sockets of the specified `uid` or user:

`sockstat -U {{uid|user}}`

- Only show sockets of the specified `gid` or group:

`sockstat -G {{gid|group}}`
