---
title: 'QM Stop - Control Virtual Machines | Online Free DevTools by Hexmos'
name: qm-stop
path: '/freedevtools/tldr/linux/qm-stop/'
canonical: 'https://hexmos.com/freedevtools/tldr/linux/qm-stop/'
description: 'Control virtual machines easily with QM Stop. Stop, timeout, and manage VM states with this command-line tool. Free online tool, no registration required.'
category: linux
keywords:
  - proxmox vm stop
  - qm vm stop command
  - virtual machine control
  - proxmox virtual environment
  - kvm vm management
  - qm stop timeout
  - proxmox cli tools
  - vm state management
  - pve vm shutdown
  - proxmox vm force stop
features:
  - Immediately stop a virtual machine
  - Specify a timeout for VM shutdown
  - Skip lock when stopping a VM (requires root)
  - Prevent deactivation of storage volumes
  - Manage virtual machine lifecycle
ogImage: 'https://hexmos.com/freedevtools/site-banner.png'
twitterImage: 'https://hexmos.com/freedevtools/site-banner.png'
---

# qm stop

> Stop a virtual machine.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Stop a virtual machine immediately:

`qm stop {{VM_ID}}`

- Stop a virtual machine and wait for at most 10 seconds:

`qm stop --timeout {{10}} {{VM_ID}}`

- Stop a virtual machine and skip lock (only root can use this option):

`qm stop --skiplock {{true}} {{VM_ID}}`

- Stop a virtual machine and don't deactivate storage volumes:

`qm stop --keepActive {{true}} {{VM_ID}}`
