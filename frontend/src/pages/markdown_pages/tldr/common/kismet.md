---
title: "Wireless Network Detector - Analyze Networks with Kismet | Online Free DevTools by Hexmos"
name: kismet
path: /freedevtools/tldr/common/kismet
canonical: "https://hexmos.com/freedevtools/tldr/common/kismet/"
description: "Analyze wireless networks with Kismet, the powerful wireless network detector and sniffer. Identify devices, capture packets and detect intrusions. Free online tool, no registration required."
category: common
keywords:
- Wireless network detector
- Wireless network analyzer
- Packet capture tool
- Wireless intrusion detection system
- Network wardriving tool
- Linux wireless scanner
- Kismet wireless sniffer
- Wireless device identifier
- Network security tool
- Command line network analysis
features:
- Capture wireless packets from a specified interface
- Monitor multiple wireless channels simultaneously
- Log captured network data to an SQLite database
- Enable alerts for specific wireless network events
- Display detailed information about access point packets
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kismet

> A wireless network and device detector, sniffer, wardriving tool, and WIDS (wireless intrusion detection) framework.
> More information: <https://www.kismetwireless.net/docs/readme/starting/commandline/>.

- Capture packets from a specific wireless interface:

`sudo kismet -c {{wlan0}}`

- Monitor multiple channels on a wireless interface:

`sudo kismet -c {{wlan0,wlan1}} -m`

- Capture packets and save them to a specific directory:

`sudo kismet -c {{wlan0}} -d {{path/to/output}}`

- Start Kismet with a specific configuration file:

`sudo kismet -c {{wlan0}} {{[-f|--config-file]}} {{path/to/config.conf}}`

- Monitor and log data to an SQLite database:

`sudo kismet -c {{wlan0}} --log-to-db`

- Monitor using a specific data source:

`sudo kismet -c {{wlan0}} --data-source={{rtl433}}`

- Enable alerts for specific events:

`sudo kismet -c {{wlan0}} --enable-alert={{new_ap}}`

- Display detailed information about a specific AP's packets:

`sudo kismet -c {{wlan0}} --info {{BSSID}}`
