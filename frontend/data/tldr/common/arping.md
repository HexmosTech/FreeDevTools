---
title: "Arping - Discover Hosts on Network | Online Free DevTools by Hexmos"
name: arping
path: "/freedevtools/tldr/common/arping/"
canonical: "https://hexmos.com/freedevtools/tldr/common/arping/"
description: "Discover network hosts with Arping. Probe network devices, identify MAC addresses, and detect IP conflicts with this network diagnostic command. Free online tool, no registration required."
category: common
keywords:
- ARP request
- network probing
- MAC address discovery
- IP conflict detection
- network diagnostics
- linux arping
- command line arping
- network troubleshooting
- arping utility
- broadcast ARP
features:
- Discover hosts on a local network
- Probe network devices using ARP packets
- Detect duplicate IP addresses
- Broadcast ARP requests to update ARP caches
- Ping hosts on a specific network interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arping

> Discover and probe hosts in a network using the ARP protocol.
> Useful for MAC address discovery.
> More information: <https://manned.org/arping>.

- Ping a host by ARP request packets:

`arping {{host_ip}}`

- Ping a host on a specific interface:

`arping -I {{interface}} {{host_ip}}`

- Ping a host and [f]inish after the first reply:

`arping -f {{host_ip}}`

- Ping a host a specific number ([c]ount) of times:

`arping -c {{count}} {{host_ip}}`

- Broadcast ARP request packets to update neighbours' ARP caches ([U]nsolicited ARP mode):

`arping -U {{ip_to_broadcast}}`

- [D]etect duplicated IP addresses in the network by sending ARP requests with a 3 second timeout:

`arping -D -w {{3}} {{ip_to_check}}`
