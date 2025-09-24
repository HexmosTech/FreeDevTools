---
title: "Register VM - Manage Virtual Machines with VBoxManage | Online Free DevTools by Hexmos"
name: vboxmanage-registervm
path: /freedevtools/tldr/vboxmanager/vboxmanage-registervm
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-registervm/"
description: "Register virtual machines easily with VBoxManage. Import and manage existing VMs with encryption password support. Free online tool, no registration required."
category: common
keywords:
- virtual machine registration
- vboxmanage register vm
- virtualbox vm import
- vm encryption password
- virtual machine management
- vbox configuration
- virtual machine cli
- windows virtual machine
- linux virtual machine
- macos virtual machine
features:
- Register existing VirtualBox VMs
- Import VMs from .vbox files
- Provide encryption passwords for VMs
- Support password files for encrypted VMs
- Register VMs from the command-line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# VBoxManage registervm

> Register a virtual machine (VM).
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-registervm>.

- Register an existing VM:

`VBoxManage registervm {{path/to/filename.vbox}}`

- Supply the encryption password file of the VM:

`VBoxManage registervm {{path/to/filename.vbox}} --password {{path/to/password_file}}`

- Prompt for the encryption password on the command-line:

`VBoxManage registervm {{path/to/filename.vbox}} --password -`
