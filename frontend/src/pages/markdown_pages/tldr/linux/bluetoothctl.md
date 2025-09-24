---
title: "Bluetooth Control - Manage Bluetooth Devices | Online Free DevTools by Hexmos"
name: bluetoothctl
path: /freedevtools/tldr/linux/bluetoothctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/bluetoothctl/"
description: "Manage Bluetooth devices effectively with Bluetoothctl. Control power, pair devices, and troubleshoot connections using the command line. Free online tool, no registration required."
category: linux
keywords:
  - bluetooth device management
  - bluetooth command line
  - bluetoothctl commands
  - linux bluetooth control
  - macos bluetooth control
  - bluetooth connection manager
  - bluetooth pairing tool
  - bluetooth troubleshooting
  - bluetooth adapter control
  - bluetooth device removal
features:
  - Power Bluetooth adapters on or off
  - Pair with Bluetooth devices via command line
  - Remove paired Bluetooth devices
  - Connect to and disconnect from paired Bluetooth devices
  - Display helpful information about bluetoothctl commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bluetoothctl

> Manage Bluetooth devices.
> More information: <https://manned.org/bluetoothctl>.

- Enter the `bluetoothctl` shell:

`bluetoothctl`

- List all known devices:

`bluetoothctl devices`

- Power the Bluetooth controller on or off:

`bluetoothctl power {{on|off}}`

- Pair with a device:

`bluetoothctl pair {{mac_address}}`

- Remove a device:

`bluetoothctl remove {{mac_address}}`

- Connect to a paired device:

`bluetoothctl connect {{mac_address}}`

- Disconnect from a paired device:

`bluetoothctl disconnect {{mac_address}}`

- Display help:

`bluetoothctl help`
