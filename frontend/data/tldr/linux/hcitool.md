---
title: "Control Bluetooth Devices - hcitool Command | Online Free DevTools by Hexmos"
name: hcitool
path: "/freedevtools/tldr/linux/hcitool/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/hcitool/"
description: "Control Bluetooth devices with hcitool. Monitor connections, configure settings, and send commands to Bluetooth devices. Free online tool, no registration required."
category: linux
keywords:
  - bluetooth control linux
  - bluetooth device scan
  - bluetooth connection manager
  - hcitool command reference
  - bluetooth device information
  - bluetooth link quality check
  - bluetooth transmit power
  - bluetooth authentication tool
  - bluetooth mac address lookup
  - linux bluetooth utility
features:
  - Scan for nearby Bluetooth devices
  - Display the MAC address of Bluetooth devices
  - Fetch detailed information about a remote Bluetooth device
  - Check the link quality to a Bluetooth device
  - Modify Bluetooth transmit power levels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hcitool

> Monitor, configure connections, and send special commands to Bluetooth devices.
> More information: <https://manned.org/hcitool>.

- Scan for Bluetooth devices:

`hcitool scan`

- Output the name of a device, returning its MAC address:

`hcitool name {{bdaddr}}`

- Fetch information about a remote Bluetooth device:

`hcitool info {{bdaddr}}`

- Check the link quality to a Bluetooth device:

`hcitool lq {{bdaddr}}`

- Modify the transmit power level:

`hcitool tpl {{bdaddr}} {{0|1}}`

- Display the link policy:

`hcitool lp`

- Request authentication with a specific device:

`hcitool auth {{bdaddr}}`

- Display local devices:

`hcitool dev`
