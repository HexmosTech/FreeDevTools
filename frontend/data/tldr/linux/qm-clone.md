---
title: "Clone VM - Create Virtual Machine Copies | Online Free DevTools by Hexmos"
name: qm-clone
path: "/freedevtools/tldr/linux/qm-clone/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-clone/"
description: "Create virtual machine copies with Qm Clone. Easily clone VMs, manage disk formats, and integrate with Proxmox pools. Free online tool, no registration required."
category: linux
keywords:
  - virtual machine clone
  - qm clone command
  - proxmox vm clone
  - kvm vm clone
  - qemu vm clone
  - vm disk copy
  - clone virtual server
  - qcow2 image clone
  - raw image clone
  - vmdk image clone
features:
  - Create exact copies of virtual machines
  - Clone VMs and assign unique IDs
  - Specify different storage formats during clone (qcow2, raw, vmdk)
  - Integrate cloned VMs with Proxmox resource pools
  - Create full or linked clones of virtual machine disks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm clone

> Create a copy of virtual machine on QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Copy a virtual machine:

`qm clone {{vm_id}} {{new_vm_id}}`

- Copy a virtual machine using a specific name:

`qm clone {{vm_id}} {{new_vm_id}} --name {{name}}`

- Copy a virtual machine using a specific descriptionn:

`qm clone {{vm_id}} {{new_vm_id}} --description {{description}}`

- Copy a virtual machine creating a full copy of all disks:

`qm clone {{vm_id}} {{new_vm_id}} --full`

- Copy a virtual machine using a specific format for file storage (requires `--full`):

`qm clone {{vm_id}} {{new_vm_id}} --full --format {{qcow2|raw|vmdk}}`

- Copy a virtual machine then add it to a specific pool:

`qm clone {{vm_id}} {{new_vm_id}} --pool {{pool_name}}`
