---
title: "Netstat - Control Network Connections | Online Free DevTools by Hexmos"
name: netstat
path: /freedevtools/tldr/windows/netstat
canonical: "https://hexmos.com/freedevtools/tldr/windows/netstat/"
description: "Control network connections with Netstat, a command-line tool to display network statistics and active TCP connections. Analyze network performance. Free online tool, no registration required."
category: windows
keywords:
  - netstat command
  - network connection status
  - tcp connection analysis
  - network statistics display
  - routing table information
  - port listening information
  - network adapter statistics
  - windows netstat
  - ipv4 statistics
  - ipv6 statistics
features:
  - Display active TCP connections.
  - Show listening ports on the computer.
  - Present network adapter statistics.
  - Reveal the IP routing table.
  - Display statistics by protocol.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# netstat

> Display active TCP connections, ports on which the computer is listening, network adapter statistics, the IP routing table, IPv4 statistics and IPv6 statistics.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/netstat>.

- Display active TCP connections:

`netstat`

- Display all active TCP connections and the TCP and UDP ports on which the computer is listening:

`netstat -a`

- Display network adapter statistics, such as the number of bytes and packets sent and received:

`netstat -e`

- Display active TCP connections and express addresses and port numbers numerically:

`netstat -n`

- Display active TCP connections and include the process ID (PID) for each connection:

`netstat -o`

- Display the contents of the IP routing table:

`netstat -r`

- Display statistics by protocol:

`netstat -s`

- Display a list of currently open ports and related IP addresses:

`netstat -an`
