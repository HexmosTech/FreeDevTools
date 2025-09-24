---
title: "Migrate VMs - Control Proxmox Virtual Machines | Online Free DevTools by Hexmos"
name: qm-migrate
path: /freedevtools/tldr/linux/qm-migrate
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-migrate/"
description: "Migrate Proxmox virtual machines with qm migrate. Control VM migration tasks, bandwidth, and online migration options. Free online tool, no registration required."
category: linux
keywords:
  - vm migration command
  - proxmox vm migration
  - qm migrate command
  - virtual machine migration
  - linux vm migration
  - server migration tool
  - online vm migration
  - proxmox command line
  - bandwidth control migration
  - live vm migration
features:
  - Migrate virtual machines to a specified target host.
  - Control migration bandwidth using the --bwlimit option.
  - Force migration of VMs using local devices (root access required).
  - Perform online/live migration of running virtual machines.
  - Enable live storage migration for local disks.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm migrate

> Migrate a virtual machine.
> Used to create a new migration task.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Migrate a specific virtual machine:

`qm {{[mi|migrate]}} {{vm_id}} {{target}}`

- Override the current I/O bandwidth limit with 10 KiB/s:

`qm {{[mi|migrate]}} {{vm_id}} {{target}} --bwlimit 10`

- Allow migration of virtual machines using local devices (root only):

`qm {{[mi|migrate]}} {{vm_id}} {{target}} --force true`

- Use online/live migration if a virtual machine is running:

`qm {{[mi|migrate]}} {{vm_id}} {{target}} --online true`

- Enable live storage migration for local disks:

`qm {{[mi|migrate]}} {{vm_id}} {{target}} --with-local-disks true`
