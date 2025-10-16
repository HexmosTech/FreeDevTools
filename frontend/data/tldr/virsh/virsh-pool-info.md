---
title: "Virsh Pool Info - List VM Storage | Online Free DevTools by Hexmos"
name: virsh-pool-info
path: "/freedevtools/tldr/virsh/virsh-pool-info/"
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-pool-info/"
description: "List virtual machine storage pool info with Virsh Pool Info. Manage your VMs, get storage details, and monitor resource utilization. Free online tool, no registration required."
category: common
keywords:
- virtual machine storage pool info
- virsh storage pool details
- linux vm pool information
- kvm storage management
- xen storage pool lookup
- virsh pool uuid info
- virsh storage capacity
- vm pool allocated space
- libvirt storage pools
- virsh pool autostart status
features:
- List name of a virtual machine storage pool
- Display UUID of a virsh storage pool
- Show current state of a VM pool
- Report persistence type of a virtual machine pool
- Present autostart status for a virsh pool
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virsh pool-info

> List information about a virtual machine storage pool.
> See also: `virsh`.
> More information: <https://manned.org/virsh>.

- List the name, UUID, state, persistence type, autostart status, capacity, space allocated, and space available for the storage pool specified by name or UUID (determine using `virsh pool-list`):

`virsh pool-info --pool {{name|uuid}}`
