---
title: "Manage Azure Accounts - Set Subscriptions | Free DevTools"
name: az-account
path: /freedevtools/tldr/az/az-account
canonical: "https://hexmos.com/freedevtools/tldr/az/az-account/"
description: "Manage Azure accounts with az-account. Set subscriptions, list locations, and get access tokens for Azure resources. Free online tool, no registration required."
category: common
keywords:
- Azure account management
- Azure subscription control
- az account list
- az account set
- Azure CLI account
- Azure access token
- Azure subscription details
- Azure resource management
- Azure command line
- cloud account manager
features:
- List all Azure subscriptions for a logged-in account
- Set the currently active Azure subscription
- List supported regions for the active Azure subscription
- Print an access token for use with the MS Graph API
- Display details of the active subscription in various formats
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az account

> Manage Azure subscription information.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/account>.

- List all subscriptions for the logged in account:

`az account list`

- Set a `subscription` to be the currently active subscription:

`az account set {{[-s|--subscription]}} {{subscription_id}}`

- List supported regions for the currently active subscription:

`az account list-locations`

- Print an access token to be used with `MS Graph API`:

`az account get-access-token --resource-type {{ms-graph}}`

- Print details of the currently active subscription in a specific format:

`az account show {{[-o|--output]}} {{json|tsv|table|yaml}}`
