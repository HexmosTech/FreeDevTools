---
title: "PVDisplay - Display LVM Physical Volumes | Free DevTools"
name: pvdisplay
path: /freedevtools/tldr/linux/pvdisplay
canonical: "https://hexmos.com/freedevtools/tldr/linux/pvdisplay/"
description: "Display LVM physical volumes with pvdisplay. Manage and inspect physical volumes in Linux environments. Free online tool, no registration required."
category: linux
keywords:
  - lvm physical volume
  - physical volume display
  - linux lvm
  - volume group management
  - pvdisplay command
  - disk management
  - storage management
  - logical volume manager
  - lvm configuration
  - command line storage
features:
  - Display information about all physical volumes.
  - Show PV size and usage details.
  - Report on physical volume metadata.
  - Identify the volume group a PV belongs to.
  - Inspect physical volume allocation.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pvdisplay

> Display information about Logical Volume Manager (LVM) physical volumes.
> See also: `lvm`.
> More information: <https://manned.org/pvdisplay>.

- Display information about all physical volumes:

`sudo pvdisplay`

- Display information about the physical volume on drive `/dev/sdXY`:

`sudo pvdisplay {{/dev/sdXY}}`
