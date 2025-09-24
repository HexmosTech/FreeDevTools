---
title: "Destroy VM - Manage QEMU VMs with qm destroy | Online Free DevTools by Hexmos"
name: qm-destroy
path: /freedevtools/tldr/linux/qm-destroy
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-destroy/"
description: "Manage QEMU virtual machines with qm destroy. Remove VMs, unreferenced disks, and purge VM data. Free online tool, no registration required."
category: linux
keywords:
- qemu kvm vm destroy
- linux vm management
- proxmox vm destroy
- qm destroy command
- vm removal tool
- virtual machine deletion
- kvm disk cleanup
- qm purge vm
- linux virtualization management
- vm inventory removal
features:
- Destroys virtual machines by VM ID
- Removes unreferenced disks from VM configuration
- Purges VM data from all locations (inventory, backups)
- Forces VM destruction, ignoring locks
- Completely removes a virtual machine from the Proxmox VE environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm destroy

> Destroy a virtual machine in QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Destroy a specific virtual machine:

`qm {{[des|destroy]}} {{vm_id}}`

- Destroy all disks that are not explicitly referenced in a specific virtual machine's configuration:

`qm {{[des|destroy]}} {{vm_id}} --destroy-unreferenced-disks`

- Destroy a virtual machine and remove from all locations (inventory, backup jobs, high availability managers, etc.):

`qm {{[des|destroy]}} {{vm_id}} --purge`

- Destroy a specific virtual machine ignoring locks and forcing destroy:

`sudo qm {{[des|destroy]}} {{vm_id}} --skiplock`
