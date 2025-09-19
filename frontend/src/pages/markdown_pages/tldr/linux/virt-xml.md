---
title: "Edit Libvirt XML - Manage VM Configurations | Online Free DevTools by Hexmos"
name: virt-xml
path: /freedevtools/tldr/linux/virt-xml
canonical: "https://hexmos.com/freedevtools/tldr/linux/virt-xml/"
description: "Edit and manage libvirt virtual machine (VM) configurations with virt-xml.  Modify XML settings, add devices, and control boot options easily. Free online tool, no registration required."
category: linux
keywords:
  - libvirt xml editor
  - libvirt configuration manager
  - virtual machine xml editor
  - vm xml configuration
  - linux vm management
  - virt-xml command line
  - domain xml modification
  - libvirt domain control
  - virtual machine settings
  - command line vm editor
features:
  - Modify existing libvirt domain XML files.
  - Add and remove devices from virtual machines.
  - Edit VM boot options and metadata.
  - Manage network and disk configurations.
  - Control host device attachment to VMs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-xml

> Edit libvirt Domain XML files with explicit command-line options.
> Note: 'domain' refers to the name, UUID or ID for the existing VMs.
> See also: `virsh`.
> More information: <https://github.com/virt-manager/virt-manager/blob/main/man/virt-xml.rst>.

- List all the suboptions for a specific option:

`virt-xml --{{option}}=?`

- List all the suboptions for disk, network, and boot:

`virt-xml --disk=? --network=? --boot=?`

- Edit a value for a specific domain:

`virt-xml {{domain}} --edit --{{option}} {{suboption}}={{new_value}}`

- Change the description for a specific domain:

`virt-xml {{domain}} --edit --metadata description="{{new_description}}"`

- Enable/Disable the boot device menu for a specific domain:

`virt-xml {{domain}} --edit --boot bootmenu={{on|off}}`

- Attach host USB hub to a running VM (run `lsusb` to see a list of USB devices with their IDs):

`virt-xml {{domain}} --update --add-device --hostdev {{bus}}.{{device}}`
