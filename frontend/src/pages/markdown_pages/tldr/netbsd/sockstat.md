---
title: sockstat
name: sockstat
path: /freedevtools/tldr/netbsd/sockstat
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/sockstat/"
description: List open Internet or UNIX domain sockets on NetBSD systems.
category: netbsd
keywords:
- network socket monitoring
- internet socket information
- unix domain socket information
- network connection analysis
- socket listening status
- network protocol analysis
- network troubleshooting tool
- system administration tool
- network socket statistics
- active network connections
features:
- display IPv4 and IPv6 socket information
- list listening and connected sockets
- filter sockets by protocol and port
- display UNIX domain socket information
- show numeric output without name resolution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sockstat

> List open Internet or UNIX domain sockets.
> Note: This program is a rewrite for NetBSD 3.0 from FreeBSD's `sockstat`.
> See also: `netstat`.
> More information: <https://man.netbsd.org/sockstat.1>.

- Show information for IPv4, IPv6 and Unix sockets for both listening and connected sockets:

`sockstat`

- Show information for IPv[4]/IPv[6] sockets [l]istening on specific [p]orts using a specific [P]rotocol:

`sockstat -{{4|6}} -l -P {{tcp|udp|sctp|divert}} -p {{port1,port2...}}`

- Also show [c]onnected sockets, showing [u]nix sockets:

`sockstat -cu`

- Only show [n]umeric output, without resolving symbolic names for addresses and ports:

`sockstat -n`

- Only list sockets of the specified address [f]amily:

`sockstat -f {{inet|inet6|local|unix}}`
