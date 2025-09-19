---
title: "Aireplay-ng Inject Packets - Control Wireless Network | Online Free DevTools by Hexmos"
name: aireplay-ng
path: /freedevtools/tldr/common/aireplay-ng
canonical: "https://hexmos.com/freedevtools/tldr/common/aireplay-ng/"
description: "Inject packets with aireplay-ng, controlling wireless network traffic. Disassociate clients and test network security vulnerabilities. Free online tool, no registration required."
category: common
keywords:
- aireplay-ng packet injection
- wireless network packet injection
- aircrack-ng attack tool
- linux wireless attack
- wifi disassociation attack
- network security testing linux
- wifi packet crafting linux
- aireplay-ng deauthentication
- wireless intrusion detection
- aircrack-ng suite
features:
- Inject arbitrary packets into wireless networks
- Perform deauthentication attacks to disconnect clients
- Craft custom packets for network testing
- Specify target MAC addresses for packet injection
- Control the number of packets injected
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aireplay-ng

> Inject packets into a wireless network.
> Part of `aircrack-ng`.
> More information: <https://www.aircrack-ng.org/doku.php?id=aireplay-ng>.

- Send a specific number of disassociate packets given an access point's MAC address, a client's MAC address and an interface:

`sudo aireplay-ng --deauth {{count}} --bssid {{ap_mac}} --dmac {{client_mac}} {{interface}}`
