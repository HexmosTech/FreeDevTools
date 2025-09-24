---
title: "Fatlabel - Manage FAT32 Partition Labels | Online Free DevTools by Hexmos"
name: fatlabel
path: /freedevtools/tldr/linux/fatlabel
canonical: "https://hexmos.com/freedevtools/tldr/linux/fatlabel/"
description: "Manage FAT32 partition labels easily with Fatlabel. Get, set, or modify volume labels on FAT32 file systems. Free online tool, no registration required."
category: linux
keywords:
  - FAT32 label manager
  - FAT32 volume label
  - Disk label editor
  - Partition label tool
  - Volume label changer
  - FAT32 rename volume
  - Linux fatlabel
  - MacOS fatlabel
  - Command line disk utility
  - File system label tool
features:
  - Get the current label of a FAT32 partition
  - Set a new label for a FAT32 partition
  - Modify existing FAT32 volume labels
  - Interact with FAT32 partitions via the command line
  - Display volume label information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fatlabel

> Get or set the label of a FAT32 partition.
> More information: <https://manned.org/fatlabel>.

- Get the label of a FAT32 partition:

`fatlabel {{/dev/sda1}}`

- Set the label of a FAT32 partition:

`fatlabel {{/dev/sdc3}} "{{new_label}}"`
