---
title: "Control Network Devices - nmcli Device | Online Free DevTools by Hexmos"
name: nmcli-device
path: /freedevtools/tldr/linux/nmcli-device
canonical: "https://hexmos.com/freedevtools/tldr/linux/nmcli-device/"
description: "Control network devices with nmcli Device. Manage interfaces, Wi-Fi connections, and network configurations easily using command line. Free online tool, no registration required."
category: linux
keywords:
  - network device control
  - nmcli network manager
  - linux network configuration
  - command line network tool
  - wifi connection manager
  - network interface management
  - nmcli device status
  - wireless network scanner
  - linux wifi connect
  - command line network utility
features:
  - List network device statuses
  - Scan for available Wi-Fi networks
  - Connect to Wi-Fi networks with SSID
  - Show Wi-Fi password and QR code
  - Display detailed device information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nmcli device

> Manage network interfaces and establish new Wi-Fi connections using NetworkManager.
> More information: <https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nmcli.html#device>.

- Print the statuses of all network interfaces:

`nmcli {{[d|device]}}`

- Print the available Wi-Fi access points:

`nmcli {{[d|device]}} {{[w|wifi]}}`

- Connect to a Wi-Fi network with the specified SSID (you will be prompted for a password):

`nmcli {{[d|device]}} {{[w|wifi]}} {{[c|connect]}} {{ssid}} {{[-a|--ask]}}`

- Print the password and QR code for the current Wi-Fi network:

`nmcli {{[d|device]}} {{[w|wifi]}} {{[s|show-password]}}`

- Print detailed information about a device:

`nmcli {{[d|device]}} {{[sh|show]}} {{wlan0}}`
