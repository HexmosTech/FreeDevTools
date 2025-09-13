---
title: "Virsh Pool Start - Create Storage Pools | Free DevTools"
name: virsh-pool-start
path: /freedevtools/tldr/virsh/virsh-pool-start
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-pool-start/"
description: "Create virtual machine storage pools with Virsh Pool Start. Manage and build storage systems using the virsh command line tool. Free online tool, no registration required."
category: common
keywords:
- virsh storage pool
- virtual machine pool
- qemu virsh
- kvm virsh
- linux virsh pool
- virsh pool start command
- virsh storage management
- virsh pool creation
- virsh define pool
- virsh storage volume
features:
- Start inactive virsh storage pools
- Build the underlying storage system
- Manage virtual machine storage
- Create storage pools by name or UUID
- Integrate with qemu/kvm virtualization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virsh pool-start

> Start a previously configured but inactive virtual machine storage pool.
> See also: `virsh`, `virsh-pool-define-as`, `virsh-pool-destroy`.
> More information: <https://manned.org/virsh>.

- Start the storage pool specified by name or UUID (determine using `virsh pool-list`) and create the underlying storage system if it doesn't exist:

`virsh pool-start --pool {{name|uuid}} --build`
