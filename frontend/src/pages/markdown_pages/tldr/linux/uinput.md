---
title: "Uinput - Control Input Events | Online Free DevTools by Hexmos"
name: uinput
path: /freedevtools/tldr/linux/uinput
canonical: "https://hexmos.com/freedevtools/tldr/linux/uinput/"
description: "Control input events with uinput, a powerful command-line tool for Linux.  Create and manage virtual input devices, merge YAML descriptions, and intercept events. Free online tool, no registration required."
category: linux
keywords:
  - linux input events
  - uinput command
  - virtual keyboard linux
  - linux device creation
  - yaml device configuration
  - input event manipulation
  - linux system control
  - uinput yaml merge
  - virtual input device
  - linux input driver
features:
  - Create virtual input devices.
  - Intercept and write input events.
  - Merge YAML device descriptions.
  - Merge device descriptions from existing nodes.
  - Control keyboard input virtually.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uinput

> Intercept and write input events to a virtual keyboard device using /dev/uinput.
> More information: <https://gitlab.com/interception/linux/tools/-/tree/master#uinput>.

- Show resulting YAML device description merge and exit (dry-run):

`uinput -p`

- Merge YAML device description(s) to resulting virtual device:

`sudo uinput -c {{path/to/device1.yaml path/to/device2.yaml ...}}`

- Merge reference device description from device node(s) to resulting virtual device:

`sudo uinput -d {{/dev/input/eventX /dev/input/eventY ...}}`
