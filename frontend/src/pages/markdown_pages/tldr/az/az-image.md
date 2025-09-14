---
title: "Create Azure Image - Manage VM Images with CLI | Free DevTools"
name: az-image
path: /freedevtools/tldr/az/az-image
canonical: "https://hexmos.com/freedevtools/tldr/az/az-image/"
description: "Create custom Azure images easily with az image. Manage, list, delete, and update Virtual Machine images in Azure CLI. Free online tool, no registration required."
category: common
keywords:
- azure image management
- azure cli image
- virtual machine image azure
- create azure vm image
- azure image list
- azure image delete
- az image command
- azure linux image
- azure windows image
- azure custom image
features:
- List custom images in a resource group
- Create images from managed disks or snapshots
- Delete custom images by name
- Show detailed information about an image
- Update image properties like tags
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az image

> Manage custom Virtual Machine Images in Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/image>.

- List the custom images under a resource group:

`az image list {{[-g|--resource-group]}} {{resource_group}}`

- Create a custom image from managed disks or snapshots:

`az image create {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{name}} --os-type {{windows|linux}} --source {{os_disk_source}}`

- Delete a custom image:

`az image delete {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`

- Show details of a custom image:

`az image show {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`

- Update custom images:

`az image update {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}} --set {{property=value}}`
