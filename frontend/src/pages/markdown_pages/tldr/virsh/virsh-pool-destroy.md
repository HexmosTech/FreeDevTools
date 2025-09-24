---
title: "Virsh Pool Control - Stop Storage Pools | Online Free DevTools by Hexmos"
name: virsh-pool-destroy
path: /freedevtools/tldr/virsh/virsh-pool-destroy
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-pool-destroy/"
description: "Control Virsh storage pools with virsh-pool-destroy. Stop active virtual machine storage pools instantly. Free online tool, no registration required."
category: common
keywords:
- Virsh pool control
- Virsh storage pool
- Linux virtualization
- KVM storage management
- Virtual machine pool
- Virsh command line
- Storage pool destroy
- Libvirt pool management
- Virtualization management
- Virsh pool UUID
features:
- Stop active Virsh storage pools
- Control storage pools by name
- Control storage pools by UUID
- Integrate with Libvirt virtualization
- Manage KVM virtual machine storage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virsh pool-destroy

> Stop an active virtual machine storage pool.
> See also: `virsh`, `virsh-pool-delete`.
> More information: <https://manned.org/virsh>.

- Stop a storage pool specified by name or UUID (determine using `virsh pool-list`):

`virsh pool-destroy --pool {{name|uuid}}`
