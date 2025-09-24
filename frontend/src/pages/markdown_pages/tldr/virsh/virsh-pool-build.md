---
title: "Build Virsh Pool - Create Storage Pools with Virsh | Online Free DevTools by Hexmos"
name: virsh-pool-build
path: /freedevtools/tldr/virsh/virsh-pool-build
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-pool-build/"
description: "Build storage pools with Virsh pool-build. Define and create storage for virtual machines, managing disks and volumes on Linux. Free online tool, no registration required."
category: common
keywords:
- Virsh storage pool
- Linux storage management
- Virtual machine storage
- Libvirt pool creation
- Storage volume management
- KVM storage pool
- Virsh command line
- Virtualization storage setup
- Linux VM disks
- Pool build command
features:
- Create underlying storage for Virsh pools
- Build storage based on pool configuration files
- Manage VM storage resources
- Define storage pools using name or UUID
- Integrate with Libvirt for virtualization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virsh pool-build

> Build the underlying storage system for a virtual machine storage pool as defined in it's configuration file in `/etc/libvirt/storage`.
> See also: `virsh`, `virsh-pool-define-as`, `virsh-pool-start`.
> More information: <https://manned.org/virsh>.

- Build the storage pool specified by name or UUID (determine using `virsh pool-list`):

`virsh pool-build --pool {{name|uuid}}`
