---
title: "Create Azure VMs - Manage Virtual Machines | Free DevTools"
name: az-vm
path: /freedevtools/tldr/az/az-vm
canonical: "https://hexmos.com/freedevtools/tldr/az/az-vm/"
description: "Create and manage Azure Virtual Machines with az vm. Deploy, start, stop, and deallocate VMs using command line. Free online tool, no registration required."
category: common
keywords:
- Azure VM creation
- Azure VM management
- Azure virtual machine
- az vm command
- Azure CLI vm
- cloud virtual machines
- Azure instance
- Linux VM Azure
- Windows VM Azure
- Azure resource management
features:
- Create Azure Virtual Machines with default Ubuntu image
- Stop and start Azure Virtual Machines
- Deallocate and restart Azure Virtual Machines
- List available VM images in the Azure Marketplace
- Manage VMs using resource groups
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az vm

> Manage virtual machines in Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/vm>.

- Display a table of available Virtual Machines:

`az vm list --output table`

- Create a virtual machine using the default Ubuntu image and generate SSH keys:

`az vm create {{[-g|--resource-group]}} {{rg}} {{[-n|--name]}} {{vm_name}} --image {{UbuntuLTS}} --admin-user {{azureuser}} --generate-ssh-keys`

- Stop a Virtual Machine:

`az vm stop {{[-g|--resource-group]}} {{rg}} {{[-n|--name]}} {{vm_name}}`

- Deallocate a Virtual Machine:

`az vm deallocate {{[-g|--resource-group]}} {{rg}} {{[-n|--name]}} {{vm_name}}`

- Start a Virtual Machine:

`az vm start {{[-g|--resource-group]}} {{rg}} {{[-n|--name]}} {{vm_name}}`

- Restart a Virtual Machine:

`az vm restart {{[-g|--resource-group]}} {{rg}} {{[-n|--name]}} {{vm_name}}`

- List VM images available in the Azure Marketplace:

`az vm image list`
