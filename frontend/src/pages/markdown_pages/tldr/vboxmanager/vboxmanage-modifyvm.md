---
title: "VBoxManage ModifyVM - Control Virtual Machine Settings | Online Free DevTools by Hexmos"
name: vboxmanage-modifyvm
path: /freedevtools/tldr/vboxmanager/vboxmanage-modifyvm
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-modifyvm/"
description: "Control virtual machine settings with VBoxManage ModifyVM. Adjust memory, CPU, VRDE, and recording options. Free online tool, no registration required."
category: common
keywords:
- virtualbox modifyvm
- vm configuration
- virtual machine settings
- vboxmanage command
- virtualbox command line
- virtualbox vm rename
- virtualbox vm memory
- virtualbox vrde enable
- virtualbox vm recording
- virtualbox vm cpu
features:
- Rename existing virtual machines
- Adjust virtual machine memory allocation
- Configure CPU core assignments for VMs
- Enable or disable VirtualBox Remote Display Extension (VRDE)
- Control session recording functionality
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage modifyvm

> Change settings for a virtual machine that is stopped.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-modifyvm>.

- Rename the VM:

`VBoxManage modifyvm {{uuid|vm_name}} --name {{new_name}}`

- Adjust memory and CPU:

`VBoxManage modifyvm {{uuid|vm_name}} --memory {{2048}} --cpus {{2}}`

- Enable Remote Display (VRDE):

`VBoxManage modifyvm {{uuid|vm_name}} --vrde on`

- Enable session recording:

`VBoxManage modifyvm {{uuid|vm_name}} --recording on`
