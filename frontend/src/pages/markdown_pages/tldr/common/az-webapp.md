---
title: "Create Azure Web Apps - Manage Cloud Services | Free DevTools"
name: az-webapp
path: /freedevtools/tldr/common/az-webapp
canonical: "https://hexmos.com/freedevtools/tldr/common/az-webapp/"
description: "Create Azure Web Apps with az-webapp. Easily manage, list, and delete web applications hosted in Azure Cloud. Free online tool, no registration required."
category: common
keywords:
- azure web apps
- azure cloud services management
- az webapp commands
- azure cli web apps
- linux web app deployment
- windows web app creation
- cloud app resource management
- azure web app automation
- web app deployment tools
- azure web app delete
features:
- List available runtimes for Azure web applications.
- Create new Azure web applications with custom names and locations.
- List all web applications within an Azure subscription.
- Delete specific web applications by name and resource group.
- Manage web apps hosted in Azure Cloud Services.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az webapp

> Manage Web Applications hosted in Azure Cloud Services.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/webapp>.

- List available runtimes for a web application:

`az webapp list-runtimes {{[-os|--os-type]}} {{windows|linux}}`

- Create a web application:

`az webapp up {{[-n|--name]}} {{name}} {{[-l|--location]}} {{location}} {{[-r|--runtime]}} {{runtime}}`

- List all web applications:

`az webapp list`

- Delete a specific web application:

`az webapp delete {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`
