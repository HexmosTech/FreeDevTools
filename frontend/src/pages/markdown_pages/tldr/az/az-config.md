---
title: "Azure Config - Manage CLI Configuration | Online Free DevTools by Hexmos"
name: az-config
path: /freedevtools/tldr/az/az-config
canonical: "https://hexmos.com/freedevtools/tldr/az/az-config/"
description: "Manage Azure CLI configurations with Az Config. Set, get, and unset configurations to customize your Azure CLI environment. Free online tool, no registration required."
category: common
keywords:
- Azure CLI Configuration
- Azure Config Manager
- CLI Configuration Settings
- Azure CLI Environment
- az config get
- az config set
- az config unset
- Command Line Interface
- Cloud Configuration
- Azure Configuration
features:
- Get existing Azure CLI configurations
- Set specific Azure CLI configurations
- Unset Azure CLI configurations
- Manage configurations by section
- Customize Azure CLI environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# az config

> Manage Azure CLI configuration.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/config>.

- Print all configurations:

`az config get`

- Print configurations for a specific section:

`az config get {{section_name}}`

- Set a configuration:

`az config set {{configuration_name}}={{value}}`

- Unset a configuration:

`az config unset {{configuration_name}}`
