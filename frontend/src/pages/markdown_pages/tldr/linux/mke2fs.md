---
title: "Create Linux Filesystem - Format Partitions | Online Free DevTools by Hexmos"
name: mke2fs
path: /freedevtools/tldr/linux/mke2fs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mke2fs/"
description: "Create Linux filesystem with mke2fs. Quickly format partitions on your Linux system. Free online tool, no registration required."
category: linux
keywords:
- linux filesystem creator
- ext2 filesystem format
- ext3 filesystem generation
- ext4 filesystem utility
- partition formatting linux
- linux disk management
- filesystem creation tool
- linux partition manager
- mke2fs command linux
- linux filesystem tools
features:
- Create ext2, ext3, or ext4 filesystems
- Format partitions for Linux systems
- Specify the filesystem type during creation
- Initialize a filesystem on a designated device
- Manage disk partitions using command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mke2fs

> Create a Linux filesystem inside a partition.
> More information: <https://manned.org/mke2fs>.

- Create an ext2 filesystem in partition 1 of device b (`sdb1`):

`mke2fs -t ext2 {{/dev/sdb1}}`

- Create an ext3 filesystem in partition 1 of device b (`sdb1`):

`mke2fs -t ext3 {{/dev/sdb1}}`

- Create an ext4 filesystem in partition 1 of device b (`sdb1`):

`mke2fs -t ext4 {{/dev/sdb1}}`
