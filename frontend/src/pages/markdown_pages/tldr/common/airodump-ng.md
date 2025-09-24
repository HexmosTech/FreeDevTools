---
title: "Capture Wireless Networks - Airodump-ng Packet Capture | Online Free DevTools by Hexmos"
name: airodump-ng
path: /freedevtools/tldr/common/airodump-ng
canonical: "https://hexmos.com/freedevtools/tldr/common/airodump-ng/"
description: "Capture wireless network data with Airodump-ng. Analyze packets and display network information. Enhance your network security analysis. Free online tool, no registration required."
category: common
keywords:
- wireless network capture
- packet capture analysis
- airodump-ng packet sniffer
- wifi network monitoring
- wireless network security
- aircrack-ng suite
- linux network tools
- 802.11 network analyzer
- wireless intrusion detection
- network traffic analysis
features:
- Capture 802.11 frames in real time
- Display wireless network information (BSSID, ESSID, channel)
- Filter captured packets based on BSSID
- Write captured data to a file for later analysis
- Monitor network traffic on specific channels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# airodump-ng

> Capture packets and display information about wireless networks.
> Part of `aircrack-ng`.
> More information: <https://www.aircrack-ng.org/doku.php?id=airodump-ng>.

- Capture packets and display information about wireless network(s) on the 2.4GHz band:

`sudo airodump-ng {{interface}}`

- Capture packets and display information about wireless network(s) on the 5GHz band:

`sudo airodump-ng {{interface}} --band a`

- Capture packets and display information about wireless network(s) on both 2.4GHz and 5GHz bands:

`sudo airodump-ng {{interface}} --band abg`

- Capture packets and display information about a wireless network given the MAC address and channel, and save the output to a file:

`sudo airodump-ng --channel {{channel}} --write {{path/to/file}} --bssid {{mac}} {{interface}}`
