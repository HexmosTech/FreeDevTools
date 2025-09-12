---
title: "Delete Virsh Pool - Remove Storage Pools | Free DevTools"
name: virsh-pool-delete
path: /freedevtools/tldr/common/virsh-pool-delete
canonical: "https://hexmos.com/freedevtools/tldr/common/virsh-pool-delete/"
description: "Delete Virsh pool storage with Virsh Pool Delete. Remove inactive storage systems easily using the command line. Free online tool, no registration required."
category: common
keywords:
- virsh pool delete
- virsh storage pool delete
- linux virsh pool
- virsh pool management
- kvm storage pool delete
- libvirt pool delete
- virsh command line
- virsh pool destroy
- virtual machine storage
- delete vm storage
features:
- Delete the underlying storage of inactive virsh pools.
- Remove storage pools using name or UUID.
- Integrate with the libvirt virtualization platform.
- Clean up and manage KVM storage efficiently.
- Eliminate unnecessary storage resources.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virsh pool-delete

> Delete the underlying storage system of an inactive virtual machine storage pool.
> See also: `virsh`, `virsh-pool-destroy`, `virsh-pool-undefine`.
> More information: <https://manned.org/virsh>.

- Delete the underlying storage system for the storage pool specified by name or UUID (determine using `virsh pool-list`):

`virsh pool-delete --pool {{name|uuid}}`
