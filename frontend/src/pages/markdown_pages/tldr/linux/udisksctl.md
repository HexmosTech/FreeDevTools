---
title: "udisksctl - Control Storage Devices | Online Free DevTools by Hexmos"
name: udisksctl
path: /freedevtools/tldr/linux/udisksctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/udisksctl/"
description: "Control storage devices with udisksctl. Manage disks, partitions, and mounts with ease using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - disk device control
  - udisksctl commands
  - linux disk management
  - partition management udisksctl
  - mount unmount udisksctl
  - udisksctl power management
  - storage device monitoring udisksctl
  - block device control udisksctl
  - linux storage tools
  - command line disk utility
features:
  - Mount and unmount partitions
  - Manage disk power states
  - Get detailed device information
  - Monitor storage device events
  - Interact with udisksd daemon
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# udisksctl

> Interact with `udisksd` to query and manipulate storage devices.
> More information: <https://storaged.org/doc/udisks2-api/latest/udisksctl.1.html>.

- Show high-level information about disk drives and block devices:

`udisksctl status`

- Show detailed information about a device:

`udisksctl info {{[-b|--block-device]}} {{/dev/sdX}}`

- Show detailed information about a device partition:

`udisksctl info {{[-b|--block-device]}} {{/dev/sdXN}}`

- Mount a device partition and prints the mount point:

`udisksctl mount {{[-b|--block-device]}} {{/dev/sdXN}}`

- Unmount a device partition:

`udisksctl unmount {{[-b|--block-device]}} {{/dev/sdXN}}`

- Power off a device to safely remove it:

`udisksctl power-off {{[-b|--block-device]}} {{/dev/sdX}}`

- Monitor the daemon for events:

`udisksctl monitor`
