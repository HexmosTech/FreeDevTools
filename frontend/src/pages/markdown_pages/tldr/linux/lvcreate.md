---
title: "Create Logical Volumes - lvcreate Command | Online Free DevTools by Hexmos"
name: lvcreate
path: /freedevtools/tldr/linux/lvcreate
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvcreate/"
description: "Create logical volumes with the lvcreate command in Linux. Manage disk space and partitions efficiently. Free online tool, no registration required."
category: linux
keywords:
  - logical volume creation linux
  - lvcreate command linux
  - linux logical volume manager
  - lvm lvcreate examples
  - create lv linux
  - manage logical volumes
  - linux disk management
  - lvcreate size options
  - lvcreate extent options
  - linux system administration
features:
  - Create logical volumes of specified sizes.
  - Create logical volumes using a percentage of available space.
  - Create logical volumes using all free space.
  - Assign custom names to logical volumes.
  - Manage logical volumes within existing volume groups.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lvcreate

> Create a logical volume in an existing volume group. A volume group is a collection of logical and physical volumes.
> See also: `lvm`.
> More information: <https://manned.org/lvcreate>.

- Create a logical volume of 10 gigabytes in the volume group vg1:

`lvcreate {{[-L|--size]}} {{10G}} {{vg1}}`

- Create a 1500 megabyte linear logical volume named mylv in the volume group vg1:

`lvcreate {{[-L|--size]}} {{1500}} {{[-n|--name]}} {{mylv}} {{vg1}}`

- Create a logical volume called mylv that uses 60% of the total space in volume group vg1:

`lvcreate {{[-l|--extents]}} {{60%VG}} {{[-n|--name]}} {{mylv}} {{vg1}}`

- Create a logical volume called mylv that uses all the unallocated space in the volume group vg1:

`lvcreate {{[-l|--extents]}} {{100%FREE}} {{[-n|--name]}} {{mylv}} {{vg1}}`
