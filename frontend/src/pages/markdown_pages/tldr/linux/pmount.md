---
title: "Mount Devices - Mount Removable Media with pmount | Free DevTools"
name: pmount
path: "/freedevtools/tldr/linux/pmount"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pmount/"
description: "Mount removable devices easily with pmount on Linux. Manage access and filesystem types for hotpluggable media. Free online tool, no registration required."
category: linux
keywords:
- "linux mount device"
- "removable media mounter"
- "pmount linux command"
- "block device mounting"
- "hotpluggable device mount"
- "iso9660 image mount"
- "ntfs disk mount"
- "media device manager"
- "linux filesystem mounter"
- "user mount utility"
features:
- "Mount devices as a regular user"
- "Specify filesystem type for mounting"
- "Force read-write or read-only mounting"
- "List all mounted removable devices"
- "Mount devices by label or device path"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pmount

> Mount arbitrary hotpluggable devices as a normal user.
> More information: <https://manned.org/pmount>.

- Mount a device below `/media/` (using device as mount point):

`pmount {{/dev/to/block/device}}`

- Mount a device with a specific filesystem type to `/media/label`:

`pmount {{[-t|--type]}} {{filesystem}} {{/dev/to/block/device}} {{label}}`

- Mount a CD-ROM (filesystem type ISO9660) in read-only mode:

`pmount {{[-t|--type]}} iso9660 {{[-r|--read-only]}} {{/dev/cdrom}}`

- Mount an NTFS-formatted disk, forcing read-write access:

`pmount {{[-t|--type]}} ntfs {{[-w|--read-write]}} {{/dev/sdX}}`

- Display all mounted removable devices:

`pmount`
