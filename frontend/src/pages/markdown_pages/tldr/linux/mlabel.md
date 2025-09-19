---
title: "Format FAT Label - Set Volume Label | Online Free DevTools by Hexmos"
name: mlabel
path: /freedevtools/tldr/linux/mlabel
canonical: "https://hexmos.com/freedevtools/tldr/linux/mlabel/"
description: "Format FAT label with mlabel to set MS-DOS volume labels on FAT and VFAT filesystems on Linux. Free online tool, no registration required."
category: linux
keywords:
- FAT volume label
- MS-DOS label
- VFAT label
- Linux file system
- Mtools Linux
- Volume label command
- Disk label tool
- FAT32 label
- File system utility
- Mlabel command line
features:
- Set MS-DOS volume labels on FAT filesystems
- Set volume labels on VFAT filesystems
- Modify file system labels from the command line
- Specify the drive to modify
- Change the volume label using mlabel
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mlabel

> Set an MS-DOS volume label for FAT and VFAT filesystems.
> More information: <https://www.gnu.org/software/mtools/manual/mtools.html#mlabel>.

- Set a filesystem label:

`mlabel -i {{/dev/sda}} ::"{{new_label}}"`
