---
title: "Vgextend - Extend Volume Groups | Online Free DevTools by Hexmos"
name: vgextend
path: /freedevtools/tldr/linux/vgextend
canonical: "https://hexmos.com/freedevtools/tldr/linux/vgextend/"
description: "Extend volume groups easily with Vgextend, manage physical volumes. Add storage and expand logical volumes with this command. Free online tool, no registration required."
category: linux
keywords:
- linux vgextend command
- vgextend volume group
- extend linux volume
- linux lvm extend
- physical volume add
- volume group management
- linux storage extend
- command line volume management
- lvm vgextend tool
- extend logical volume
features:
- Add physical volumes to existing volume groups
- Expand storage capacity of logical volumes
- Manage volume group extents
- Incorporate new storage devices into LVM
- Extend logical volumes online
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vgextend

> Add one or more physical volumes to an existing volume group.
> More information: <https://manned.org/vgextend>.

- Add a physical volume to an existing volume group:

`vgextend {{vg1}} {{/dev/sda1}}`

- Add multiple physical volumes to an existing volume group:

`vgextend {{vg1}} {{/dev/sda1 /dev/sda2 ...}}`
