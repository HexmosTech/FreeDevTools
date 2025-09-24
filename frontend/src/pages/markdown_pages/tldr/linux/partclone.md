---
title: "Partclone - Backup Partitions Disregarding Empty Blocks | Online Free DevTools by Hexmos"
name: partclone
path: /freedevtools/tldr/linux/partclone
canonical: "https://hexmos.com/freedevtools/tldr/linux/partclone/"
description: "Backup partitions instantly with Partclone, disregarding empty blocks for efficient disk imaging. Create and restore partition images quickly. Free online tool, no registration required."
category: linux
keywords:
- partition backup
- disk imaging
- partclone linux
- partition cloning
- disk recovery
- image restoration
- filesystem backup
- sector-by-sector copy
- data backup linux
- partition management
features:
- Copy partitions to image files
- Restore partitions from image files
- Efficiently skip empty blocks during backup
- Support various filesystems (ext4, btrfs, fat32, xfs)
- Clone entire partitions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# partclone

> Copy and restore partitions to and from an image while disregarding empty blocks.
> More information: <https://manned.org/partclone>.

- Copy a partition into an image:

`sudo partclone.{{ext4|btrfs|fat32|xfs|...}} {{[-c|--clone]}} {{[-s|--source]}} {{/dev/sdXY}} {{[-o|--output]}} {{path/to/backup.img}}`

- Restore a partition from an image:

`sudo partclone.{{ext4|btrfs|fat32|xfs|...}} {{[-c|--clone]}} {{[-s|--source]}} {{path/to/backup.img}} {{[-o|--output]}} {{/dev/sdXY}}`

- Display help:

`partclone.{{ext4|btrfs|fat32|xfs|...}} {{[-h|--help]}}`
