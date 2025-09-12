---
title: "Storage Queue - Manage Azure Queues | Free DevTools"
name: az-storage-queue
path: /freedevtools/tldr/common/az-storage-queue
canonical: "https://hexmos.com/freedevtools/tldr/common/az-storage-queue/"
description: "Manage Azure storage queues with az-storage-queue. Create, list, and delete queues, generate SAS tokens for secure access. Free online tool, no registration required."
category: common
keywords:
- azure storage queue management
- storage queue command line
- azure queue sas generator
- queue list azure cli
- azure storage queue create
- azure queue delete
- azure queue metadata management
- queue permissions azure cli
- azure storage account queue
- az storage queue
features:
- Create new Azure storage queues
- Generate shared access signatures (SAS) for queues
- List queues within a storage account
- Delete queues and their messages
- Manage queue metadata
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az storage queue

> Manage storage queues in Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/storage/queue>.

- Create a queue:

`az storage queue create --account-name {{storage_account_name}} {{[-n|--name]}} {{queue_name}} --metadata {{queue_metadata}}`

- Generate a shared access signature for the queue:

`az storage queue generate-sas --account-name {{storage_account_name}} {{[-n|--name]}} {{queue_name}} --permissions {{queue_permissions}} --expiry {{expiry_date}} --https-only`

- List queues in a storage account:

`az storage queue list --prefix {{filter_prefix}} --account-name {{storage_account_name}}`

- Delete the specified queue and any messages it contains:

`az storage queue delete --account-name {{storage_account_name}} {{[-n|--name]}} {{queue_name}} --fail-not-exist`
