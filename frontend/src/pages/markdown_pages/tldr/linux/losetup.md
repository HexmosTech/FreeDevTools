---
title: "Control Loop Devices with losetup | Online Free DevTools by Hexmos"
name: losetup
path: /freedevtools/tldr/linux/losetup
canonical: "https://hexmos.com/freedevtools/tldr/linux/losetup/"
description: "Control and manage loop devices with the losetup command.  Create, attach, and detach loop devices easily and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - loop device control
  - losetup command
  - linux loop device
  - manage loop devices
  - loop device setup
  - attach loop device
  - detach loop device
  - create loop device
  - loop device management
  - linux system administration
features:
  - Attach files to loop devices.
  - Detach loop devices.
  - List all loop devices with detailed information.
  - Create read-only loop devices.
  - Scan for partitions on attached devices.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# losetup

> Set up and control loop devices.
> More information: <https://manned.org/losetup>.

- List loop devices with detailed info:

`losetup {{[-a|--all]}}`

- Attach a file to a given loop device:

`sudo losetup {{/dev/loop}} /{{path/to/file}}`

- Attach a file to a new free loop device and scan the device for partitions:

`sudo losetup --show {{[-P|--partscan]}} {{[-f|--find]}} /{{path/to/file}}`

- Attach a file to a read-only loop device:

`sudo losetup {{[-r|--read-only]}} {{/dev/loop}} /{{path/to/file}}`

- Detach all loop devices:

`sudo losetup {{[-D|--detach-all]}}`

- Detach a given loop device:

`sudo losetup {{[-d|--detach]}} {{/dev/loop}}`
