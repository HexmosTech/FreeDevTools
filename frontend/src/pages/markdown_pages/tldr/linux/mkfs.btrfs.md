---
title: "Create BTRFS Filesystem - Format Partitions | Online Free DevTools by Hexmos"
name: mkfs.btrfs
path: /freedevtools/tldr/linux/mkfs.btrfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkfs.btrfs/"
description: "Create BTRFS filesystem with mkfs.btrfs. Format partitions and manage storage efficiently on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- btrfs filesystem creation
- linux partition formatting
- mkfs.btrfs command
- btrfs raid configuration
- linux storage management
- btrfs filesystem label
- btrfs force format
- linux disk partitioning
- btrfs single device filesystem
- btrfs multiple device filesystem
features:
- Create BTRFS filesystems on empty partitions
- Format single-device BTRFS filesystems
- Format multi-device BTRFS filesystems with RAID1
- Set filesystem labels for easy identification
- Force overwrite existing filesystems
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkfs.btrfs

> Create a BTRFS filesystem.
> Defaults to `raid1`, which specifies 2 copies of a data block spread across 2 different devices.
> More information: <https://btrfs.readthedocs.io/en/latest/mkfs.btrfs.html>.

- Create a Btrfs filesystem on an empty partition:

`sudo mkfs.btrfs {{/dev/sdXY}}`

- Create a btrfs filesystem on a single device:

`sudo mkfs.btrfs {{[-m|--metadata]}} single {{[-d|--data]}} single {{/dev/sdX}}`

- Create a btrfs filesystem on multiple devices with raid1:

`sudo mkfs.btrfs {{[-m|--metadata]}} raid1 {{[-d|--data]}} raid1 {{/dev/sdX /dev/sdY /dev/sdZ ...}}`

- Set a label for the filesystem:

`sudo mkfs.btrfs {{[-L|--label]}} "{{label}}" {{/dev/sdX /dev/sdY ...}}`

- Overwrite existing filesystem if one is detected:

`sudo mkfs.btrfs {{[-f|--force]}} {{/dev/sdX}}`
