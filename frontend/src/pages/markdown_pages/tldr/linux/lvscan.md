---
title: "List Logical Volumes - Scan LVM Disks | Online Free DevTools by Hexmos"
name: lvscan
path: /freedevtools/tldr/linux/lvscan
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvscan/"
description: "List logical volumes quickly with lvscan. Efficiently manage LVM disks and storage space in Linux. Free online tool, no registration required."
category: linux
keywords:
  - lvm logical volume scan
  - linux volume manager
  - disk space management
  - lvm disk listing
  - logical volume information
  - lvm metadata scan
  - lvm active volumes
  - lvm inactive volumes
  - lvm json report
  - linux storage management
features:
  - List all logical volumes in the system
  - Display only active logical volumes
  - Show only inactive logical volumes
  - Output logical volume data in JSON format
  - Provide a comprehensive overview of LVM disk configuration
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lvscan

> Scan (list) all logical volumes in the system.
> Part of the LVM (Logical Volume Manager) suite.
> More information: <https://manned.org/lvscan>.

- List all logical volumes:

`lvscan`

- List only active logical volumes:

`lvscan --active`

- List only inactive logical volumes:

`lvscan --inactive`

- Display logical volumes in JSON format:

`lvscan --reportformat json`
