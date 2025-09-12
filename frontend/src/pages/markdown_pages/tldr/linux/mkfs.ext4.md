---
title: "Create ext4 Filesystem - Format Partitions | Free DevTools"
name: mkfs.ext4
path: /freedevtools/tldr/linux/mkfs.ext4
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkfs.ext4/"
description: "Create ext4 filesystem with mkfs.ext4. Format partitions and manage volume labels easily with this Linux command. Free online tool, no registration required."
category: linux
keywords:
- ext4 filesystem creation
- linux partition format
- mkfs.ext4 command
- ext4 volume label
- filesystem management linux
- disk partition formatting
- linux command line tools
- ext4 file system
- create linux filesystem
- format ext4 partition
features:
- Format partitions with the ext4 filesystem
- Create new ext4 filesystems on specified devices
- Set a volume label for the created filesystem
- Manage and prepare storage devices for Linux
- Quickly format hard drives and partitions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkfs.ext4

> Create an ext4 filesystem inside a partition.
> More information: <https://manned.org/mkfs.ext4>.

- Create an ext4 filesystem inside partition Y on device X:

`sudo mkfs.ext4 {{/dev/sdXY}}`

- Create an ext4 filesystem with a volume-label:

`sudo mkfs.ext4 -L {{volume_label}} {{/dev/sdXY}}`
