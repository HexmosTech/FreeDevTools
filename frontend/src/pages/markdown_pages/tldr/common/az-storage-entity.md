---
title: "Storage Entity - Manage Azure Tables | Free DevTools"
name: az-storage-entity
path: /freedevtools/tldr/common/az-storage-entity
canonical: "https://hexmos.com/freedevtools/tldr/common/az-storage-entity/"
description: "Manage Azure table storage entities with Storage Entity Tool. Insert, delete, update, and query entities in Azure tables. Free online tool, no registration required."
category: common
keywords:
- azure table entity management
- storage entity command line tool
- azure storage table operations
- command line table manager
- az storage entity insert
- az storage entity delete
- az storage entity query
- azure cli table utility
- azure storage entity cli
- manage azure table data
features:
- Insert entities into Azure tables using the command line.
- Delete existing entities from specified Azure tables.
- Update existing entity properties by merging changes.
- Query entities in Azure tables based on specified filters.
- Retrieve a specific entity from an Azure table using partition and row keys.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az storage entity

> Manage Azure Table storage entities.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/storage/entity>.

- Insert an entity into a table:

`az storage entity insert {{[-e|--entity]}} {{space_separated_key_value_pairs}} {{[-t|--table-name]}} {{table_name}} --account-name {{storage_account_name}} --account-key {{storage_account_key}}`

- Delete an existing entity from a table:

`az storage entity delete --partition-key {{partition_key}} --row-key {{row_key}} {{[-t|--table-name]}} {{table_name}} --account-name {{storage_account_name}} --account-key {{storage_account_key}}`

- Update an existing entity by merging its properties:

`az storage entity merge {{[-e|--entity]}} {{space_separated_key_value_pairs}} {{[-t|--table-name]}} {{table_name}} --account-name {{storage_account_name}} --account-key {{storage_account_key}}`

- List entities which satisfy a query:

`az storage entity query --filter {{query_filter}} {{[-t|--table-name]}} {{table_name}} --account-name {{storage_account_name}} --account-key {{storage_account_key}}`

- Get an entity from the specified table:

`az storage entity show --partition-key {{partition_key}} --row-key {{row_key}} {{[-t|--table-name]}} {{table_name}} --account-name {{storage_account_name}} --account-key {{storage_account_key}}`
