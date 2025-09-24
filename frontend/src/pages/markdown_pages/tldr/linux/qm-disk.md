---
title: "QM Disk - Manage Virtual Disks | Online Free DevTools by Hexmos"
name: qm-disk
path: /freedevtools/tldr/linux/qm-disk
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-disk/"
description: "Manage virtual disks with QM Disk. Resize, move, delete, and import disk images easily. Free online tool, no registration required."
category: linux
keywords:
  - Virtual Disk Manager
  - Disk Image Management
  - QEMU Disk Management
  - Proxmox Virtual Disk
  - Disk Resize Command
  - Disk Move Command
  - Disk Import Command
  - VMDK Management
  - QCOW2 Management
  - RAW Disk Management
features:
  - Resize virtual disks by adding gigabytes.
  - Move virtual disks to new locations.
  - Delete previous copies of moved virtual disks.
  - Import VMDK, qcow2, and raw disk images.
  - Specify storage name during disk import.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm disk

> Manage disk images.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Add `n` gigabytes to a virtual disk:

`qm {{[di|disk]}} {{[resi|resize]}} {{vm_id}} {{disk_name}} +{{n}}G`

- Move a virtual disk:

`qm {{[di|disk]}} {{[m|move]}} {{vm_id}} {{destination}} {{index}}`

- Delete the previous copy of the virtual disk:

`qm {{[di|disk]}} {{[m|move]}} --delete {{vm_id}} {{destination}} {{index}}`

- Import a VMDK/qcow2/raw disk image using a specific storage name:

`qm {{[di|disk]}} {{[i|import]}} {{vm_id}} {{path/to/disk}} {{storage_name}} --format {{qcow2|raw|vmdk}}`
