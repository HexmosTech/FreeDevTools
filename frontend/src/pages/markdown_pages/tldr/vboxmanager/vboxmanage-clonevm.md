---
title: "Create VM Clones - VBoxManage Clone VM | Free DevTools"
name: vboxmanage-clonevm
path: /freedevtools/tldr/vboxmanager/vboxmanage-clonevm
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-clonevm/"
description: "Create virtual machine clones with VBoxManage. Easily duplicate VMs with custom settings and configurations. Free online tool, no registration required."
category: common
keywords:
- vm clone creation
- virtualbox clone vm
- vboxmanage clone vm command
- vm duplicate tool
- virtual machine cloning
- vbox clone manager
- windows vm clone
- linux vm clone
- macos vm clone
- cross-platform vm clone
features:
- Clone existing virtual machines
- Specify a new name for the cloned VM
- Designate a custom directory for VM configuration files
- Register cloned VMs directly in VirtualBox
- Clone VMs across different platforms
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage clonevm

> Create a clone of an existing virtual machine (VM).
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-clonevm>.

- Clone the specified VM:

`VBoxManage clonevm {{vm_name}}`

- Specify a new name for the new VM:

`VBoxManage clonevm {{vm_name}} --name {{new_vm_name}}`

- Indicate the folder where the new VM configuration is saved:

`VBoxManage clonevm {{vm_name}} --basefolder {{path/to/directory}}`

- Register the cloned VM in VirtualBox:

`VBoxManage clonevm {{vm_name}} --register`
