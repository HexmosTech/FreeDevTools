---
title: "VBoxManage Create VM - Generate Virtual Machines | Online Free DevTools by Hexmos"
name: vboxmanage-createvm
path: /freedevtools/tldr/vboxmanager/vboxmanage-createvm
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-createvm/"
description: "Create Virtual Machines with VBoxManage. Easily configure VM settings, including OS type and storage location. Free online tool, no registration required."
category: common
keywords:
- virtual machine creation
- vboxmanage create vm
- virtualbox vm creation
- create virtual machine linux
- create virtual machine windows
- vm configuration settings
- vboxmanage command line
- virtual machine manager
- vm ostype setting
- vm uuid configuration
features:
- Create new virtual machines with specified names
- Configure base folder for VM configuration storage
- Set the guest OS type for the virtual machine
- Register the created virtual machine in VirtualBox
- Configure VM to belong to specified groups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# VBoxManage createvm

> Create a new virtual machine.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-createvm>.

- Create a new VM with default settings:

`VBoxManage createvm --name {{vm_name}}`

- Set the base folder where the VM configuration will be stored:

`VBoxManage createvm --name {{vm_name}} --basefolder {{path/to/directory}}`

- Set the guest OS type (one of `VBoxManage list ostypes`) for the imported VM:

`VBoxManage createvm --name {{vm_name}} --ostype {{ostype}}`

- Register the created VM in VirtualBox:

`VBoxManage createvm --name {{vm_name}} --register`

- Set the VM to the specified groups:

`VBoxManage createvm --name {{vm_name}} --group {{group1,group2,...}}`

- Set the Universally Unique Identifier (UUID) of the VM:

`VBoxManage createvm --name {{vm_name}} --uuid {{uuid}}`

- Set the cipher to use for encryption:

`VBoxManage createvm --name {{vm_name}} --cipher {{AES-128|AES-256}}`
