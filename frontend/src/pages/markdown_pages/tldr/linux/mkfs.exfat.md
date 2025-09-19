---
title: "Create exFAT Filesystem - Format Partitions | Online Free DevTools by Hexmos"
name: mkfs.exfat
path: /freedevtools/tldr/linux/mkfs.exfat
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkfs.exfat/"
description: "Create exFAT filesystem with mkfs.exfat. Format partitions and set volume labels for optimal data storage and compatibility. Free online tool, no registration required."
category: linux
keywords:
  - exFAT filesystem creation
  - exFAT format utility
  - partition formatting
  - disk management tool
  - volume label setting
  - file system creation
  - storage formatting
  - mkfs.exfat command
  - linux filesystem
  - exFAT partition
features:
  - Create exFAT filesystem on a specified partition
  - Set a custom volume label for the filesystem
  - Define a unique volume ID (GUID) for the filesystem
  - Format partitions for data storage
  - Manage disk partitions via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkfs.exfat

> Create an exfat filesystem inside a partition.
> More information: <https://manned.org/mkfs.exfat>.

- Create an exfat filesystem inside partition Y on device X:

`mkfs.exfat {{/dev/sdXY}}`

- Create filesystem with a volume-name:

`mkfs.exfat {{[-L|--volume-label]}} {{volume_name}} {{/dev/sdXY}}`

- Create filesystem with a volume-id:

`mkfs.exfat {{[-U|--volume-guid]}} {{volume_id}} {{/dev/sdXY}}`
