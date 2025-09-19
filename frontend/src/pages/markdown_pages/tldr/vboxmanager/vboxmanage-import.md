---
title: "VBoxManage Import - Import VMs | Online Free DevTools by Hexmos"
name: vboxmanage-import
path: /freedevtools/tldr/vboxmanager/vboxmanage-import
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-import/"
description: "Import VMs with VBoxManage. Manage virtual machines, set memory, CPUs, and guest OS types with ease. Free online tool, no registration required."
category: common
keywords:
- vm import
- vboxmanage import vm
- virtualbox import ovf
- ovf import
- ova import
- virtual machine import
- vboxmanage
- virtualbox command
- command line vm
- virtual machine management
features:
- Import virtual machines from OVF or OVA files
- Set the name and configuration directory of the imported VM
- Register the imported VM in VirtualBox
- Perform dry runs to check the import process
- Configure memory, CPUs, and guest OS type for the imported VM
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage import

> Import a previously exported virtual machine (VM).
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-import>.

- Import a VM from an OVF or OVA file:

`VBoxManage import {{path/to/file.ovf}}`

- Set the name of the imported VM:

`VBoxManage import {{path/to/file.ovf}} --name {{vm_name}}`

- Indicate the folder where the configuration of the imported VM will be stored:

`VBoxManage import {{path/to/file.ovf}} --basefolder {{path/to/directory}}`

- Register the imported VM in VirtualBox:

`VBoxManage import {{path/to/file.ovf}} --register`

- Perform a dry run to check the import without actually importing:

`VBoxManage import {{path/to/file.ovf}} --dry-run`

- Set the guest OS type (one of `VBoxManage list ostypes`) for the imported VM:

`VBoxManage import {{path/to/file.ovf}} --ostype={{ostype}}`

- Set the memory (in megabytes) for the imported VM:

`VBoxManage import {{path/to/file.ovf}} --memory={{1}}`

- Set the number of CPUs for the imported VM:

`VBoxManage import {{path/to/file.ovf}} --cpus={{1}}`
