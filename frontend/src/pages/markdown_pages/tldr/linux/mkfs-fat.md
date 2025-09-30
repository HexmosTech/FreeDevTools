---
title: "Create FAT Filesystem - Format Partitions | Online Free DevTools by Hexmos"
name: mkfs.fat
path: /freedevtools/tldr/linux/mkfs-fat
canonical: "https://hexmos-com/freedevtools/tldr/linux/mkfs-fat/"
description: "Create FAT filesystem partitions with mkfs.fat. Format storage devices and set volume labels, IDs, and allocation tables. Free online tool, no registration required."
category: linux
keywords:
- FAT filesystem creation
- Linux partition formatter
- FAT32 format tool
- FAT16 filesystem generator
- MS-DOS filesystem utility
- Linux disk formatting
- mkfs.fat command
- File allocation table configuration
- Volume ID assignment
- Storage device formatter
features:
- Create FAT12, FAT16, or FAT32 filesystems
- Set the volume name for a filesystem
- Specify the volume ID for a filesystem
- Configure the number of file allocation tables
- Format partitions on Linux devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkfs.fat

> Create an MS-DOS filesystem inside a partition.
> More information: <https://manned.org/mkfs.fat>.

- Create a fat filesystem inside partition `Y` on device `X`:

`mkfs.fat {{/dev/sdXY}}`

- Create filesystem with a volume-name:

`mkfs.fat -n {{volume_name}} {{/dev/sdXY}}`

- Create filesystem with a volume-id:

`mkfs.fat -i {{volume_id}} {{/dev/sdXY}}`

- Use 5 instead of 2 file allocation tables:

`mkfs.fat -f 5 {{/dev/sdXY}}`

- Specify filesystem type:

`mkfs.fat -F {{12|16|32}} {{/dev/sdXY}}`
