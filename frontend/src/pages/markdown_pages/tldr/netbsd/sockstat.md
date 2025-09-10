---
title: "List Sockets - Monitor Network Sockets with sockstat | Free DevTools"
name: sockstat
path: /freedevtools/tldr/netbsd/sockstat
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/sockstat/"
description: "Monitor network sockets on NetBSD with sockstat. Analyze network connections and troubleshoot network issues using socket information. Free online tool, no registration required."
category: netbsd
keywords:
  - netbsd network socket monitoring
  - netbsd internet socket information
  - netbsd unix domain socket information
  - network connection analysis netbsd
  - socket listening status netbsd
  - network protocol analysis netbsd
  - netbsd network troubleshooting
  - system administration netbsd
  - network socket statistics netbsd
  - active network connections netbsd
features:
  - Display IPv4 and IPv6 socket connection information
  - List listening and connected sockets on NetBSD
  - Filter sockets by protocol and port on NetBSD
  - Display UNIX domain socket information on NetBSD
  - Show numeric socket output without name resolution on NetBSD
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
