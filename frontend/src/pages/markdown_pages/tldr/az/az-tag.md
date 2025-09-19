---
title: "AZ Tag - Manage Azure Resource Tags | Online Free DevTools by Hexmos"
name: az-tag
path: /freedevtools/tldr/az/az-tag
canonical: "https://hexmos.com/freedevtools/tldr/az/az-tag/"
description: "Manage Azure resource tags with AZ Tag. Create, delete, list, and modify tags on Azure subscriptions and resources. Free online tool, no registration required."
category: common
keywords:
- azure tag manager
- azure resource tag
- azure cli tag
- az tag command
- azure tag create
- azure tag delete
- azure tag list
- azure subscription tag
- azure resource tagging
- cli tag management
features:
- Create new Azure resource tags
- Delete existing Azure resource tags
- List all tags on a subscription
- Add values to existing tags
- Remove values from existing tags
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az tag

> Manage tags on a resource.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/tag>.

- Create a tag value:

`az tag add-value {{[-n|--name]}} {{tag_name}} --value {{tag_value}}`

- Create a tag in the subscription:

`az tag create {{[-n|--name]}} {{tag_name}}`

- Delete a tag from the subscription:

`az tag delete {{[-n|--name]}} {{tag_name}}`

- List all tags on a subscription:

`az tag list --resource-id /subscriptions/{{subscription_id}}`

- Delete a tag value for a specific tag name:

`az tag remove-value {{[-n|--name]}} {{tag_name}} --value {{tag_value}}`
