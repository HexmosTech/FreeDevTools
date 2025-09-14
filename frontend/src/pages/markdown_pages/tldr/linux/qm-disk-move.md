---
title: "Move VM Disk - Transfer Virtual Disks | Free DevTools"
name: qm-disk-move
path: /freedevtools/tldr/linux/qm-disk-move
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-disk-move/"
description: "Move VM disks effortlessly with qm-disk-move, transfer virtual machines disks to new storage in Proxmox. Migrate data easily with our free online tool, no registration required."
category: linux
keywords:
- Proxmox VM disk move
- virtual machine disk migration
- qm disk move command
- Proxmox storage migration
- Linux disk transfer
- VMDK migration tool
- Proxmox CLI disk management
- virtual disk relocation
- Proxmox data migration
- KVM disk move
features:
- Migrate virtual disks to different storage within Proxmox
- Delete the original virtual disk after successful migration
- Move virtual disks using the command-line interface
- Supports specifying the destination storage for the virtual disk
- Allows disk movement within the same Proxmox cluster
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm disk move

> Move a virtual disk from one storage to another within the same Proxmox cluster.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Move a virtual disk:

`qm {{[di|disk]}} {{[m|move]}} {{vm_id}} {{destination}} {{index}}`

- Delete the previous copy of the virtual disk:

`qm {{[di|disk]}} {{[m|move]}} --delete {{vm_id}} {{destination}} {{index}}`
