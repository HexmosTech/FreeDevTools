---
title: "VBoxManage Export - Export Virtual Machines | Online Free DevTools by Hexmos"
name: vboxmanage-export
path: /freedevtools/tldr/vboxmanager/vboxmanage-export
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-export/"
description: "Export Virtual Machines with VBoxManage. Create virtual appliances (OVA) for backup and portability. Free online tool, no registration required."
category: common
keywords:
- virtual machine export
- vboxmanage export ova
- virtual appliance creation
- vm backup
- ovf format export
- virtualbox command line
- virtual machine migration
- vboxmanage cloud export
- virtual machine image
- virtualbox export tool
features:
- Export VMs to OVA format
- Export in OVF legacy mode
- Create manifests for exported files
- Specify VM descriptions during export
- Export to different OVF versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# VBoxManage export

> Export virtual machines to a virtual appliance (ISO) or a cloud service.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-export>.

- Specify the target OVA file:

`VBoxManage export --output {{path/to/filename.ova}}`

- Export in OVF 0.9 legacy mode:

`VBoxManage export --legacy09`

- Export in OVF (0.9|1.0|2.0) format:

`VBoxManage export --{{ovf09|ovf10|ovf20}}`

- Create manifest of the exported files:

`VBoxManage export --manifest`

- Specify a description of the VM:

`VBoxManage export --description "{{vm_description}}"`
