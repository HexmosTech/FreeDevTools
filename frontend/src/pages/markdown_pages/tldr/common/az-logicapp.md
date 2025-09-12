---
title: "Logic Apps - Manage Azure Logic Apps | Free DevTools"
name: az-logicapp
path: /freedevtools/tldr/common/az-logicapp
canonical: "https://hexmos.com/freedevtools/tldr/common/az-logicapp/"
description: "Manage Azure Logic Apps with az-logicapp. Deploy, configure, and monitor serverless workflows in Azure. Free online tool, no registration required."
category: common
keywords:
- azure logic apps management
- az logicapp deployment
- azure workflow automation
- serverless workflow configuration
- azure cli logic apps
- logic app resource management
- azure automation scripts
- logic app monitoring tools
- azure cloud services cli
- az automation commands
features:
- Create new Azure Logic Apps instances
- Delete existing Logic Apps
- List available Logic Apps within a resource group
- Restart stopped Logic Apps for quick recovery
- Start and stop Logic Apps for cost optimization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az logicapp

> Manage Logic Apps in Azure Cloud Services.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/logicapp>.

- Create a logic app:

`az logicapp create {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}} {{[-s|--storage-account]}} {{storage_account}}`

- Delete a logic app:

`az logicapp delete {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`

- List logic apps:

`az logicapp list {{[-g|--resource-group]}} {{resource_group}}`

- Restart a logic app:

`az logicapp restart {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`

- Start a logic app:

`az logicapp start {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`

- Stop a logic app:

`az logicapp stop {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`
