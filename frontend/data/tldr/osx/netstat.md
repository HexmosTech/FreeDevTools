---
title: "Netstat - Display Network Connections | Online Free DevTools by Hexmos"
name: netstat
path: "/freedevtools/tldr/osx/netstat/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/netstat/"
description: "Display network connections with Netstat, showing open ports and routing tables. Diagnose network issues and monitor traffic. Free online tool, no registration required."
category: osx
keywords:
  - network connections
  - open ports
  - routing table
  - network statistics
  - connection monitoring
  - socket information
  - tcp connections
  - udp connections
  - network troubleshooting
  - network diagnostics
features:
  - Display active network connections
  - Show listening ports and associated processes
  - Print routing tables
  - Filter network information by protocol (TCP, UDP)
  - Resolve IP addresses to hostnames (optional)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# netstat

> Display network-related information such as open connections, open socket ports, etc.
> See also: `lsof` for listing network connections, including listening ports.
> More information: <https://keith.github.io/xcode-man-pages/netstat.1.html>.

- Display the PID and program name listening on a specific protocol:

`netstat -p {{protocol}}`

- Print the routing table and do not resolve IP addresses to hostnames:

`netstat -nr`

- Print the routing table of IPv4 addresses:

`netstat -nr -f inet`
