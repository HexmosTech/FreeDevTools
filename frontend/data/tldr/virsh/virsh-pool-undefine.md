---
title: "Virsh Pool Undefine - Delete Storage Pool | Online Free DevTools by Hexmos"
name: virsh-pool-undefine
path: "/freedevtools/tldr/virsh/virsh-pool-undefine/"
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-pool-undefine/"
description: "Delete virsh storage pool configurations with Virsh Pool Undefine. Manage storage virtualization, remove pool definitions and clean up unused storage. Free online tool, no registration required."
category: common
keywords:
- virsh storage pool removal
- libvirt pool configuration delete
- virtual machine pool undefine
- linux virsh command
- kvm storage management
- virsh pool deletion
- libvirt storage cleanup
- storage virtualization management
- virsh pool undefine name
- virsh pool undefine uuid
features:
- Delete storage pool configuration by name or UUID
- Remove unused storage pool definitions
- Clean up `/etc/libvirt/storage` configuration files
- Manage virtual machine storage effectively
- Streamline storage virtualization environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virsh pool-undefine

> Delete the configuration file in `/etc/libvirt/storage` for a stopped virtual machine storage pool.
> See also: `virsh`, `virsh-pool-destroy`.
> More information: <https://manned.org/virsh>.

- Delete the configuration for the storage pool specified name or UUID (determine using `virsh pool-list`):

`virsh pool-undefine --pool {{name|uuid}}`
