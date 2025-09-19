---
title: "WPA CLI - Manage Wireless Networks | Online Free DevTools by Hexmos"
name: wpa_cli
path: /freedevtools/tldr/linux/wpa_cli
canonical: "https://hexmos.com/freedevtools/tldr/linux/wpa_cli/"
description: "Configure and manage wireless networks with WPA CLI.  Scan for networks, add networks, set SSIDs, and save configurations. Free online tool, no registration required."
category: linux
keywords:
  - wpa_cli commands
  - wpa_cli network configuration
  - wireless network management
  - linux wireless commands
  - wifi configuration linux
  - wpa_supplicant cli
  - network interface management
  - scan wifi networks
  - connect to wifi cli
  - manage wifi profiles
features:
  - Scan for available Wi-Fi networks.
  - Add new wireless networks.
  - Configure SSID and other network parameters.
  - Enable and disable wireless networks.
  - Save wireless network configurations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wpa_cli

> Add and configure wlan interfaces.
> More information: <https://manned.org/wpa_cli>.

- Scan for available networks:

`sudo wpa_cli scan`

- Show scan results:

`sudo wpa_cli scan_results`

- Add a network:

`sudo wpa_cli {{[add_n|add_network]}} {{number}}`

- Set a network's SSID:

`sudo wpa_cli {{[set_n|set_network]}} {{number}} ssid "{{SSID}}"`

- Enable network:

`sudo wpa_cli {{[en|enable_network]}} {{number}}`

- Save config:

`sudo wpa_cli {{[sa|save_config]}}`
