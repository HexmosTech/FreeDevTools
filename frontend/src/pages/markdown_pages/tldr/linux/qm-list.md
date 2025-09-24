---
title: "Proxmox VM List - Manage Virtual Machines with qm | Online Free DevTools by Hexmos"
name: qm-list
path: /freedevtools/tldr/linux/qm-list
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-list/"
description: "List and manage Proxmox virtual machines with the qm command.  View detailed status of running VMs and easily control your server infrastructure. Free online tool, no registration required."
category: linux
keywords:
  - proxmox vm list
  - qm command proxmox
  - list virtual machines proxmox
  - proxmox virtual machine management
  - qm list full status
  - proxmox command line
  - virtual machine overview
  - manage proxmox vms
  - check proxmox vm status
  - list all proxmox VMs
features:
  - List all virtual machines on a Proxmox server.
  - Display a comprehensive status for all running VMs.
  - Utilize the powerful qm command-line interface.
  - Manage Proxmox virtual machine infrastructure efficiently.
  - Gain quick overview of virtual machine states.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm list

> List all virtual machines.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- List all virtual machines:

`qm {{[l|list]}}`

- List all virtual machines with a full status about the ones which are currently running:

`qm {{[l|list]}} --full 1`
