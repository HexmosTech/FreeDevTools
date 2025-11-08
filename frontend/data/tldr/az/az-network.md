---
title: "Azure Network - Manage Network Resources | Online Free DevTools by Hexmos"
name: az-network
path: "/freedevtools/tldr/az/az-network/"
canonical: "https://hexmos.com/freedevtools/tldr/az/az-network/"
description: "Manage Azure Network resources with az-network. Create virtual networks, update NICs, and list usages efficiently. Free online tool, no registration required."
category: common
keywords:
- Azure Network Manager
- Azure Virtual Network
- Azure NIC Configuration
- Azure Resource Management
- Azure CLI Network
- Network Command Line
- Cloud Network Management
- az network commands
- Azure subscription quota
- az network vnet
features:
- List network resource usages within a region
- Create virtual networks with custom address prefixes
- Update network interface cards with accelerated networking enabled
- List all virtual networks in a subscription
- Manage Azure Network resources from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# az network

> Manage Azure Network resources.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/network>.

- List network resources in a region that are used against a subscription quota:

`az network list-usages`

- List all virtual networks in a subscription:

`az network vnet list`

- Create a virtual network:

`az network vnet create --address-prefixes {{10.0.0.0/16}} {{[-n|--name]}} {{vnet}} {{[-g|--resource-group]}} {{group_name}} --submet-name {{subnet}} --subnet-prefixes {{10.0.0.0/24}}`

- Enable accelerated networking for a network interface card:

`az network nic update --accelerated-networking true {{[-n|--name]}} {{nic}} {{[-g|--resource-group]}} {{resource_group}}`
