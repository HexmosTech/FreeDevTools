---
title: "Fdisk - Manage Disk Partitions | Online Free DevTools by Hexmos"
name: fdisk
path: "/freedevtools/tldr/linux/fdisk/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/fdisk/"
description: "Manage disk partitions with Fdisk on Linux. Create, delete, and view partition tables with this command-line tool. Free online tool, no registration required."
category: linux
keywords:
- disk partition manager
- fdisk linux
- linux partition table
- storage drive partitioning
- command line disk utility
- partition creation tool
- partition deletion tool
- file system management linux
- disk management commands
- partition manipulation tool
features:
- List existing disk partitions.
- Create new disk partitions.
- Delete existing disk partitions.
- Write changes to the partition table.
- Discard changes to the partition table.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fdisk

> Manage partition tables and partitions on a storage drive.
> See also: `partprobe`.
> More information: <https://manned.org/fdisk>.

- List partitions:

`sudo fdisk {{[-l|--list]}}`

- Start the partition manipulator:

`sudo fdisk {{/dev/sdX}}`

- Create a [n]ew partition:

`<n>`

- Select a partition to [d]elete:

`<d>`

- View the [p]artition table:

`<p>`

- [w]rite the changes made:

`<w>`

- Discard the changes made and [q]uit:

`<q>`

- Open a help [m]enu:

`<m>`
