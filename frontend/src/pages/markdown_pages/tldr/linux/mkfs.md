---
title: "Create Filesystem - Format Partitions with mkfs | Online Free DevTools by Hexmos"
name: mkfs
path: /freedevtools/tldr/linux/mkfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkfs/"
description: "Create filesystem structures with mkfs. Format disk partitions to various types like ext4 or ntfs, checking for bad blocks. Free online tool, no registration required."
category: linux
keywords:
  - linux filesystem format
  - ext4 filesystem create
  - ntfs filesystem create
  - disk partition format
  - mkfs linux command
  - filesystem bad block check
  - linux partition manager
  - command line filesystem
  - terminal disk format
  - block device filesystem
features:
  - Format partitions with various filesystem types (ext2, ext4, ntfs)
  - Create a new Linux filesystem on a specified partition
  - Check for bad blocks during filesystem creation
  - Specify the filesystem type using command-line options
  - Build filesystems on block devices using mkfs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkfs

> Build a Linux filesystem on a hard disk partition.
> This command is deprecated in favor of filesystem specific mkfs.type utils.
> More information: <https://manned.org/mkfs>.

- Build a Linux ext2 filesystem on a partition:

`mkfs {{/dev/sdXY}}`

- Build a filesystem of a specified type:

`mkfs {{[-t|--type]}} {{ext4}} {{/dev/sdXY}}`

- Build a filesystem of a specified type and check for bad blocks:

`mkfs -c {{[-t|--type]}} {{ntfs}} {{/dev/sdXY}}`
