---
title: "Azcopy - Upload Files to Azure Cloud Storage | Online Free DevTools by Hexmos"
name: azcopy
path: /freedevtools/tldr/windows/azcopy
canonical: "https://hexmos.com/freedevtools/tldr/windows/azcopy/"
description: "Upload files instantly with Azcopy, the Azure cloud storage transfer tool. Securely transfer data to Azure Blob storage, files, and disks. Free online tool, no registration required."
category: windows
keywords:
- azure file transfer
- cloud storage upload
- azcopy command line
- azure blob storage
- windows azcopy
- azure storage sync
- azcopy data migration
- azcopy copy files
- azure data transfer
- azcopy windows command
features:
- Upload files to Azure Blob storage
- Synchronize local directories with Azure containers
- Copy containers between Azure storage accounts
- Transfer files using command-line interface
- Delete destination files during synchronization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# azcopy

> A file transfer tool for uploading to Azure Cloud Storage Accounts.
> More information: <https://learn.microsoft.com/azure/storage/common/storage-use-azcopy-v10>.

- Log in to an Azure Tenant:

`azcopy login`

- Upload a local file:

`azcopy copy '{{path\to\source_file}}' 'https://{{storage_account_name}}.blob.core.windows.net/{{container_name}}/{{blob_name}}'`

- Upload files with `.txt` and `.jpg` extensions:

`azcopy copy '{{path\to\source_directory}}' 'https://{{storage_account_name}}.blob.core.windows.net/{{container_name}}' --include-pattern '{{*.txt;*.jpg}}'`

- Copy a container directly between two Azure storage accounts:

`azcopy copy 'https://{{source_storage_account_name}}.blob.core.windows.net/{{container_name}}' 'https://{{destination_storage_account_name}}.blob.core.windows.net/{{container_name}}'`

- Synchronize a local directory and delete files in the destination if they no longer exist in the source:

`azcopy sync '{{path\to\source_directory}}' 'https://{{storage_account_name}}.blob.core.windows.net/{{container_name}}' --recursive --delete-destination=true`

- Display help:

`azcopy --help`
