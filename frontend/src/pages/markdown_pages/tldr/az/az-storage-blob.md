---
title: "Storage Blob - Manage Azure Blobs | Online Free DevTools by Hexmos"
name: az-storage-blob
path: /freedevtools/tldr/az/az-storage-blob
canonical: "https://hexmos.com/freedevtools/tldr/az/az-storage-blob/"
description: "Manage Azure storage blobs with az-storage-blob. Upload, download, delete, and generate SAS tokens for your blobs. Free online tool, no registration required."
category: common
keywords:
- azure blob manager
- azure storage blob download
- azure storage blob upload
- azure storage blob delete
- azure blob sas generator
- azure blob command line
- az storage blob linux
- az storage blob windows
- az storage blob macos
- azure blob storage management
features:
- Download blobs from Azure Storage
- Upload files to Azure Blob storage
- Delete blob objects from containers
- Generate shared access signatures (SAS) for blobs
- Manage blobs using the Azure CLI
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az storage blob

> Manage blob storage containers and objects in Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/storage/blob>.

- Download a blob to a file path specifying a source container:

`az storage blob download --account-name {{storage_account_name}} --account-key {{storage_account_key}} {{[-c|--container-name]}} {{container_name}} {{[-n|--name]}} {{path/to/blob}} {{[-f|--file]}} {{path/to/local_file}}`

- Download blobs from a blob container recursively:

`az storage blob download-batch --account-name {{storage_account_name}} --account-key {{storage_account_key}} {{[-s|--source]}} {{container_name}} {{[-d|--destination]}} {{path/to/remote}} --pattern {{filename_regex}} {{[-d|--destination]}} {{path/to/destination}}`

- Upload a local file to blob storage:

`az storage blob upload --account-name {{storage_account_name}} --account-key {{storage_account_key}} {{[-c|--container-name]}} {{container_name}} {{[-n|--name]}} {{path/to/blob}} {{[-f|--file]}} {{path/to/local_file}}`

- Delete a blob object:

`az storage blob delete --account-name {{storage_account_name}} --account-key {{storage_account_key}} {{[-c|--container-name]}} {{container_name}} {{[-n|--name]}} {{path/to/blob}}`

- Generate a shared access signature for a blob:

`az storage blob generate-sas --account-name {{storage_account_name}} --account-key {{storage_account_key}} {{[-c|--container-name]}} {{container_name}} {{[-n|--name]}} {{path/to/blob}} --permissions {{permission_set}} --expiry {{Y-m-d'T'H:M'Z'}} --https-only`
