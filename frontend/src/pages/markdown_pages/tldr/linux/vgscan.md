---
title: "VGScan - Scan Linux Volume Groups | Free DevTools"
name: vgscan
path: /freedevtools/tldr/linux/vgscan
canonical: "https://hexmos.com/freedevtools/tldr/linux/vgscan/"
description: "Scan Linux volume groups with VGScan. Discover LVM block devices and activate volume groups with ease. Free online tool, no registration required."
category: linux
keywords:
- linux volume group scan
- lvm volume scan
- vgscan linux command
- linux lvm management
- lvm logical volume scan
- vgscan block device discovery
- linux volume management tool
- lvm volume activation
- vgscan command line utility
- linux disk management
features:
- Scan for volume groups on LVM block devices
- Identify and report found volume groups
- Create special files in /dev to access logical volumes
- Activate volume groups for immediate use
- Automate LVM volume discovery on Linux systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vgscan

> Scan for volume groups on all supported Logical Volume Manager (LVM) block devices.
> See also: `lvm`, `vgchange`.
> More information: <https://manned.org/vgscan>.

- Scan for volume groups and print information about each group found:

`sudo vgscan`

- Scan for volume groups and add the special files in `/dev`, if they don't already exist, needed to access the logical volumes in the found groups:

`sudo vgscan --mknodes`
