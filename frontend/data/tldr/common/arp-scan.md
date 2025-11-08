---
title: "ARP Scan - Scan Local Network | Online Free DevTools by Hexmos"
name: arp-scan
path: "/freedevtools/tldr/common/arp-scan/"
canonical: "https://hexmos.com/freedevtools/tldr/common/arp-scan/"
description: "Scan the local network with ARP Scan. Discover devices, identify IP addresses, and troubleshoot network issues efficiently. Free online tool, no registration required."
category: common
keywords:
- arp scan
- network scan
- local network scan
- ip address scan
- mac address scan
- network discovery
- network troubleshooting
- lan scan
- linux arp scan
- command line arp scan
features:
- Scan local networks for active hosts
- Identify IP and MAC addresses of devices
- Specify custom IP address ranges for scanning
- Use custom netmasks for network scanning
- Discover network devices via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arp-scan

> Send ARP packets to hosts (specified as IP addresses or hostnames) to scan the local network.
> More information: <https://github.com/royhills/arp-scan>.

- Scan the current local network:

`arp-scan {{[-l|--localnet]}}`

- Scan an IP network with a custom bitmask:

`arp-scan {{192.168.1.1}}/{{24}}`

- Scan an IP network within a custom range:

`arp-scan {{127.0.0.0}}-{{127.0.0.31}}`

- Scan an IP network with a custom net mask:

`arp-scan {{10.0.0.0}}:{{255.255.255.0}}`
