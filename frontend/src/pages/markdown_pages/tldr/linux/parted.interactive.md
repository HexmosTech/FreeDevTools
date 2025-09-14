---
title: "Parted - Manage Partitions | Free DevTools"
name: parted.interactive
path: /freedevtools/tldr/linux/parted.interactive
canonical: "https://hexmos.com/freedevtools/tldr/linux/parted.interactive/"
description: "Manage disk partitions with the powerful parted command. Create, resize, and delete partitions with ease using this Linux command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - partition management linux
  - disk partitioning parted
  - linux partition creator
  - parted command guide
  - linux disk editor
  - create partitions parted
  - resize partitions parted
  - delete partitions parted
  - manage disk space parted
  - command line partitioner
features:
  - Create new partitions with various filesystems.
  - Resize existing partitions to adjust disk space.
  - Delete partitions to reclaim disk space.
  - Manage GPT and MBR partition tables.
  - Display detailed partition information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# parted

> A partition manipulation program.
> See also: `parted`, `partprobe`.
> More information: <https://www.gnu.org/software/parted/parted.html>.

- Start interactive mode with the specified disk selected:

`sudo parted {{/dev/sdX}}`

- Show partition information in interactive mode:

`print`

- Select a disk in interactive mode:

`select {{/dev/sdX}}`

- Create a 16 GB partition with the specified filesystem in interactive mode (`GPT` partition table):

`mkpart {{partition_name}} {{btrfs|ext2|ext3|ext4|fat16|fat32|hfs|hfs+|linux-swap|ntfs|reiserfs|udf|xfs}} {{0%}} {{16G}}`

- Create a 16 GB partition with the specified filesystem in interactive mode (`MBR` partition table):

`mkpart {{primary|logical|extended}} {{btrfs|ext2|ext3|ext4|fat16|fat32|hfs|hfs+|linux-swap|ntfs|reiserfs|udf|xfs}} {{0%}} {{16G}}`

- Resize a partition in interactive mode:

`resizepart {{/dev/sdXN}} {{end_position_of_partition}}`

- Remove a partition in interactive mode:

`rm {{/dev/sdXN}}`

- Display help:

`?`
