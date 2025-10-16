---
title: "Virsh Undefine - Delete Virtual Machine | Online Free DevTools by Hexmos"
name: virsh-undefine
path: "/freedevtools/tldr/virsh/virsh-undefine/"
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh-undefine/"
description: "Undefine virtual machines with Virsh Undefine. Remove VM configurations and associated storage volumes. Free online tool, no registration required."
category: common
keywords:
- virsh undefine
- virtual machine delete
- vm configuration remove
- libvirt undefine
- kvm undefine
- qemu undefine
- linux virsh command
- command line vm management
- virtual machine storage removal
- virsh domblklist
features:
- Delete virtual machine configuration files
- Remove associated storage volumes during undefine
- Specify storage volumes to remove by target name
- Specify storage volumes to remove by source name
- Completely remove a virtual machine instance
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virsh undefine

> Delete a virtual machine.
> More information: <https://manned.org/virsh>.

- Delete only the virtual machine configuration file:

`virsh undefine --domain {{vm_name}}`

- Delete the configuration file and all associated storage volumes:

`virsh undefine --domain {{vm_name}} --remove-all-storage`

- Delete the configuration file and the specified storage volumes using the target name or the source name (as obtained from the `virsh domblklist` command):

`virsh undefine --domain {{vm_name}} --storage {{sda,sdb,path/to/source,...}}`
