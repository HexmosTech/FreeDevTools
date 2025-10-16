---
title: "QM Start - Control Virtual Machines on Linux | Online Free DevTools by Hexmos"
name: qm-start
path: "/freedevtools/tldr/linux/qm-start/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-start/"
description: "Control virtual machines on Linux with QM Start. Manage machine types and set timeouts for optimized performance. Free online tool, no registration required."
category: linux
keywords:
- qm start linux
- kvm virtual machine manager
- proxmox vm control
- linux vm management
- qemu machine type
- vm start timeout
- qm command examples
- virtual machine linux
- kvm linux command
- proxmox qm start
features:
- Start a specific virtual machine
- Specify the QEMU machine type
- Define a timeout for VM startup
- Control VMs through command-line
- Manage virtual machine instances
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm start

> Start a virtual machine on QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Start a specific virtual machine:

`qm start {{100}}`

- Specify the QEMU machine type (i.e. the CPU to emulate):

`qm start {{100}} --machine {{q35}}`

- Start a specific virtual machine with a timeout in 60 seconds:

`qm start {{100}} --timeout {{60}}`
