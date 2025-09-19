---
title: "Network Scanner - Discover Live Hosts with Netdiscover | Online Free DevTools by Hexmos"
name: netdiscover
path: /freedevtools/tldr/common/netdiscover
canonical: "https://hexmos.com/freedevtools/tldr/common/netdiscover/"
description: "Discover live hosts on your network with Netdiscover, a powerful network scanner. Identify active devices and troubleshoot network issues. Free online tool, no registration required."
category: common
keywords:
- network scanner linux
- live host discovery
- network discovery tool
- network troubleshooting
- active host scanner
- subnet scanner
- network interface scanner
- arp scanner
- lan network scanner
- common network scanner
features:
- Scan specified IP ranges for active hosts
- Discover devices using ARP requests
- Identify network interface for scanning
- Display MAC addresses of discovered hosts
- Monitor network activity for new hosts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# netdiscover

> Network scanner used to find live hosts on a network.
> More information: <https://github.com/netdiscover-scanner/netdiscover>.

- Scan the IP range on the network interface for active hosts:

`netdiscover -r {{172.16.6.0/23}} -i {{ens244}}`
