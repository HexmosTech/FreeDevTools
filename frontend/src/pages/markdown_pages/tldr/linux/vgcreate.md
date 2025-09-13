---
title: "Create Volume Groups - vgcreate Command | Free DevTools"
name: vgcreate
path: /freedevtools/tldr/linux/vgcreate
canonical: "https://hexmos.com/freedevtools/tldr/linux/vgcreate/"
description: "Create volume groups with the vgcreate command. Combine multiple mass-storage devices efficiently using this Linux command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - volume group creation linux
  - vgcreate command linux
  - linux volume management
  - lvm volume group creation
  - create logical volume linux
  - manage disk space linux
  - linux storage management
  - physical volume linux
  - extend volume group linux
  - reduce volume group linux
features:
  - Create new volume groups from physical volumes.
  - Combine multiple physical volumes into a single volume group.
  - Manage storage space efficiently across multiple devices.
  - Extend existing volume groups with additional physical volumes.
  - Provide a foundation for logical volume creation and management.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vgcreate

> Create volume groups combining multiple mass-storage devices.
> See also: `lvm`.
> More information: <https://manned.org/vgcreate>.

- Create a new volume group called vg1 using the `/dev/sda1` device:

`vgcreate {{vg1}} {{/dev/sda1}}`

- Create a new volume group called vg1 using multiple devices:

`vgcreate {{vg1}} {{/dev/sda1}} {{/dev/sdb1}} {{/dev/sdc1}}`
