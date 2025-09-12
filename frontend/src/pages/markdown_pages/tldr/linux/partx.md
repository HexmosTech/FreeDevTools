---
title: "Partition Table - Parse Partitions with partx | Free DevTools"
name: partx
path: /freedevtools/tldr/linux/partx
canonical: "https://hexmos.com/freedevtools/tldr/linux/partx/"
description: "Parse partitions with partx on Linux. Easily list, add, and delete partition entries. Manage disk partitions efficiently. Free online tool, no registration required."
category: linux
keywords:
- linux partition table
- parse partition table
- partx command
- disk partition management
- block device partitions
- kernel partition updates
- partition entry manipulation
- linux disk utility
- partition table reader
- disk image partitions
features:
- List partitions on a block device or disk image
- Add partitions from a device to the kernel
- Delete partitions from the kernel's partition table
- Parse and recognize partition tables
- Update kernel with partition information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# partx

> Parse a partition table and tell the kernel about it.
> More information: <https://manned.org/partx>.

- List the partitions on a block device or disk image:

`sudo partx {{[-l|--list]}} {{path/to/device_or_disk_image}}`

- Add all the partitions found in a given block device to the kernel:

`sudo partx {{[-a|--add]}} {{[-v|--verbose]}} {{path/to/device_or_disk_image}}`

- Delete all the partitions found from the kernel (does not alter partitions on disk):

`sudo partx {{[-d|--delete]}} {{path/to/device_or_disk_image}}`
