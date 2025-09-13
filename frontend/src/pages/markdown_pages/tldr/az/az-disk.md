---
title: "Create Azure Disk - Manage Virtual Disks | Free DevTools"
name: az-disk
path: /freedevtools/tldr/az/az-disk
canonical: "https://hexmos.com/freedevtools/tldr/az/az-disk/"
description: "Create and manage Azure disks with az-disk. Control virtual disk size, grant access, and list existing disks. Free online tool, no registration required."
category: common
keywords:
- azure disk management
- azure managed disks
- az disk command
- cloud disk creation
- azure disk list
- virtual disk control
- azure cli disk
- az disk update
- azure disk access
- azure disk deletion
features:
- Create new Azure managed disks
- List existing disks within a resource group
- Delete unwanted managed disks
- Grant read/write access for data export
- Update the size of an existing managed disk
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az disk

> Manage Azure Managed Disks.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/disk>.

- Create a managed disk:

`az disk create {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{disk_name}} {{[-z|--size-gb]}}{{size_in_gb}}`

- List managed disks in a resource group:

`az disk list {{[-g|--resource-group]}} {{resource_group}}`

- Delete a managed disk:

`az disk delete {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{disk_name}}`

- Grant read or write access to a managed disk (for export):

`az disk grant-access {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{disk_name}} {{[--access|--access-level]}} {{Read|Write}} --duration-in-seconds {{seconds}}`

- Update disk size:

`az disk update {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{disk_name}} {{[-z|--size-gb]}} {{new_size_in_gb}}`
