---
title: "Trace Route - Analyze Network Paths with Pathping | Online Free DevTools by Hexmos"
name: pathping
path: /freedevtools/tldr/windows/pathping
canonical: "https://hexmos.com/freedevtools/tldr/windows/pathping/"
description: "Analyze network paths with Pathping. Troubleshoot network latency and identify problematic hops with this powerful command-line tool. Free online tool, no registration required."
category: windows
keywords:
- network path analyzer
- windows trace route
- pathping command
- network latency diagnosis
- hop analysis tool
- network troubleshooting windows
- pathping ipv4
- pathping ipv6
- windows network diagnostic
- command line trace
features:
- Trace network paths to a specified host.
- Identify network latency and packet loss at each hop.
- Configure the number of pings per hop.
- Force IPv4 or IPv6 usage for network analysis.
- Display help information about pathping parameters.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pathping

> A trace route tool combining features of `ping` and `tracert`.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/pathping>.

- Ping and trace the route to a host:

`pathping {{hostname}}`

- Do not perform reverse lookup of IP address to hostname:

`pathping {{hostname}} -n`

- Specify the maximum number of hops to search for the target (the default is 30):

`pathping {{hostname}} -h {{max_hops}}`

- Specify the milliseconds to wait between pings (the default is 240):

`pathping {{hostname}} -p {{time}}`

- Specify the number of queries per hop (the default is 100):

`pathping {{hostname}} -q {{queries}}`

- Force IPV4 usage:

`pathping {{hostname}} -4`

- Force IPV6 usage:

`pathping {{hostname}} -6`

- Display help:

`pathping /?`
