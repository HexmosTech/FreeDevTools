---
title: "Investigate Sockets with ss - Network Monitoring | Online Free DevTools by Hexmos"
name: ss
path: "/freedevtools/tldr/linux/ss/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ss/"
description: "Investigate network sockets instantly with the ss command. Monitor TCP, UDP, and other socket connections, filter by state and port, and even kill connections. Free online tool, no registration required."
category: linux
keywords:
  - network socket investigation
  - ss command linux
  - socket monitoring command
  - tcp udp socket viewer
  - linux network utilities
  - command line network tools
  - network connection analysis
  - socket state monitoring
  - process socket connection
  - kill socket connection
features:
  - Display all active TCP, UDP, RAW, and UNIX sockets.
  - Filter sockets by state (e.g., established, listening).
  - Show sockets connected to specific ports.
  - Identify processes associated with network connections.
  - Terminate unwanted socket connections.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ss

> Utility to investigate sockets.
> More information: <https://manned.org/ss.8>.

- Show all TCP/UDP/RAW/UNIX sockets:

`ss {{[-a|--all]}} {{-t|-u|-w|-x}}`

- Filter TCP sockets by states, only/exclude:

`ss {{state|exclude}} {{bucket|big|connected|synchronized|...}}`

- Show all TCP sockets connected to the local HTTPS port (443):

`ss {{[-t|--tcp]}} src :{{443}}`

- Show all TCP sockets listening on the local 8080 port:

`ss {{[-lt|--listening --tcp]}} src :{{8080}}`

- Show all TCP sockets along with processes connected to a remote SSH port:

`ss {{[-pt|--processes --tcp]}} dst :{{ssh}}`

- Show all UDP sockets connected on specific source and destination ports:

`ss {{[-u|--udp]}} 'sport == :{{source_port}} and dport == :{{destination_port}}'`

- Show all TCP IPv4 sockets locally connected on the subnet 192.168.0.0/16:

`ss {{[-4t|--ipv4 --tcp]}} src {{192.168/16}}`

- Kill IPv4 or IPv6 Socket Connection with destination IP 192.168.1.17 and destination port 8080:

`ss {{[-K|--kill]}} dst {{192.168.1.17}} dport = {{8080}}`
