---
title: "sfdisk - Manage Disk Partitions | Online Free DevTools by Hexmos"
name: sfdisk
path: /freedevtools/tldr/linux/sfdisk
canonical: "https://hexmos.com/freedevtools/tldr/linux/sfdisk/"
description: "Manage disk partitions with sfdisk.  Easily create, delete, and modify partitions using command-line instructions. Free online tool, no registration required."
category: linux
keywords:
  - disk partition management
  - sfdisk commands
  - linux disk partitioning
  - partition table manipulation
  - sfdisk linux
  - command line partitioning
  - manage disk partitions
  - sfdisk tutorial
  - backup partition layout
  - restore partition layout
features:
  - Backup and restore partition layouts.
  - Create and delete partitions.
  - Modify partition types.
  - Display existing partition tables.
  - Use simple command-line syntax.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sfdisk

> Display or manipulate a disk partition table.
> More information: <https://manned.org/sfdisk>.

- Back up the partition layout to a file:

`sudo sfdisk {{[-d|--dump]}} {{path/to/device}} > {{path/to/file.dump}}`

- Restore a partition layout:

`sudo sfdisk {{path/to/device}} < {{path/to/file.dump}}`

- Set the type of a partition:

`sfdisk --part-type {{path/to/device}} {{partition_number}} {{swap}}`

- Delete a partition:

`sfdisk --delete {{path/to/device}} {{partition_number}}`

- Display help:

`sfdisk {{[-h|--help]}}`
