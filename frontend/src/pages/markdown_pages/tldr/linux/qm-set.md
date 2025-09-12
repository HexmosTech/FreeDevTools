---
title: "VM Set - Control Virtual Machine Options | Free DevTools"
name: qm-set
path: /freedevtools/tldr/unknown/qm-set
canonical: "https://hexmos.com/freedevtools/tldr/unknown/qm-set/"
description: "Control virtual machine settings with VM Set. Configure CPU cores, memory, network devices and GPU passthrough. Free online tool, no registration required."
category: unknown
keywords:
- VM configuration
- virtual machine set
- KVM settings
- Proxmox VM options
- qm set command
- virtual machine CPU
- virtual machine memory
- virtual machine network
- virtual machine GPU passthrough
- virtual machine autostart
features:
- Set virtual machine name in GUI
- Configure VM to autostart on boot
- Allocate CPU cores to a VM
- Allocate memory to a VM
- Configure network devices for a VM
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm set

> Set virtual machine options.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Set a name for a VM in the GUI:

`qm set {{100}} --name {{vm_name}}`

- Set a VM to autostart on boot:

`qm set {{100}} --autostart {{0|1}}`

- Set the allotted core count of a VM:

`qm set {{100}} --cores {{4}}`

- Set the allotted amount of memory:

`qm set {{100}} --memory {{8192}}`

- Give a VM a network device and bridge it to the host network:

`qm set {{100}} --net{{0}} {{virtio|e1000|rtl8139|vmxnet3}},bridge=vmbr{{0}}`

- Delete a device:

`qm set {{100}} --delete {{device_name0,device_name1,...}}`

- Passthrough a GPU device to the guest:

`qm set {{100}} --hostpci{{0}} {{0000:00:02}},x-vga=1 --bios ovmf`
