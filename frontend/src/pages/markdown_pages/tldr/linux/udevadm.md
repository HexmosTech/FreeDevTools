---
title: "udevadm - Manage Linux Devices | Online Free DevTools by Hexmos"
name: udevadm
path: /freedevtools/tldr/linux/udevadm
canonical: "https://hexmos.com/freedevtools/tldr/linux/udevadm/"
description: "Manage Linux devices with udevadm, the udev device manager. Monitor events, list attributes, and trigger rules. Free online tool, no registration required."
category: linux
keywords:
- linux device manager
- udev rule trigger
- udevadm monitor events
- device attribute list
- linux udevadm control
- udev event simulator
- udev rules reload
- linux device events
- udev device info
- systemd udevadm
features:
- Monitor device events in real-time
- Inspect device attributes and properties
- Reload and apply udev rules
- Trigger udev rules manually
- Simulate device loading for testing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# udevadm

> Linux `udev` management tool.
> More information: <https://www.freedesktop.org/software/systemd/man/udevadm.html>.

- Monitor all device events:

`sudo udevadm monitor`

- Print `uevents` sent out by the kernel:

`sudo udevadm monitor {{[-k|--kernel]}}`

- Print device events after being processed by `udev`:

`sudo udevadm monitor {{[-u|--udev]}}`

- List attributes of device `/dev/sda`:

`sudo udevadm info {{[-a|--attribute-walk]}} {{/dev/sda}}`

- Reload all `udev` rules:

`sudo udevadm control {{[-R|--reload]}}`

- Trigger all `udev` rules to run:

`sudo udevadm trigger`

- Test an event run by simulating loading of `/dev/sda`:

`sudo udevadm test {{/dev/sda}}`
