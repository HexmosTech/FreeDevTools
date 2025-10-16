---
title: "Netstat - Display Network Information | Online Free DevTools by Hexmos"
name: netstat
path: "/freedevtools/tldr/common/netstat/"
canonical: "https://hexmos.com/freedevtools/tldr/common/netstat/"
description: "Display network information with Netstat, including open connections and listening ports. Troubleshoot network issues effectively. Free online tool, no registration required."
category: common
keywords:
- network statistics
- connection monitoring
- port analysis
- network troubleshooting
- socket information
- linux network tools
- macos network tools
- windows network tools
- tcp udp ports
- route table information
features:
- List all open ports and connections
- Display listening ports for specific protocols
- Show process IDs associated with network connections
- Continuously monitor network statistics
- Display routing table information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# netstat

> Display network-related information such as open connections, open socket ports, etc.
> See also: `ss`.
> More information: <https://manned.org/netstat>.

- List all ports:

`netstat {{[-a|--all]}}`

- List all listening ports:

`netstat {{[-l|--listening]}}`

- List listening TCP ports:

`netstat {{[-t|--tcp]}}`

- Display PID and program names:

`netstat {{[-p|--program]}}`

- List information continuously:

`netstat {{[-c|--continuous]}}`

- List routes and do not resolve IP addresses to hostnames:

`netstat {{[-rn|--route --numeric]}}`

- List listening TCP and UDP ports (+ user and process if you're root):

`netstat {{[-tulpne|--tcp --udp --listening --program --numeric --extend]}}`
