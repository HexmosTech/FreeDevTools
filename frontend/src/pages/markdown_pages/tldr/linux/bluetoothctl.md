---
title: "Bluetooth Control - Manage Bluetooth Devices | Free DevTools"
name: bluetoothctl
path: /freedevtools/tldr/unknown/bluetoothctl
canonical: "https://hexmos.com/freedevtools/tldr/unknown/bluetoothctl/"
description: "Manage Bluetooth devices effectively with Bluetoothctl. Control power, pair devices, and troubleshoot connections using the command line. Free online tool, no registration required."
category: unknown
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
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
