---
title: "Notify Partitions - Control Linux Partition Tables | Free DevTools"
name: partprobe
path: /freedevtools/tldr/linux/partprobe
canonical: "https://hexmos.com/freedevtools/tldr/linux/partprobe/"
description: "Notify partitions instantly with Partprobe, control Linux partition tables. Update kernel with disk changes and manage devices. Free online tool, no registration required."
category: linux
keywords:
- linux partition table update
- partition table notification
- disk partition management linux
- command line partition tool
- linux kernel update partitions
- partprobe linux
- disk partition changes
- device partition summary
- cli partition management
- kernel partition notification
features:
- Update the operating system kernel about partition table changes
- Display a summary of devices and their partitions
- Perform a dry run to preview changes without applying them
- Identify newly created or modified partitions
- Rescan partition tables on block devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# partprobe

> Notify the operating system kernel of partition table changes.
> More information: <https://manned.org/partprobe>.

- Notify the operating system kernel of partition table changes:

`sudo partprobe`

- Notify the kernel of partition table changes and show a summary of devices and their partitions:

`sudo partprobe {{[-s|--summary]}}`

- Show a summary of devices and their partitions but don't notify the kernel:

`sudo partprobe {{[-s|--summary]}} {{[-d|--dry-run]}}`
