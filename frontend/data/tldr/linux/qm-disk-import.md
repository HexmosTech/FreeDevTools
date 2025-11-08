---
title: "Disk Import - Create Virtual Machine Disks | Online Free DevTools by Hexmos"
name: qm-disk-import
path: "/freedevtools/tldr/linux/qm-disk-import/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-disk-import/"
description: "Create virtual machine disks with qm-disk-import. Import VMDK, qcow2, and raw images into Proxmox VMs. Free online tool, no registration required."
category: linux
keywords:
- Proxmox disk image import
- QEMU disk import Linux
- VMDK image conversion
- Qcow2 virtual disk creation
- Raw disk image importer
- Virtual machine disk manager
- Proxmox VM disk tool
- Linux qm command
- Disk image storage tool
- Proxmox virtual disk import
features:
- Import disk images to virtual machines
- Support various image formats (raw, qcow2, vmdk)
- Specify storage name during import
- Convert between disk image formats
- Integrate with Proxmox virtualization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm disk import

> Import a disk image to a virtual machine as an unused disk.
> The supported image formats for `qemu-img`, such as raw, qcow2, qed, vdi, vmdk, and vhd must be used.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Import a VMDK/qcow2/raw disk image using a specific storage name:

`qm {{[di|disk]}} {{[i|import]}} {{vm_id}} {{path/to/disk}} {{storage_name}} --format {{qcow2|raw|vmdk}}`
