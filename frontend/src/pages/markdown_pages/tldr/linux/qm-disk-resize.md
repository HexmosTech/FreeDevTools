---
title: "Disk Resize - Manage Proxmox Virtual Disks | Online Free DevTools by Hexmos"
name: qm-disk-resize
path: /freedevtools/tldr/linux/qm-disk-resize
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-disk-resize/"
description: "Resize virtual machine disks easily with Disk Resize. Increase disk space in Proxmox VE using command line for efficient server management. Free online tool, no registration required."
category: linux
keywords:
  - proxmox disk resize
  - pve disk resize command
  - qm disk resize
  - linux virtual disk resize
  - kvm disk resize
  - proxmox virtual environment disk
  - proxmox command line disk resize
  - virtual machine disk space
  - disk space management
  - proxmox storage management
features:
  - Resize virtual machine disks in Proxmox VE
  - Add space to existing VM disks
  - Manage disk size using command line
  - Increase disk capacity for virtual machines
  - Modify virtual disk size within Proxmox environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm disk resize

> Resize a virtual machine disk in the Proxmox Virtual Environment (PVE).
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Add `n` gigabytes to a virtual disk:

`qm {{[di|disk]}} {{[resi|resize]}} {{vm_id}} {{disk_name}} +{{n}}G`
