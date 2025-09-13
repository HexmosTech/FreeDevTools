---
title: "Create Virsh Pool - Define Storage Pools | Free DevTools"
name: virsh-pool-define-as
path: /freedevtools/tldr/common/virsh-pool-define-as
canonical: "https://hexmos.com/freedevtools/tldr/common/virsh-pool-define-as/"
description: "Create virsh pool configurations with Virsh Pool Define. Define storage pool settings for virtual machines on Linux systems. Free online tool, no registration required."
category: common
keywords:
- virsh pool definition
- virsh storage pool configuration
- libvirt storage pool
- virtual machine storage
- virsh pool create
- linux virsh commands
- kvm storage management
- qemu storage pools
- virsh pool xml
- persistent storage pool
features:
- Define storage pool configurations from command line
- Specify storage pool type (directory, disk, etc.)
- Set target path for the storage pool
- Create XML configuration file for the storage pool
- Enable persistent storage allocation for VMs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virsh pool-define-as

> Create a configuration file in `/etc/libvirt/storage` for a persistent virtual machine storage pool from the provided arguments.
> See also: `virsh`, `virsh-pool-build`, `virsh-pool-start`.
> More information: <https://manned.org/virsh>.

- Create the configuration file for a storage pool called pool_name using `/var/vms` as the underlying storage system:

`virsh pool-define-as --name {{pool_name}} --type {{dir}} --target {{/var/vms}}`
