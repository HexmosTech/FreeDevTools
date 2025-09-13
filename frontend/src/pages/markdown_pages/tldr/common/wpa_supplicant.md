---
title: "WPA Supplicant - Manage Wireless Networks | Free DevTools"
name: wpa_supplicant
path: /freedevtools/tldr/common/wpa_supplicant
canonical: "https://hexmos.com/freedevtools/tldr/common/wpa_supplicant/"
description: "Manage wireless networks with WPA Supplicant. Securely join protected Wi-Fi networks and configure network settings. Free online tool, no registration required."
category: common
keywords:
- Wireless network manager
- WPA supplicant configuration
- Wi-Fi security setup
- Linux network configuration
- Command line network tool
- Wireless profile management
- Enterprise Wi-Fi setup
- Network authentication tool
- Wi-Fi password management
- WPA2 network connection
features:
- Connect to protected wireless networks
- Run in daemon mode for background operation
- Configure network interfaces for wireless access
- Automate wireless network connections
- Manage multiple wireless network profiles
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wpa_supplicant

> Manage protected wireless networks.
> More information: <https://manned.org/wpa_supplicant.1>.

- Join a protected wireless network:

`wpa_supplicant -i {{interface}} -c {{path/to/wpa_supplicant_conf.conf}}`

- Join a protected wireless network and run it in a daemon:

`wpa_supplicant -B -i {{interface}} -c {{path/to/wpa_supplicant_conf.conf}}`
