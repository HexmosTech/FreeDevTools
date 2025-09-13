---
title: "APIM Manager - Manage Azure APIs | Free DevTools"
name: az-apim
path: /freedevtools/tldr/az/az-apim
canonical: "https://hexmos.com/freedevtools/tldr/az/az-apim/"
description: "Manage Azure APIs with APIM Manager. Create, update, and delete API Management service instances using the command line. Free online tool, no registration required."
category: common
keywords:
- azure apim manager
- azure api management
- apim service management
- azure cli apim
- azure api gateway
- apim instance control
- azure resource manager apim
- azure cloud apim
- cli apim management
- az apim linux
features:
- List existing API Management services.
- Create new API Management service instances.
- Delete API Management service instances.
- Show details of a specified API Management service.
- Update properties of existing API Management services.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az apim

> Manage Azure API Management services.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/apim>.

- List API Management services within a resource group:

`az apim list {{[-g|--resource-group]}} {{resource_group}}`

- Create an API Management service instance:

`az apim create {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}} --publisher-email {{email}} --publisher-name {{name}}`

- Delete an API Management service:

`az apim delete {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`

- Show details of an API Management service instance:

`az apim show {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`

- Update an API Management service instance:

`az apim update {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}}`
