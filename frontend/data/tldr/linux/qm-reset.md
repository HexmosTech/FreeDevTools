---
title: "VM Reset - Control Virtual Machines with QEMU/KVM | Online Free DevTools by Hexmos"
name: qm-reset
path: "/freedevtools/tldr/linux/qm-reset/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-reset/"
description: "Control virtual machines instantly with VM Reset. Quickly reboot, power off, or force reset QEMU/KVM instances through the command line. Free online tool, no registration required."
category: linux
keywords:
  - virtual machine reset
  - qemu kvm reset
  - vm reset command
  - kvm vm reset
  - qm reset proxmox
  - virtual machine management
  - proxmox command line
  - kvm force reset
  - virtual machine power cycle
  - qemu vm control
features:
  - Forcefully reset a virtual machine
  - Skip lock during VM reset (root only)
  - Manage QEMU/KVM virtual machines
  - Reboot virtual machines remotely
  - Control virtual machine power state
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm reset

> Reset a virtual machine on QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Reset a virtual machine:

`qm reset {{vm_id}}`

- Reset a virtual machine and skip lock (only root can use this option):

`qm reset --skiplock {{true}} {{vm_id}}`
