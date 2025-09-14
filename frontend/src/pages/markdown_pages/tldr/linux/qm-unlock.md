---
title: "QM Unlock - Control VMs on Linux | Free DevTools"
name: qm-unlock
path: /freedevtools/tldr/linux/qm-unlock
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-unlock/"
description: "Control virtual machines with QM Unlock on Linux. Securely unlock VMs managed by QEMU/KVM. Free online tool, no registration required."
category: linux
keywords:
- qm unlock linux
- linux vm unlock
- kvm vm unlock
- qemu vm unlock
- proxmox vm unlock
- virtual machine manager unlock
- command line vm control
- linux virtualization
- vm id unlock
- unlock virtual machine
features:
- Unlock a specified virtual machine by its ID.
- Remotely unlock virtual machines.
- Force unlock virtual machines.
- Manage the unlocked state of virtual machines.
- Control QEMU/KVM virtual machines.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm unlock

> Unlock a virtual machine in QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Unlock a specific virtual machine:

`qm {{[u|unlock]}} {{vm_id}}`
