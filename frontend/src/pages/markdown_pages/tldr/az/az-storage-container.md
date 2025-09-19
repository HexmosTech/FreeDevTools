---
title: "Storage Container - Manage Azure Blobs | Online Free DevTools by Hexmos"
name: az-storage-container
path: /freedevtools/tldr/az/az-storage-container
canonical: "https://hexmos.com/freedevtools/tldr/az/az-storage-container/"
description: "Manage Azure blob storage containers with az-storage-container. Generate SAS tokens and control access levels. Free online tool, no registration required."
category: common
keywords:
- azure blob storage container
- azure storage management
- container access control
- storage shared access signature
- azure container list
- azure container delete
- az storage command
- blob container sas token
- azure cli storage
- storage container permissions
features:
- Create new Azure blob storage containers
- Generate shared access signatures for containers
- List containers within a storage account
- Delete specified containers from Azure storage
- Configure public access levels for containers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az storage container

> Manage blob storage containers in Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/storage/container>.

- Create a container in a storage account:

`az storage container create --account-name {{storage_account_name}} {{[-n|--name]}} {{container_name}} --public-access {{access_level}} --fail-on-exist`

- Generate a shared access signature for the container:

`az storage container generate-sas --account-name {{storage_account_name}} {{[-n|--name]}} {{container_name}} --permissions {{sas_permissions}} --expiry {{expiry_date}} --https-only`

- List containers in a storage account:

`az storage container list --account-name {{storage_account_name}} --prefix {{filter_prefix}}`

- Mark the specified container for deletion:

`az storage container delete --account-name {{storage_account_name}} {{[-n|--name]}} {{container_name}} --fail-not-exist`
