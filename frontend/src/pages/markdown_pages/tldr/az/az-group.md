---
title: "Create Azure Group - Manage Resources | Online Free DevTools by Hexmos"
name: az-group
path: /freedevtools/tldr/az/az-group
canonical: "https://hexmos.com/freedevtools/tldr/az/az-group/"
description: "Create Azure resource groups with Az Group. Easily manage deployments and templates using Azure CLI. Free online tool, no registration required."
category: common
keywords:
- Azure resource group management
- Azure CLI group creation
- Az group template deployment
- Azure resource deployment
- Azure CLI commands
- Resource group management Linux
- Resource group management Windows
- Azure cloud management
- Azure infrastructure management
- Azure resource lifecycle
features:
- Create new Azure resource groups
- Check for the existence of resource groups
- Delete existing resource groups
- Wait for resource group conditions to be met
- Manage Azure template deployments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# az group

> Manage resource groups and template deployments.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/group>.

- Create a new resource group:

`az group create {{[-n|--name]}} {{name}} {{[-l|--location]}} {{location}}`

- Check if a resource group exists:

`az group exists {{[-n|--name]}} {{name}}`

- Delete a resource group:

`az group delete {{[-n|--name]}} {{name}}`

- Wait until a condition of the resource group is met:

`az group wait {{[-n|--name]}} {{name}} --{{created|deleted|exists|updated}}`
