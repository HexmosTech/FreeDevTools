---
title: "Unregister VM - Remove Virtual Machines | Free DevTools"
name: vboxmanage-unregistervm
path: /freedevtools/tldr/common/vboxmanage-unregistervm
canonical: "https://hexmos.com/freedevtools/tldr/common/vboxmanage-unregistervm/"
description: "Unregister a virtual machine with VBoxManage. Permanently remove VMs, delete associated files, and reclaim storage space. Free online tool, no registration required."
category: common
keywords:
- virtual machine unregister
- vm removal tool
- vboxmanage unregister vm
- virtualbox vm delete
- unregister virtual machine
- vbox vm management
- vm disk deletion
- virtualbox cleanup
- windows vm removal
- linux vm delete
features:
- Unregister a virtual machine by UUID or name
- Delete hard disk image files associated with the VM
- Remove all saved state files and VM logs
- Delete XML machine configuration files
- Completely remove all files associated with a VM
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage unregistervm

> Unregister a virtual machine (VM).
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-unregistervm>.

- Unregister an existing VM:

`VBoxManage unregistervm {{uuid|vm_name}}`

- Delete hard disk image files, all saved state files, VM logs, and XML VM machine files:

`VBoxManage unregistervm {{uuid|vm_name}} --delete`

- Delete all files from the VM:

`VBoxManage unregistervm {{uuid|vm_name}} --delete-all`
