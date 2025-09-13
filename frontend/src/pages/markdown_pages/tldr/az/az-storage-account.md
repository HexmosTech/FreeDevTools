---
title: "Storage Account - Manage Azure Storage Accounts | Free DevTools"
name: az-storage-account
path: /freedevtools/tldr/az/az-storage-account
canonical: "https://hexmos.com/freedevtools/tldr/az/az-storage-account/"
description: "Manage Azure storage accounts with az-storage-account. Easily create, delete, and generate SAS tokens for your Azure storage. Free online tool, no registration required."
category: common
keywords:
- azure storage account management
- storage account azure cli
- azure storage sas generator
- azure storage account creator
- azure storage account deleter
- azure cli storage account commands
- az storage linux
- az storage windows
- azure storage account shared access signature
- azure resource group storage
features:
- Create Azure storage accounts with configurable SKU and location.
- Generate SAS tokens for secure access to storage account resources.
- List all storage accounts within a specific Azure resource group.
- Delete specific Azure storage accounts.
- Manage storage account properties using the Azure CLI.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az storage account

> Manage storage accounts in Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/storage/account>.

- Create an storage account:

`az storage account create {{[-n|--name]}} {{storage_account_name}} {{[-g|--resource-group]}} {{azure_resource_group}} --location {{azure_location}} --sku {{storage_account_sku}}`

- Generate a shared access signature for a specific storage account:

`az storage account generate-sas --account-name {{storage_account_name}} {{[-n|--name]}} {{account_name}} --permissions {{sas_permissions}} --expiry {{expiry_date}} --services {{storage_services}} --resource-types {{resource_types}}`

- List storage accounts:

`az storage account list {{[-g|--resource-group]}} {{azure_resource_group}}`

- Delete a specific storage account:

`az storage account delete {{[-n|--name]}} {{storage_account_name}} {{[-g|--resource-group]}} {{azure_resource_group}}`
