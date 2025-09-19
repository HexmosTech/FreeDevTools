---
title: "Restore QemuServer - Recover VM Backups | Online Free DevTools by Hexmos"
name: qmrestore
path: /freedevtools/tldr/linux/qmrestore
canonical: "https://hexmos.com/freedevtools/tldr/linux/qmrestore/"
description: "Restore QemuServer backups with qmrestore. Easily recover virtual machines from vzdump archives on Proxmox, force overwrites, and live-restore. Free online tool, no registration required."
category: linux
keywords:
- QemuServer restore
- VM backup recovery
- Proxmox qmrestore
- vzdump restore
- QemuServer disaster recovery
- Linux VM restore
- Virtual machine recovery
- QemuServer live restore
- Backup file restoration
- Proxmox backup server
features:
- Restore virtual machines from vzdump backups
- Overwrite existing virtual machines during restore
- Restore virtual machines to specific storage locations
- Perform live restores on Proxmox Backup Server
- Recover virtual machines from command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qmrestore

> Restore QemuServer `vzdump` backups.
> More information: <https://pve.proxmox.com/pve-docs/qmrestore.1.html>.

- Restore virtual machine from given backup file on the original storage:

`qmrestore {{path/to/vzdump-qemu-100.vma.lzo}} {{100}}`

- Overwrite existing virtual machine from a given backup file on the original storage:

`qmrestore {{path/to/vzdump-qemu-100.vma.lzo}} {{100}} --force true`

- Restore the virtual machine from a given backup file on specific storage:

`qmrestore {{path/to/vzdump-qemu-100.vma.lzo}} {{100}} --storage {{local}}`

- Start virtual machine immediately from the backup while restoring in the background (only on Proxmox Backup Server):

`qmrestore {{path/to/vzdump-qemu-100.vma.lzo}} {{100}} --live-restore true`
