---
title: "Storage Table - Manage Azure NoSQL Data | Free DevTools"
name: az-storage-table
path: /freedevtools/tldr/az/az-storage-table
canonical: "https://hexmos.com/freedevtools/tldr/az/az-storage-table/"
description: "Manage Azure Storage Tables with az-storage-table. Create, delete, list, and generate SAS tokens for your NoSQL key-value data. Free online tool, no registration required."
category: common
keywords:
- Azure Storage Table Manager
- NoSQL Key-Value Storage
- Azure CLI Storage Table
- Azure Table SAS Generator
- az storage table commands
- Azure storage data management
- Cloud table management
- Azure table create
- Azure table delete
- Azure table list
features:
- Create new Azure storage tables.
- Generate shared access signatures (SAS) for tables.
- List all tables within a storage account.
- Delete specific tables and their data.
- Manage NoSQL key-value storage in Azure.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az storage table

> Manage NoSQL key-value storage in Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/storage/table>.

- Create a new table in the storage account:

`az storage table create --account-name {{storage_account_name}} {{[-n|--name]}} {{table_name}} --fail-on-exist`

- Generate a shared access signature for the table:

`az storage table generate-sas --account-name {{storage_account_name}} {{[-n|--name]}} {{table_name}} --permissions {{sas_permissions}} --expiry {{expiry_date}} --https-only`

- List tables in a storage account:

`az storage table list --account-name {{storage_account_name}}`

- Delete the specified table and any data it contains:

`az storage table delete --account-name {{storage_account_name}} {{[-n|--name]}} {{table_name}} --fail-not-exist`
