---
title: "Babeld Router - Control Network Routing | Online Free DevTools by Hexmos"
name: babeld
path: /freedevtools/tldr/common/babeld
canonical: "https://hexmos.com/freedevtools/tldr/common/babeld/"
description: "Control network routing with Babeld, a flexible routing daemon. Configure network interfaces, apply firewall-style filters, and optimize network traffic. Free online tool, no registration required."
category: common
keywords:
- babel routing daemon
- network routing protocol
- babeld configuration
- babeld filters
- routing table management
- network interface configuration
- babeld linux
- babeld command line
- babeld redistribute metric
- babel network optimization
features:
- Configure routing using configuration files.
- Daemonize the process for background operation.
- Specify configuration commands directly.
- Operate on specific network interfaces.
- Apply firewall-style filters to control routing behavior.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# babeld

> Routing daemon for Babel which uses firewall-style filters.
> More information: <https://www.irif.fr/~jch/software/babel/babeld.html>.

- Start the daemon with one or more [c]onfiguration files (read in order):

`babeld -c {{path/to/ports.conf}} -c {{path/to/filters.conf}} -c {{path/to/interfaces.conf}}`

- [D]eamonize after startup:

`babeld -D`

- Specify a [C]onfiguration command:

`babeld -C {{'redistribute metric 256'}}`

- Specify on which interfaces to operate:

`babeld {{eth0}} {{eth1}} {{wlan0}}`
