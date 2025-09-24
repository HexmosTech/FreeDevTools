---
title: "lvdisplay - Display LVM Logical Volumes Information | Online Free DevTools by Hexmos"
name: lvdisplay
path: /freedevtools/tldr/linux/lvdisplay
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvdisplay/"
description: "Display LVM logical volume information instantly with lvdisplay. View details of logical volumes and volume groups using command line tools. Free online tool, no registration required."
category: linux
keywords:
  - linux LVM display
  - logical volume information
  - lvdisplay command linux
  - LVM volume details
  - linux storage management
  - volume group display
  - lvdisplay command guide
  - linux disk management
  - LVM command line
  - storage information display
features:
  - Display information for all logical volumes.
  - Show information in a short, concise format.
  - Display volumes belonging to a specific volume group.
  - Show detailed info for a specific logical volume.
  - Provide a quick overview of LVM logical volumes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lvdisplay

> Display information about Logical Volume Manager (LVM) logical volumes.
> See also: `lvm`, `lvs`.
> More information: <https://manned.org/lvdisplay>.

- Display information about all logical volumes:

`sudo lvdisplay`

- Display the information in a short format (same as running `lvs`):

`sudo lvdisplay {{[-C|--columns]}}`

- Display information about all logical volumes in volume group vg1:

`sudo lvdisplay {{vg1}}`

- Display information about logical volume lv1 in volume group vg1:

`sudo lvdisplay {{vg1/lv1}}`
