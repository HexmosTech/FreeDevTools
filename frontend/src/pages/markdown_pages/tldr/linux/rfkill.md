---
title: "Control Wireless Devices with rfkill | Online Free DevTools by Hexmos"
name: rfkill
path: /freedevtools/tldr/linux/rfkill
canonical: "https://hexmos.com/freedevtools/tldr/linux/rfkill/"
description: "Control wireless devices with the rfkill command.  Manage Bluetooth, Wi-Fi, and other wireless interfaces easily. Free online tool, no registration required."
category: linux
keywords:
  - rfkill command
  - wireless device control
  - linux wireless management
  - rfkill block
  - rfkill unblock
  - rfkill list
  - rfkill json output
  - command-line wireless
  - system wireless control
  - manage wireless interfaces
features:
  - List all wireless devices and their status.
  - Block specific wireless devices by type (e.g., Bluetooth, Wi-Fi).
  - Unblock specific wireless devices by type.
  - View device information with customized output columns.
  - Output device information in JSON format for easy parsing.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rfkill

> Enable and disable wireless devices.
> More information: <https://manned.org/rfkill>.

- List devices:

`rfkill`

- Filter by columns:

`rfkill {{[-o|--output]}} {{ID,TYPE,DEVICE}}`

- Block devices by type (e.g. bluetooth, wlan):

`rfkill block {{bluetooth}}`

- Unblock devices by type (e.g. bluetooth, wlan):

`rfkill unblock {{wlan}}`

- Output in JSON format:

`rfkill {{[-J|--json]}}`
