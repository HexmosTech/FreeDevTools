---
title: "Virsh List - Control Virtual Machines | Free DevTools"
name: virsh-list
path: /freedevtools/tldr/common/virsh-list
canonical: "https://hexmos.com/freedevtools/tldr/common/virsh-list/"
description: "Control virtual machines with Virsh List. Manage VMs across different states and configurations effortlessly. Free online tool, no registration required."
category: common
keywords:
- virtual machine list
- virsh vm list
- kvm virtual machine
- qemu virtual machine
- libvirt virsh
- virsh list all
- virsh autostart
- virtual machine snapshots
- linux virtual machines
- virtual machine management
features:
- List running virtual machines
- Display all virtual machines regardless of state
- Filter VMs by autostart status
- Show VMs with or without snapshots
- Manage virtual machine states using command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virsh list

> List the ID, name, and state of virtual machines.
> See also: `virsh`.
> More information: <https://manned.org/virsh>.

- List information about running virtual machines:

`virsh list`

- List information about virtual machines regardless of state:

`virsh list --all`

- List information about virtual machines with autostart either enabled or disabled:

`virsh list --all --{{autostart|no-autostart}}`

- List information about virtual machines either with or without snapshots:

`virsh list --all --{{with-snapshot|without-snapshot}}`
