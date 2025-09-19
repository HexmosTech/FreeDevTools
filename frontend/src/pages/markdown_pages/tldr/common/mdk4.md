---
title: "MDK4 WiFi Attack - Exploit WiFi Networks | Online Free DevTools by Hexmos"
name: mdk4
path: /freedevtools/tldr/common/mdk4
canonical: "https://hexmos.com/freedevtools/tldr/common/mdk4/"
description: "Exploit WiFi networks with MDK4, a powerful wireless testing tool. Perform deauthentication attacks and create fake networks. Free online tool, no registration required."
category: common
keywords:
- WiFi attack tool
- wireless network exploitation
- MDK4 WiFi tool
- IEEE 802.11 exploitation
- WiFi deauthentication attack
- fake access point generator
- aircrack-ng suite
- wireless security testing
- Linux WiFi attack
- network penetration testing
features:
- Flood access points with beacon frames to create fake networks
- Perform deauthentication attacks on all clients
- Target specific BSSIDs for deauthentication attacks
- Test WiFi network vulnerability
- Disrupt WiFi connectivity for security assessments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mdk4

> A proof-of-concept tool to exploit common IEEE 802.11 protocol weaknesses.
> Note: Exercise extreme caution as this tool can disrupt WiFi networks and disconnect nearby users.
> See also: `airodump-ng`, `airmon-ng`.
> More information: <https://github.com/aircrack-ng/mdk4>.

- Flood access points with beacon frames to create fake networks (set interface to monitor mode with `sudo airmon-ng start <wifi_interface>` if needed):

`sudo mdk4 {{wifi_interface}} b -f {{path/to/beacons.txt}}`

- Perform deauthentication attack against all clients on all BSSIDs:

`sudo mdk4 {{wifi_interface}} d`

- Perform deauthentication attack on a specific BSSID (list BSSIDs using `sudo airodump-ng <wifi_interface>`):

`sudo mdk4 {{wifi_interface}} d -B {{BSSID}}`
