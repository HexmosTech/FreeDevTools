---
title: "FPing - Ping Multiple Hosts | Online Free DevTools by Hexmos"
name: fping
path: /freedevtools/tldr/common/fping
canonical: "https://hexmos.com/freedevtools/tldr/common/fping/"
description: "Ping multiple hosts efficiently with FPing, a powerful network probing tool. Check network connectivity and monitor host status quickly. Free online tool, no registration required."
category: common
keywords:
- multiple host ping
- network connectivity check
- fping command
- host status monitor
- network probing tool
- linux ping alternative
- command line ping
- subnet ping scanner
- batch ping utility
- ip address range ping
features:
- Ping multiple hosts concurrently
- Determine network connectivity of IP ranges
- Identify alive hosts within a subnet
- List unreachable hosts on a network
- Prune per-probe results for cleaner output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fping

> A more powerful ping which can ping multiple hosts.
> More information: <https://fping.org>.

- List the status of all hosts within a range:

`fping {{192.168.1.{1..254}}}`

- List alive hosts within a subnet generated from a netmask:

`fping {{[-a|--alive]}} {{[-g|--generate]}} {{192.168.1.0/24}}`

- List alive hosts within a subnet generated from an IP range and prune per-probe results:

`fping {{[-q|--quiet]}} {{[-a|--alive]}} {{[-g|--generate]}} {{192.168.1.1}} {{192.168.1.254}}`

- List unreachable hosts within a subnet generated from a netmask:

`fping {{[-u|--unreach]}} {{[-g|--generate]}} {{192.168.1.0/24}}`
