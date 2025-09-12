---
title: "Virsh Pool List - Manage Storage Pools | Free DevTools"
name: virsh-pool-list
path: /freedevtools/tldr/common/virsh-pool-list
canonical: "https://hexmos.com/freedevtools/tldr/common/virsh-pool-list/"
description: "Manage virtual machine storage pools with Virsh Pool List. Quickly view, filter, and detail storage pool information on Linux. Free online tool, no registration required."
category: common
keywords:
- virsh pool list
- linux storage pool management
- virsh storage pools
- KVM storage management
- libvirt storage
- virtual machine storage
- virsh pool list details
- linux virsh command
- storage pool status
- virsh pool autostart
features:
- List active and inactive storage pools
- Display pool details (persistence, capacity, allocation)
- Filter pools by autostart status
- Filter pools by persistence type
- Show pool name and UUID
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virsh pool-list

> List information about virtual machine storage pools.
> See also: `virsh`, `virsh-pool-autostart`, `virsh-pool-define-as`.
> More information: <https://manned.org/virsh>.

- List the name, state, and whether autostart is enabled or disabled for active storage pools:

`virsh pool-list`

- List information for active and inactive or just inactive storage pools:

`virsh pool-list --{{all|inactive}}`

- List extended information about persistence, capacity, allocation, and available space for active storage pools:

`virsh pool-list --details`

- List information for active storage pools with either autostart enabled or disabled:

`virsh pool-list --{{autostart|no-autostart}}`

- List information for active storage pools that are either persistent or transient:

`virsh pool-list --{{persistent|transient}}`

- List the name and UUID of active storage pools:

`virsh pool-list --name --uuid`
