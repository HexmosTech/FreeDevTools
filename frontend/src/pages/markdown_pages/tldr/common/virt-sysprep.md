---
title: "Customize VM Images - virt-sysprep | Free DevTools"
name: virt-sysprep
path: /freedevtools/tldr/common/virt-sysprep
canonical: "https://hexmos.com/freedevtools/tldr/common/virt-sysprep/"
description: "Customize VM images with virt-sysprep. Easily reset virtual machines, unconfigure systems, and apply changes. Free online tool, no registration required."
category: common
keywords:
- VM image customization
- Virtual machine reset
- virt-sysprep image prep
- Linux image configuration
- KVM image modification
- QCOW2 image preparation
- Virtual machine provisioning
- System image sanitization
- Guest OS configuration
- Image cleanup utility
features:
- Remove sensitive data from VM images
- List supported virt-sysprep operations
- Dry-run virtual machine changes
- Customize hostnames within VM images
- Execute specific virt-sysprep operations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-sysprep

> Reset, unconfigure, or customize a virtual machine image.
> More information: <https://manned.org/virt-sysprep>.

- List all supported operations (enabled operations are indicated with asterisks):

`virt-sysprep --list-operations`

- Remove sensitive system data from a virtual machine image:

`sudo virt-sysprep {{[-a|--add]}} {{path/to/image.qcow2}}`

- Specify a virtual machine by its name and run all enabled operations but don't actually apply the changes:

`sudo virt-sysprep {{[-d|--domain]}} {{vm_name}} {{[-n|--dry-run]}}`

- Run only the specified operations:

`sudo virt-sysprep {{[-d|--domain]}} {{vm_name}} --operations {{operation1,operation2,...}}`

- Generate a new `/etc/machine-id` file and enable customizations to be able to change the host name to avoid network conflicts:

`sudo virt-sysprep {{[-d|--domain]}} {{vm_name}} --enable {{customizations}} --hostname {{host_name}} --operation {{machine-id}}`

- Display help:

`virt-sysprep {{[-he|--help]}}`
