---
title: "Create F2FS Filesystem - Format Partitions with mkfs.f2fs | Online Free DevTools by Hexmos"
name: mkfs.f2fs
path: /freedevtools/tldr/linux/mkfs.f2fs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkfs.f2fs/"
description: "Format partitions with mkfs.f2fs to create F2FS filesystems easily.  Manage your storage efficiently using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - F2FS filesystem creation
  - F2FS partition formatting
  - mkfs.f2fs command
  - Linux F2FS formatting
  - command-line filesystem formatting
  - F2FS volume label creation
  - create F2FS filesystem
  - format partition F2FS
  - manage F2FS partitions
  - linux filesystem tools
features:
  - Creates new F2FS filesystems on specified partitions.
  - Allows specifying a volume label for the new filesystem.
  - Supports formatting of block devices.
  - Provides command-line interface for easy integration with scripts.
  - Offers a robust and efficient method for F2FS filesystem creation.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkfs.f2fs

> Create an F2FS filesystem inside a partition.
> More information: <https://manned.org/mkfs.f2fs>.

- Create an F2FS filesystem inside partition Y on device X:

`sudo mkfs.f2fs {{/dev/sdXY}}`

- Create an F2FS filesystem with a volume label:

`sudo mkfs.f2fs -l {{volume_label}} {{/dev/sdXY}}`
