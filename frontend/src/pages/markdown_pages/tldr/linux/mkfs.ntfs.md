---
title: "Create NTFS Filesystem - mkfs.ntfs Command | Online Free DevTools by Hexmos"
name: mkfs.ntfs
path: /freedevtools/tldr/linux/mkfs.ntfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkfs.ntfs/"
description: "Create NTFS filesystems with mkfs.ntfs. Format partitions, assign volume labels, and specify UUIDs using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - NTFS filesystem creation
  - NTFS formatting command
  - mkfs.ntfs command
  - linux filesystem creation
  - partition formatting NTFS
  - create NTFS volume
  - assign NTFS UUID
  - NTFS volume label
  - command-line NTFS tool
  - mkfs NTFS tutorial
features:
  - Formats partitions as NTFS filesystems.
  - Assigns volume labels to NTFS volumes.
  - Specifies a unique UUID for the filesystem.
  - Creates NTFS filesystems on specified devices.
  - Supports various command-line options for customization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkfs.ntfs

> Create a NTFS filesystem inside a partition.
> More information: <https://manned.org/mkfs.ntfs>.

- Create a NTFS filesystem inside partition Y on device X:

`mkfs.ntfs {{/dev/sdXY}}`

- Create filesystem with a volume-label:

`mkfs.ntfs {{[-L|--label]}} {{volume_label}} {{/dev/sdXY}}`

- Create filesystem with specific UUID:

`mkfs.ntfs {{[-U|--with-uuid]}} {{UUID}} {{/dev/sdXY}}`
