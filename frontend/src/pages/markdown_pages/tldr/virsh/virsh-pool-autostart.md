---
title: "Virsh Autostart - Control Storage Pools | Online Free DevTools by Hexmos"
name: virsh-pool-autostart
path: /freedevtools/tldr/virsh/virsh-pool-autostart
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-pool-autostart/"
description: "Control storage pool autostart with Virsh. Enable or disable autostart for virtual machine storage pools, managing resources effectively. Free online tool, no registration required."
category: common
keywords:
- virsh pool autostart
- kvm pool autostart
- qemu pool autostart
- linux virsh pool
- virsh storage pool
- vm pool management
- virtual machine autostart
- libvirt pool autostart
- virsh command line
- virsh pool configuration
features:
- Enable autostart for a storage pool
- Disable autostart for a storage pool
- Manage autostart by pool name
- Manage autostart by pool UUID
- Configure resource availability at system boot
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virsh pool-autostart

> Enable or disable autostart for a virtual machine storage pool.
> See also: `virsh`.
> More information: <https://manned.org/virsh>.

- Enable autostart for the storage pool specified by name or UUID (determine using `virsh pool-list`):

`virsh pool-autostart --pool {{name|uuid}}`

- Disable autostart for the storage pool specified by name or UUID:

`virsh pool-autostart --pool {{name|uuid}} --disable`
