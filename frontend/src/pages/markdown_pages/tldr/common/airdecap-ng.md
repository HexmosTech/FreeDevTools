---
title: "Decrypt Wireless Capture - Aircrack-ng Decryption | Free DevTools"
name: airdecap-ng
path: /freedevtools/tldr/common/airdecap-ng
canonical: "https://hexmos.com/freedevtools/tldr/common/airdecap-ng/"
description: "Decrypt wireless packets with Aircrack-ng airdecap-ng. Decrypt WEP, WPA, and WPA2 encrypted files, recover passwords. Free online tool, no registration required."
category: common
keywords:
- wireless decryption
- aircrack-ng decryption
- pcap decryption
- wep decryption
- wpa decryption
- wpa2 decryption
- wireless password recovery
- packet analysis
- network security
- capture file decryption
features:
- Decrypts WEP encrypted capture files using a hexadecimal key.
- Decrypts WPA/WPA2 encrypted capture files using ESSID and password.
- Removes wireless headers from open network capture files.
- Filters packets based on access point MAC address.
- Preserves headers while decrypting WPA/WPA2 encrypted capture files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# airdecap-ng

> Decrypt a WEP, WPA, or WPA2 encrypted capture file.
> Part of Aircrack-ng network software suite.
> More information: <https://www.aircrack-ng.org/doku.php?id=airdecap-ng>.

- Remove wireless headers from an open network capture file and use the access point's MAC address to filter:

`airdecap-ng -b {{ap_mac}} {{path/to/capture.cap}}`

- Decrypt a [w]EP encrypted capture file using the key in hex format:

`airdecap-ng -w {{hex_key}} {{path/to/capture.cap}}`

- Decrypt a WPA/WPA2 encrypted capture file using the access point's [e]ssid and [p]assword:

`airdecap-ng -e {{essid}} -p {{password}} {{path/to/capture.cap}}`

- Decrypt a WPA/WPA2 encrypted capture file preserving the headers using the access point's [e]ssid and [p]assword:

`airdecap-ng -l -e {{essid}} -p {{password}} {{path/to/capture.cap}}`

- Decrypt a WPA/WPA2 encrypted capture file using the access point's [e]ssid and [p]assword and use its MAC address to filter:

`airdecap-ng -b {{ap_mac}} -e {{essid}} -p {{password}} {{path/to/capture.cap}}`
