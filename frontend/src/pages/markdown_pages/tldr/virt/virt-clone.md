---
title: "Clone Virtual Machine - Create VMs with virt-clone | Online Free DevTools by Hexmos"
name: virt-clone
path: /freedevtools/tldr/virt/virt-clone
canonical: "https://hexmos.com/freedevtools/tldr/virt/virt-clone/"
description: "Create virtual machines easily with virt-clone. Automate VM cloning, specify storage paths, and manage MAC addresses. Free online tool, no registration required."
category: common
keywords:
- virtual machine clone
- vm cloning linux
- libvirt vm clone
- virtual machine management
- clone virtual server
- virt-clone command
- linux virtual machines
- kvm virtual machine
- virtual machine migration
- automated vm creation
features:
- Clone virtual machines with auto-generated settings
- Specify new storage paths for cloned VMs
- Define custom MAC addresses for cloned VMs
- Automate the creation of new virtual machines
- Clone VMs from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-clone

> Clone a libvirt virtual machine.
> More information: <https://manned.org/virt-clone>.

- Clone a virtual machine and automatically generate a new name, storage path, and MAC address:

`virt-clone {{[-o|--original]}} {{vm_name}} --auto-clone`

- Clone a virtual machine and specify the new name, storage path, and MAC address:

`virt-clone {{[-o|--original]}} {{vm_name}} {{[-n|--name]}} {{new_vm_name}} {{[-f|--file]}} {{path/to/new_storage}} {{[-m|--mac]}} {{ff:ff:ff:ff:ff:ff|RANDOM}}`
