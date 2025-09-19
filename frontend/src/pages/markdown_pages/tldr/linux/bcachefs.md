---
title: "bcachefs Filesystem - Manage Storage with bcachefs | Online Free DevTools by Hexmos"
name: bcachefs
path: /freedevtools/tldr/linux/bcachefs
canonical: "https://hexmos.com/freedevtools/tldr/linux/bcachefs/"
description: "Manage and format bcachefs filesystems efficiently with this command-line tool. Create RAID configurations, mount and unmount partitions, and manage replicas for data redundancy. Free online tool, no registration required."
category: linux
keywords:
  - bcachefs filesystem management
  - bcachefs partition formatting
  - bcachefs RAID configuration
  - bcachefs device mounting
  - bcachefs data replication
  - bcachefs snapshot creation
  - linux bcachefs commands
  - bcachefs disk usage
  - bcachefs filesystem options
  - bcachefs multi-device filesystem
features:
  - Format partitions with bcachefs for efficient storage management.
  - Mount and unmount bcachefs filesystems easily.
  - Create RAID 0 configurations using SSDs and HDDs for optimized performance and storage.
  - Manage replicas to ensure data redundancy and availability.
  - Create snapshots of directories for easy backup and restoration.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bcachefs

> Manage `bcachefs` filesystems/devices.
> Some subcommands such as `device` have their own usage documentation.
> More information: <https://bcachefs-docs.readthedocs.io/en/latest/index.html>.

- Format a partition with `bcachefs`:

`sudo bcachefs format {{path/to/partition}}`

- Mount a `bcachefs` filesystem:

`sudo bcachefs mount {{path/to/partition}} {{path/to/mountpoint}}`

- Create a RAID 0 filesystem where an SSD acts as a cache and an HDD acts as a long-term storage:

`sudo bcachefs format {{[-l|--label]}} {{ssd.ssd1}} {{path/to/ssd_partition}} {{[-l|--label]}} {{hdd.hdd1}} {{path/to/hdd_partition}} --replicas 1 --foreground_target {{ssd}} --promote_target {{ssd}} --background_target {{hdd}}`

- Mount a multidevice filesystem:

`sudo bcachefs mount {{path/to/partition1}}:{{path/to/partition2}} {{path/to/mountpoint}}`

- Display disk usage:

`bcachefs fs usage {{[-h|--human-readable]}} {{path/to/mountpoint}}`

- Set replicas after formatting and mounting:

`sudo bcachefs set-fs-option --metadata_replicas {{2}} --data_replicas {{2}} {{path/to/partition}}`

- Force `bcachefs` to ensure all files are replicated:

`sudo bcachefs data rereplicate {{path/to/mountpoint}}`

- Create a snapshot of a particular directory:

`bcachefs subvolume snapshot {{path/to/directory}} {{path/to/snapshot}}`
