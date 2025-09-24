---
title: "Backup VG - Backup Volume Group Configuration | Online Free DevTools by Hexmos"
name: vgcfgbackup
path: /freedevtools/tldr/linux/vgcfgbackup
canonical: "https://hexmos.com/freedevtools/tldr/linux/vgcfgbackup/"
description: "Backup Volume Group configurations easily with vgcfgbackup. Securely manage LVM metadata and prevent data loss. Free online tool, no registration required."
category: linux
keywords:
- LVM backup
- volume group backup
- vgcfgbackup command
- Linux LVM metadata
- LVM configuration backup
- vgcfgbackup linux
- Linux volume management
- LVM data protection
- Linux server backup
- volume group metadata
features:
- Back up LVM volume group metadata
- Save VG configuration to a file
- Backup multiple volume groups simultaneously
- Increase verbosity for detailed backup process
- Support for custom backup file locations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vgcfgbackup

> Back up volume group configuration metadata to files (not user data).
> More information: <https://manned.org/vgcfgbackup>.

- Back up metadata for all volume groups (to `/etc/lvm/backup/` by default):

`vgcfgbackup`

- Back up metadata for a specific volume group:

`vgcfgbackup {{vg_name}}`

- Write the backup to a specific file:

`vgcfgbackup {{[-f|--file]}} {{path/to/backup}} {{vg_name}}`

- Back up multiple VGs using a filename template (`%s` becomes the VG name):

`vgcfgbackup {{[-f|--file]}} {{/tmp/vg-backup-%s}} {{vg1 vg2 ...}}`

- Increase verbosity (repeat `-v` for more detail):

`vgcfgbackup {{[-v|--verbose]}} {{vg_name}}`
