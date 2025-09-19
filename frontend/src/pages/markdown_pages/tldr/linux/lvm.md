---
title: "LVM Manage Volumes - Create and Manage Logical Volumes | Online Free DevTools by Hexmos"
name: lvm
path: /freedevtools/tldr/linux/lvm
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvm/"
description: "Manage and control Linux logical volumes with LVM. Create, display, and modify physical volumes, volume groups, and logical volumes. Free online tool, no registration required."
category: linux
keywords:
  - lvm volume management
  - linux lvm commands
  - logical volume manager tutorial
  - lvm pvcreate command
  - lvm vgcreate command
  - lvm lvcreate command
  - linux disk management
  - lvm administration
  - lvm pvdisplay command
  - lvm lvdisplay command
features:
  - Create physical volumes from raw disk partitions.
  - Create volume groups from one or more physical volumes.
  - Create logical volumes within volume groups.
  - Display detailed information about physical volumes, volume groups, and logical volumes.
  - Manage and resize existing logical volumes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lvm

> Manage physical volumes, volume groups, and logical volumes using the Logical Volume Manager (LVM) interactive shell.
> More information: <https://manned.org/lvm>.

- Start the Logical Volume Manager interactive shell:

`sudo lvm`

- Initialize a drive or partition to be used as a physical volume:

`sudo lvm pvcreate {{/dev/sdXY}}`

- Display information about physical volumes:

`sudo lvm pvdisplay`

- Create a volume group called vg1 from the physical volume on `/dev/sdXY`:

`sudo lvm vgcreate {{vg1}} {{/dev/sdXY}}`

- Display information about volume groups:

`sudo lvm vgdisplay`

- Create a logical volume with size 10G from volume group vg1:

`sudo lvm lvcreate {{[-L|--size]}} {{10G}} {{vg1}}`

- Display information about logical volumes:

`sudo lvm lvdisplay`

- Display help for a specific command:

`lvm help {{command}}`
