---
title: "VBoxManage - Control Virtual Machines | Free DevTools"
name: vboxmanage
path: /freedevtools/tldr/common/vboxmanage
canonical: "https://hexmos.com/freedevtools/tldr/common/vboxmanage/"
description: "Control Virtual Machines with VBoxManage. Manage VirtualBox VMs via command line, including starting, cloning, and exporting. Free online tool, no registration required."
category: common
keywords:
- virtual machine manager
- vboxmanage command line
- virtualbox control
- vm start command
- vm clone command
- virtualbox export vm
- virtualbox import vm
- virtualbox linux
- virtualbox macos
- virtualbox windows
features:
- Start and stop virtual machines
- Clone virtual machine instances
- Import and export virtual appliances
- Display virtual machine information
- Manage virtual machine settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage

> Command-line interface to VirtualBox.
> Includes all the functionality of the GUI and more.
> Some subcommands such as `startvm` have their own usage documentation.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-intro>.

- Execute a VboxManage subcommand:

`VBoxManage {{subcommand}}`

- Display help:

`VBoxManage --help`

- Display help for a specific subcommand:

`VBoxManage --help {{clonevm|import|export|startvm|...}}`

- Display version:

`VBoxManage --version`
