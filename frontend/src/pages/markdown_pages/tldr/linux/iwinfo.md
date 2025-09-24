---
title: "Iwinfo - Control Wireless Interfaces | Online Free DevTools by Hexmos"
name: iwinfo
path: /freedevtools/tldr/linux/iwinfo
canonical: "https://hexmos.com/freedevtools/tldr/linux/iwinfo/"
description: "Control wireless interfaces instantly with iwinfo on Linux. Monitor network connections, scan for networks, and troubleshoot connectivity issues with this command. Free online tool, no registration required."
category: linux
keywords:
- linux wireless interface control
- iwinfo network information
- openwrt wireless monitoring
- linux network scanner
- wireless interface diagnostics
- linux network troubleshooting
- iwinfo association list
- wifi interface information
- linux wireless configuration
- command-line network tools
features:
- List available wireless interfaces
- Display detailed wireless interface information
- Scan for nearby wireless networks
- Show connected devices on the network
- List supported frequency channels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iwinfo

> Retrieve information about wireless interfaces on OpenWrt.
> More information: <https://openwrt.org/docs/guide-developer/ubus/iwinfo>.

- List all available wireless interfaces:

`iwinfo`

- Display detailed information on a specific wireless interface:

`iwinfo {{interface}} info`

- Scan for nearby wireless networks visible to the interface:

`iwinfo {{interface}} scan`

- List connected devices:

`iwinfo {{interface}} assoclist`

- List channels supported by the interface:

`iwinfo {{interface}} freqlist`

- List available transmit power levels for the interface:

`iwinfo {{interface}} txpowerlist`

- Display help:

`iwinfo h`
