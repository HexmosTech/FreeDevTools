---
title: "Aircrack-ng Crack WEP/WPA Keys | Free DevTools"
name: aircrack-ng
path: /freedevtools/tldr/aircrack/aircrack-ng
canonical: "https://hexmos.com/freedevtools/tldr/aircrack/aircrack-ng/"
description: "Crack WEP and WPA keys with Aircrack-ng. Recover wireless passwords from captured network packets effectively. Free online tool, no registration required."
category: common
keywords:
- WEP key cracker
- WPA key cracker
- Aircrack-ng password recovery
- Wireless password cracking
- Network security testing
- Packet capture analysis
- WiFi security audit
- Linux password cracking
- Command-line key cracking
- Wireless network penetration testing
features:
- Crack WEP keys from captured packets
- Crack WPA/WPA2 keys from handshake data
- Use wordlists for password cracking
- Utilize multiple CPU threads for faster cracking
- Specify ESSID and BSSID for targeted cracking
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aircrack-ng

> Crack WEP and WPA/WPA2 keys from handshake in captured packets.
> Part of Aircrack-ng network software suite.
> More information: <https://www.aircrack-ng.org/doku.php?id=aircrack-ng>.

- Crack key from capture file using [w]ordlist:

`aircrack-ng -w {{path/to/wordlist.txt}} {{path/to/capture.cap}}`

- Crack key using multiple CPU threads from capture file using [w]ordlist:

`aircrack-ng -p {{number}} -w {{path/to/wordlist.txt}} {{path/to/capture.cap}}`

- Crack key from capture file using [w]ordlist and the access point's [e]ssid:

`aircrack-ng -w {{path/to/wordlist.txt}} -e {{essid}} {{path/to/capture.cap}}`

- Crack key from capture file using [w]ordlist and the access point's MAC address:

`aircrack-ng -w {{path/to/wordlist.txt}} --bssid {{mac}} {{path/to/capture.cap}}`
