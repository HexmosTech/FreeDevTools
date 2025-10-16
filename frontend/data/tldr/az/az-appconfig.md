---
title: "AppConfig - Manage Azure App Configuration | Online Free DevTools by Hexmos"
name: az-appconfig
path: "/freedevtools/tldr/az/az-appconfig/"
canonical: "https://hexmos.com/freedevtools/tldr/az/az-appconfig/"
description: "Manage Azure App Configuration with az-appconfig. Configure settings, secrets and feature flags for your applications on Azure. Free online tool, no registration required."
category: common
keywords:
- azure app configuration management
- app configuration az cli
- azure cli appconfig
- appconfig create azure
- appconfig delete azure
- appconfig list azure
- appconfig show azure
- appconfig update azure
- azure app config settings
- azure app configuration flags
features:
- Create Azure App Configurations
- Delete specific App Configurations
- List App Configurations in a subscription
- Show properties of an App Configuration
- Update existing App Configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# az appconfig

> Manage App configurations on Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/appconfig>.

- Create an App Configuration:

`az appconfig create {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{group_name}} {{[-l|--location]}} {{location}}`

- Delete a specific App Configuration:

`az appconfig delete {{[-g|--resource-group]}} {{rg_name}} {{[-n|--name]}} {{appconfig_name}}`

- List all App Configurations under the current subscription:

`az appconfig list`

- List all App Configurations under a specific resource group:

`az appconfig list {{[-g|--resource-group]}} {{rg_name}}`

- Show properties of an App Configuration:

`az appconfig show {{[-n|--name]}} {{appconfig_name}}`

- Update a specific App Configuration:

`az appconfig update {{[-g|--resource-group]}} {{rg_name}} {{[-n|--name]}} {{appconfig_name}}`
