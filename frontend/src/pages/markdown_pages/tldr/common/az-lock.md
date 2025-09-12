---
title: "Azure Lock - Manage Azure Locks | Free DevTools"
name: az-lock
path: /freedevtools/tldr/common/az-lock
canonical: "https://hexmos.com/freedevtools/tldr/common/az-lock/"
description: "Manage Azure locks with az-lock. Secure your Azure resources with read-only locks and prevent accidental deletion. Free online tool, no registration required."
category: common
keywords:
- azure lock manager
- azure resource locking
- azure subscription lock
- azure resource group lock
- az lock command
- azure cli lock
- azure resource protection
- azure security
- azure governance
- cli lock
features:
- Create read-only Azure locks at subscription or resource group level
- Delete existing Azure locks
- List all Azure locks in a subscription
- Show details of a specific Azure lock
- Prevent accidental resource deletion or modification
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az lock

> Manage Azure locks.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/lock>.

- Create a read-only subscription level lock:

`az lock create {{[-n|--name]}} {{lock_name}} {{[-t|--lock-type]}} ReadOnly`

- Create a read-only resource group level lock:

`az lock create {{[-n|--name]}} {{lock_name}} {{[-g|--resource-group]}} {{group_name}} {{[-t|--lock-type]}} ReadOnly`

- Delete a subscription level lock:

`az lock delete {{[-n|--name]}} {{lock_name}}`

- Delete a resource group level lock:

`az lock delete {{[-n|--name]}} {{lock_name}} {{[-g|--resource-group]}} {{group_name}}`

- List out all locks on the subscription level:

`az lock list`

- Show a subscription level lock with a specific name:

`az lock show {{[-n|--name]}} {{lock_name}}`
