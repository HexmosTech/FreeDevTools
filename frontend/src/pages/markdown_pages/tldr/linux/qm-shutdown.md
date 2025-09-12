---
title: "QM Shutdown - Control Virtual Machines | Free DevTools"
name: qm-shutdown
path: /freedevtools/tldr/linux/qm-shutdown
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-shutdown/"
description: "Control virtual machines with QM Shutdown. Power off, stop, and manage VMs on Linux using the command line. Free online tool, no registration required."
category: linux
keywords:
- qm shutdown
- qemu shutdown
- kvm shutdown
- virtual machine shutdown
- linux vm shutdown
- proxmox shutdown
- vm power off
- virtual machine manager
- command line vm control
- qm command linux
features:
- Shutdown virtual machines on QEMU/KVM
- Wait for a specified timeout before shutting down
- Skip storage volume deactivation during shutdown
- Bypass lock checks for shutdown (root only)
- Force stop and shutdown a virtual machine
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm shutdown

> Shutdown a virtual machine on QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Shutdown a virtual machine:

`qm {{[shu|shutdown]}} {{VM_ID}}`

- Shutdown a virtual machine after wait for at most 10 seconds:

`qm {{[shu|shutdown]}} --timeout {{10}} {{VM_ID}}`

- Shutdown a virtual machine and do not deactivate storage volumes:

`qm {{[shu|shutdown]}} --keepActive {{true}} {{VM_ID}}`

- Shutdown a virtual machine and skip lock (only root can use this option):

`qm {{[shu|shutdown]}} --skiplock {{true}} {{VM_ID}}`

- Stop and shutdown a virtual machine:

`qm {{[shu|shutdown]}} --forceStop {{true}} {{VM_ID}}`
