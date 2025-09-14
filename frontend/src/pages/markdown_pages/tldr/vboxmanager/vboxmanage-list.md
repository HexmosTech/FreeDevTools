---
title: "VBoxManage List - Control Virtual Machines | Free DevTools"
name: vboxmanage-list
path: /freedevtools/tldr/vboxmanager/vboxmanage-list
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-list/"
description: "Control virtual machines with VBoxManage List. Manage VMs, networks, and extensions. View virtual disk settings with this free online tool, no registration required."
category: common
keywords:
- virtual machine control
- vboxmanage list vms
- virtualbox command line
- vm configuration settings
- virtual disk management
- host network interface
- vbox extensions list
- running virtual machines
- virtual machine groups
- virtualbox host info
features:
- List all virtual machines
- Show available DHCP servers
- Display installed extension packs
- Show virtual disk settings
- List host-only network interfaces
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage list

> List information about the Oracle VM VirtualBox software and associated service.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-list>.

- List all VirtualBox virtual machines:

`VBoxManage list vms`

- Show DHCP servers available on the host system:

`VBoxManage list dhcpservers`

- Show Oracle VM VirtualBox extension packs currently installed:

`VBoxManage list extpacks`

- Show all virtual machine groups:

`VBoxManage list groups`

- Show virtual disk settings that are currently in use by VirtualBox:

`VBoxManage list hdds`

- Show host-only network interfaces available on host system:

`VBoxManage list hostonlyifs`

- Show the list of currently running virtual machines:

`VBoxManage list runningvms`

- Show host system information:

`VBoxManage list hostinfo`
