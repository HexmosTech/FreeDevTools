---
title: "Inputattach - Attach Devices to Input System | Online Free DevTools by Hexmos"
name: inputattach
path: /freedevtools/tldr/linux/inputattach
canonical: "https://hexmos.com/freedevtools/tldr/linux/inputattach/"
description: "Attach devices to the Linux input system with Inputattach. Configure and manage input devices using the command line interface. Free online tool, no registration required."
category: linux
keywords:
  - linux input attach
  - device input configuration
  - input system management
  - ttyACM0 device attach
  - pulse8 CEC device
  - linux command line input
  - /dev/input/ configuration
  - input device control
  - linux peripheral attachment
  - input device manager
features:
  - Attach devices to the Linux input system
  - Configure input devices via command line
  - Manage /dev/input/ devices
  - Attach Pulse8 CEC devices
  - Display command line help information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# inputattach

> Attach a device to the Linux input system.
> The input devices are presented as files in `/dev/input/`.
> More information: <https://manned.org/inputattach>.

- Attach a Pulse8 CEC device to the input system:

`inputattach --pulse8-cec {{/dev/ttyACM0}}`

- Display help:

`inputattach --help`
