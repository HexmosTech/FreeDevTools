---
title: "QM Cleanup - Manage QEMU/KVM Resources | Online Free DevTools by Hexmos"
name: qm-cleanup
path: /freedevtools/tldr/linux/qm-cleanup
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-cleanup/"
description: "Manage QEMU/KVM resources with QM Cleanup. Deallocate tap devices and clean up lingering VGPUs after VM shutdown or crashes. Free online tool, no registration required."
category: linux
keywords:
- qemu kvm cleanup
- vm resource management
- linux tap device cleanup
- virtual machine cleanup
- qm command cleanup
- proxmox vm cleanup
- kvm vgpu cleanup
- qemu resource management
- vm deallocation linux
- linux kvm management
features:
- Deallocates tap devices after VM termination
- Removes lingering VGPU resources from QEMU/KVM
- Cleans up resources after a VM crashes
- Performs cleanup after clean VM shutdown
- Automates resource management for QEMU/KVM VMs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm cleanup

> Clean up resources on QEMU/KVM Virtual Machine Manager like tap devices, VGPUs, etc.
> Called after a VM shuts down, crashes, etc.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Clean up resources:

`qm {{[cl|cleanup]}} {{vm_id}} {{clean-shutdown}} {{guest-requested}}`
