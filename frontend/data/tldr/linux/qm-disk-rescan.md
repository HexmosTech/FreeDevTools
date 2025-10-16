---
title: "QM Disk Rescan - Update VM Disks | Online Free DevTools by Hexmos"
name: qm-disk-rescan
path: "/freedevtools/tldr/linux/qm-disk-rescan/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-disk-rescan/"
description: "Update VM disk sizes with QM Disk Rescan. Manage virtual machine storage and disk images effectively on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux vm disk rescan
- proxmox disk management
- virtual machine disk resize
- qm disk rescan command
- pve storage update
- linux vm storage manager
- proxmox virtual environment
- vm image rescan
- qm command line tool
- linux storage rescan
features:
- Rescan and update all Proxmox storages
- Update virtual machine disk sizes automatically
- Identify and manage unused disk images
- Perform dry-run scans without applying changes
- Target specific virtual machines by ID for rescanning
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm disk rescan

> Rescan all storages and update disk sizes and unused disk images of virtual machines.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Rescan all storages and update disk sizes and unused disk images:

`qm {{[di|disk]}} {{[resc|rescan]}}`

- Perform a dry-run of a rescan and do not write any changes to configurations:

`qm {{[di|disk]}} {{[resc|rescan]}} --dryrun`

- Specify a virtual machine by its ID:

`qm {{[di|disk]}} {{[resc|rescan]}} --vmid {{100}}`
