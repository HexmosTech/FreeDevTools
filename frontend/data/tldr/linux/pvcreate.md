---
title: "PVCreate - Initialize Physical Volumes | Online Free DevTools by Hexmos"
name: pvcreate
path: "/freedevtools/tldr/linux/pvcreate/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pvcreate/"
description: "Initialize physical volumes with PVCreate, a powerful LVM command. Manage disk partitions for Linux logical volume management. Free online tool, no registration required."
category: linux
keywords:
  - physical volume create
  - lvm pvcreate
  - linux pvcreate command
  - initialize disk lvm
  - partition manager linux
  - lvm configuration tool
  - disk management linux
  - volume group management
  - linux storage management
  - physical volume initialization
features:
  - Initialize disks for LVM use
  - Force volume creation without prompts
  - Manage physical volumes effectively
  - Prepare partitions for volume groups
  - Enable LVM functionality on devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pvcreate

> Initialize a disk or partition for use as a physical volume.
> See also: `lvm`.
> More information: <https://manned.org/pvcreate>.

- Initialize the `/dev/sda1` volume for use by LVM:

`pvcreate {{/dev/sdXY}}`

- Force the creation without any confirmation prompts:

`pvcreate {{[-f|--force]}} {{/dev/sdXY}}`
