---
title: "xinput Control - Manage Input Devices | Online Free DevTools by Hexmos"
name: xinput
path: /freedevtools/tldr/linux/xinput
canonical: "https://hexmos.com/freedevtools/tldr/linux/xinput/"
description: "Control and manage Linux input devices with xinput.  List, enable, disable, and reconfigure input devices using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - xinput command
  - linux input devices
  - manage input devices
  - xinput list
  - xinput enable
  - xinput disable
  - xinput float
  - xinput reattach
  - xinput properties
  - xinput settings
features:
  - List all connected input devices.
  - Enable or disable input devices.
  - Disconnect and reconnect input devices from their master device.
  - Query detailed settings of any input device.
  - Modify specific properties of input devices.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xinput

> List available input devices, query information about a device and change input device settings.
> More information: <https://manned.org/xinput>.

- List all input devices:

`xinput list`

- Disable an input:

`xinput disable {{id}}`

- Enable an input:

`xinput enable {{id}}`

- Disconnect an input from its master:

`xinput float {{id}}`

- Reattach an input as slave to a master:

`xinput reattach {{id}} {{master_id}}`

- List settings of an input device:

`xinput list-props {{id}}`

- Change a setting of an input device:

`xinput set-prop {{id}} {{setting_id}} {{value}}`
