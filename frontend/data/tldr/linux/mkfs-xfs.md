---
title: "Create XFS Filesystem - Format Partitions with mkfs.xfs | Online Free DevTools by Hexmos"
name: mkfs.xfs
path: "/freedevtools/tldr/linux/mkfs-xfs/"
canonical: "https://hexmos-com/freedevtools/tldr/linux/mkfs-xfs/"
description: "Format partitions with mkfs.xfs to create XFS filesystems quickly and easily.  Manage disk space and optimize storage with this powerful command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - XFS filesystem creation
  - XFS partition formatting
  - mkfs.xfs command
  - Linux filesystem creation
  - XFS volume label
  - command-line filesystem tool
  - disk formatting linux
  - partition management linux
  - create XFS
  - format XFS
features:
  - Creates a new XFS filesystem on a specified partition.
  - Allows assigning a volume label to the new filesystem.
  - Supports various XFS filesystem options for advanced configuration.
  - Enables efficient storage management through XFS features.
  - Provides a command-line interface for easy integration into scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkfs.xfs

> Create an XFS filesystem inside a partition.
> More information: <https://manned.org/mkfs.xfs>.

- Create an XFS filesystem inside partition Y on device X:

`sudo mkfs.xfs {{/dev/sdXY}}`

- Create an XFS filesystem with a volume label:

`sudo mkfs.xfs -L {{volume_label}} {{/dev/sdXY}}`
