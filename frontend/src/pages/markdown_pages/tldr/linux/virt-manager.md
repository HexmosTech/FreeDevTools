---
title: "Virt-Manager - Manage Virtual Machines | Online Free DevTools by Hexmos"
name: virt-manager
path: /freedevtools/tldr/linux/virt-manager
canonical: "https://hexmos.com/freedevtools/tldr/linux/virt-manager/"
description: "Manage virtual machines with Virt-Manager. Control KVM and Xen virtual machines, plus LXC containers. Free online tool, no registration required."
category: linux
keywords:
- linux virtual machine manager
- kvm virtual machine control
- xen virtual machine manager
- lxc container management
- virtual machine hypervisor
- linux virtualization gui
- vm domain control
- virtual machine performance monitoring
- linux container manager
- virt-manager command line
features:
- Launch a graphical user interface for managing virtual machines.
- Connect to various hypervisors, including KVM and Xen.
- Display performance data for virtual machines.
- Show domain details and configuration for a specific VM.
- Create new virtual machines using a guided wizard.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virt-manager

> A desktop user interface for managing KVM and Xen virtual machines and LXC containers.
> More information: <https://manned.org/virt-manager.1>.

- Launch the GUI:

`virt-manager`

- Connect to a hypervisor:

`virt-manager --connect {{hypervisor_uri}}`

- Don't fork virt-manager process into background on startup:

`virt-manager --no-fork`

- Print debug output:

`virt-manager --debug`

- Open the "New VM" wizard:

`virt-manager --show-domain-creator`

- Show domain details window for a specific virtual machine/container:

`virt-manager --show-domain-editor {{name|id|uuid}}`

- Show domain performance window for a specific virtual machine/container:

`virt-manager --show-domain-performance {{name|id|uuid}}`

- Show connection details window:

`virt-manager --show-host-summary`
