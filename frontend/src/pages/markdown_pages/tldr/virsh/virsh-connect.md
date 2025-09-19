---
title: "Virsh Connect - Manage Virtual Machines | Online Free DevTools by Hexmos"
name: virsh-connect
path: /freedevtools/tldr/virsh/virsh-connect
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-connect/"
description: "Manage virtual machines easily with Virsh Connect. Connect to hypervisors and control virtualized environments. Free online tool, no registration required."
category: common
keywords:
- virtual machine manager
- virsh connection tool
- kvm virtual machine
- qemu virtual machine
- hypervisor control
- virsh command line
- linux virtualization
- remote hypervisor access
- virsh connect ssh
- virtual machine management
features:
- Connect to local or remote hypervisors
- Manage virtual machine instances
- Establish SSH connections to hypervisors
- Interact with QEMU/KVM hypervisors
- Control virtualization environments from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virsh connect

> Connect to a virtual machine hypervisor.
> See also: `virsh`.
> More information: <https://manned.org/virsh>.

- Connect to the default hypervisor:

`virsh connect`

- Connect as root to the local QEMU/KVM hypervisor:

`virsh connect qemu:///system`

- Launch a new instance of the hypervisor and connect to it as the local user:

`virsh connect qemu:///session`

- Connect as root to a remote hypervisor using SSH:

`virsh connect qemu+ssh://{{user_name@host_name}}/system`
