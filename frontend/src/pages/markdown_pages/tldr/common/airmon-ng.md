---
title: "Control Wireless Devices - Airmon-ng Monitor Mode | Online Free DevTools by Hexmos"
name: airmon-ng
path: /freedevtools/tldr/common/airmon-ng
canonical: "https://hexmos.com/freedevtools/tldr/common/airmon-ng/"
description: "Control wireless network devices with Airmon-ng to enable monitor mode and packet capturing. Troubleshoot network issues and perform security audits. Free online tool, no registration required."
category: common
keywords:
- wireless network monitor mode
- airmon-ng monitor mode
- aircrack-ng wireless security
- linux wireless tools
- network interface monitor
- wireless packet capturing
- wifi monitor mode linux
- wireless device configuration
- network security auditing
- wlan interface control
features:
- Activate monitor mode on wireless interfaces
- List available wireless network devices
- Stop conflicting processes using wireless devices
- Deactivate monitor mode on wireless interfaces
- Configure wireless devices for packet capturing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# airmon-ng

> Activate monitor mode on wireless network devices.
> Part of `aircrack-ng`.
> More information: <https://www.aircrack-ng.org/doku.php?id=airmon-ng>.

- List wireless devices and their statuses:

`sudo airmon-ng`

- Turn on monitor mode for a specific device:

`sudo airmon-ng start {{wlan0}}`

- Kill disturbing processes that use wireless devices:

`sudo airmon-ng check kill`

- Turn off monitor mode for a specific network interface:

`sudo airmon-ng stop {{wlan0mon}}`
