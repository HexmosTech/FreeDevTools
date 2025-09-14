---
title: "VBoxManage Move VM - Relocate Virtual Machines | Free DevTools"
name: vboxmanage-movevm
path: /freedevtools/tldr/vboxmanager/vboxmanage-movevm
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-movevm/"
description: "Relocate virtual machines with VBoxManage movevm, ensuring data integrity during transfers. Effectively manage storage and configurations. Free online tool, no registration required."
category: common
keywords:
- virtual machine relocation
- vboxmanage movevm command
- virtualbox vm migration
- vm storage management
- virtual machine file transfer
- vbox vm configuration
- linux virtual machine
- windows virtual machine
- macos virtual machine
- cross-platform vm move
features:
- Move virtual machines to new locations.
- Preserve VM configuration settings during moves.
- Support relative and absolute paths for relocation.
- Transfer VM data to a specified directory.
- Manage virtual machine storage efficiently.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage movevm

> Move a virtual machine (VM) to a new location on the host system.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-movevm>.

- Move the specified virtual machine to the current location:

`VBoxManage movevm {{vm_name}}`

- Specify the new location (full or relative pathname) of the virtual machine:

`VBoxManage movevm {{vm_name}} --folder {{path/to/new_location}}`
