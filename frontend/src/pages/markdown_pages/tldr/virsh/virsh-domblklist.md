---
title: "List VM Block Devices - Virsh Domblklist | Free DevTools"
name: virsh-domblklist
path: /freedevtools/tldr/virsh/virsh-domblklist
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-domblklist/"
description: "List virtual machine block devices with Virsh Domblklist. Inspect disk details and paths for VMs. Free online tool, no registration required."
category: common
keywords:
- virsh list block devices
- virtual machine disk information
- qemu block device paths
- kvm storage devices
- libvirt disk management
- virsh domain block list
- linux virtual machine disks
- domblklist command
- vm disk details
- virtual machine storage info
features:
- List block devices associated with a virtual machine
- Display target names and source paths of block devices
- Show disk type and device values
- Inspect disk details of a virtual machine
- Identify storage configuration for virtualized guests
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virsh domblklist

> List information about block devices associated with a virtual machine.
> See also: `virsh`.
> More information: <https://manned.org/virsh>.

- List the target name and source path of the block devices:

`virsh domblklist --domain {{vm_name}}`

- List the disk type and device value as well as the target name and source path:

`virsh domblklist --domain {{vm_name}} --details`
