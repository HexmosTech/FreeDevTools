---
title: "Azure Provider - Manage Resource Providers | Online Free DevTools by Hexmos"
name: az-provider
path: /freedevtools/tldr/az/az-provider
canonical: "https://hexmos.com/freedevtools/tldr/az/az-provider/"
description: "Manage Azure resource providers with Az Provider. Register, unregister, list and show information. Free online tool, no registration required."
category: common
keywords:
- azure resource provider manager
- az provider register
- az provider unregister
- azure subscription provider list
- azure provider information
- azure resource types
- azure cloud management
- azure cli command
- resource provider automation
- cloud resource management
features:
- Register Azure resource providers
- Unregister Azure resource providers
- List all providers for an Azure subscription
- Show information about a specific provider
- List resource types for a provider
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az provider

> Manage resource providers.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/provider>.

- Register a provider:

`az provider register {{[-n|--namespace]}} {{Microsoft.PolicyInsights}}`

- Unregister a provider:

`az provider unregister {{[-n|--namespace]}} {{Microsoft.Automation}}`

- List all providers for a subscription:

`az provider list`

- Show information about a specific provider:

`az provider show {{[-n|--namespace]}} {{Microsoft.Storage}}`

- List all resource types for a specific provider:

`az provider list --query "[?namespace=='{{Microsoft.Network}}'].resourceTypes[].resourceType"`
