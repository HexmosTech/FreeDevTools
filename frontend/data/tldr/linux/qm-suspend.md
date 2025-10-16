---
title: "QM Suspend - Control Virtual Machines | Online Free DevTools by Hexmos"
name: qm-suspend
path: "/freedevtools/tldr/linux/qm-suspend/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-suspend/"
description: "Control virtual machine suspension with QM Suspend. Manage PVE VMs using command line. Suspend with or without lock checks. Free online tool, no registration required."
category: linux
keywords:
- proxmox vm suspend
- linux vm suspend
- qm suspend command
- pve vm control
- virtual machine suspend linux
- vm suspend proxmox
- qm skiplock
- qm skiplockstorage
- proxmox suspend command
- linux kvm suspend
features:
- Suspend a Proxmox virtual machine by ID
- Skip lock checks during VM suspension
- Skip storage lock checks during VM suspension
- Control VM state with command-line interface
- Safely manage virtual machine suspension in Proxmox
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm suspend

> Suspends a virtual machine (VM) in the Proxmox Virtual Environment (PVE).
> Use `--skiplock` and `--skiplockstorage` flags with caution, as they may lead to data corruption in certain situations.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Suspend a virtual machine by ID:

`qm {{[su|suspend]}} {{vm_id}} {{integer}}`

- Skip the lock check when suspending the VM:

`qm {{[su|suspend]}} {{vm_id}} {{integer}} --skiplock`

- Skip the lock check for storage when suspending the VM:

`qm {{[su|suspend]}} {{vm_id}} {{integer}} --skiplockstorage`
