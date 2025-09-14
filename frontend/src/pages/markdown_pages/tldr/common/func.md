---
title: "Azure Functions - Create & Run Apps Locally | Free DevTools"
name: func
path: /freedevtools/tldr/common/func
canonical: "https://hexmos.com/freedevtools/tldr/common/func/"
description: "Create Azure Functions with func, a powerful command-line tool for local development and deployment. Test, debug, and publish your serverless applications to Azure effortlessly. Free online tool, no registration required."
category: common
keywords:
- Azure Functions CLI
- Serverless development
- Function app deployment
- Local function testing
- Azure Functions Core Tools
- Azure CLI tool
- Function app settings
- Storage account connection
- Azure function publish
- func command-line
features:
- Initialize new Azure Functions projects
- Create new functions using templates
- Run functions locally for testing
- Publish code to Azure function apps
- Fetch app settings from existing function apps
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# func

> Azure Functions Core Tools: develop and test Azure Functions locally.
> Local functions can connect to live Azure services, and can deploy a function app to an Azure subscription.
> More information: <https://learn.microsoft.com/azure/azure-functions/functions-run-local>.

- Create a new functions project:

`func init {{project}}`

- Create a new function:

`func new`

- Run functions locally:

`func start`

- Publish your code to a function app in Azure:

`func azure functionapp publish {{function}}`

- Download all settings from an existing function app:

`func azure functionapp fetch-app-settings {{function}}`

- Get the connection string for a specific storage account:

`func azure storage fetch-connection-string {{storage_account}}`
