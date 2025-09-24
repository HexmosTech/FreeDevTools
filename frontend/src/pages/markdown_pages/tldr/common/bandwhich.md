---
title: "Monitor Network Utilization - Bandwhich | Online Free DevTools by Hexmos"
name: bandwhich
path: /freedevtools/tldr/common/bandwhich
canonical: "https://hexmos.com/freedevtools/tldr/common/bandwhich/"
description: "Monitor network utilization by process with Bandwhich. Analyze bandwidth usage and identify network intensive applications with ease. Free online tool, no registration required."
category: common
keywords:
- network utilization monitor
- bandwidth usage analysis
- network traffic inspector
- process network activity
- connection network usage
- remote IP bandwidth
- linux network monitor
- macos network usage
- command line network tool
- terminal network bandwidth
features:
- Display network utilization by process
- Show network usage by connection
- Monitor bandwidth by remote IP/hostname
- Filter network traffic by interface
- Display total cumulative network usage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bandwhich

> Display the current network utilization by process, connection or remote IP/hostname.
> More information: <https://github.com/imsnif/bandwhich#usage>.

- Show the remote addresses table only:

`bandwhich {{[-a|--addresses]}}`

- Show DNS queries:

`bandwhich {{[-s|--show-dns]}}`

- Show total (cumulative) usage:

`bandwhich {{[-t|--total-utilization]}}`

- Show the network utilization for a specific network interface:

`bandwhich {{[-i|--interface]}} {{eth0}}`

- Show DNS queries with a given DNS server:

`bandwhich {{[-s|--show-dns]}} {{[-d|--dns-server]}} {{dns_server_ip}}`
