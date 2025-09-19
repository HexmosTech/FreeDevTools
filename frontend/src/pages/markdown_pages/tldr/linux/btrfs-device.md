---
title: "Btrfs Device Manager - Control Filesystem Devices | Online Free DevTools by Hexmos"
name: btrfs-device
path: /freedevtools/tldr/linux/btrfs-device
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-device/"
description: "Manage btrfs filesystem devices efficiently with the btrfs-device command. Add, remove, and scan devices; view detailed usage statistics. Free online tool, no registration required."
category: linux
keywords:
  - btrfs device management
  - btrfs filesystem tools
  - linux btrfs commands
  - btrfs device add
  - btrfs device remove
  - btrfs device scan
  - btrfs device statistics
  - btrfs disk usage
  - btrfs filesystem administration
  - linux system administration
features:
  - Add new devices to a btrfs filesystem.
  - Remove devices from a btrfs filesystem.
  - Display detailed error statistics for btrfs devices.
  - Scan all disks for btrfs filesystems and inform the kernel.
  - Show per-disk allocation statistics for improved capacity planning.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# btrfs device

> Manage devices in a btrfs filesystem.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-device.html>.

- Add one or more devices to a btrfs filesystem:

`sudo btrfs {{[d|device]}} {{[a|add]}} {{path/to/block_device1 path/to/block_device2 ...}} {{path/to/btrfs_filesystem}}`

- Remove a device from a btrfs filesystem:

`sudo btrfs {{[d|device]}} {{[rem|remove]}} {{path/to/device1|device_id1 path/to/device2|device_id2 ...}}`

- Display error statistics:

`sudo btrfs {{[d|device]}} {{[st|stats]}} {{path/to/btrfs_filesystem}}`

- Scan all disks and inform the kernel of all detected btrfs filesystems:

`sudo btrfs {{[d|device]}} {{[sc|scan]}} {{[-d|--all-devices]}}`

- Display detailed per-disk allocation statistics:

`sudo btrfs {{[d|device]}} {{[u|usage]}} {{path/to/btrfs_filesystem}}`
