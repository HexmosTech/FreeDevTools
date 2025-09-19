---
title: "Get-DedupProperties - Control Data Deduplication | Online Free DevTools by Hexmos"
name: get-dedupproperties
path: /freedevtools/tldr/windows/get-dedupproperties
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-dedupproperties/"
description: "Control data deduplication with Get-DedupProperties. Retrieve deduplication information, manage storage, and optimize disk space. Free online tool, no registration required."
category: windows
keywords:
- data deduplication properties
- deduplication information
- windows data deduplication
- powershell deduplication
- storage optimization
- disk space management
- get-dedupproperties command
- volume properties
- file system information
- drive analysis
features:
- Retrieve data deduplication properties for a specific drive.
- Get data deduplication information using drive labels.
- Obtain deduplication details using an input object.
- Analyze storage efficiency and deduplication effectiveness.
- Manage and optimize disk space utilization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Get-DedupProperties

> Get Data Deduplication information.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/storage/get-dedupproperties>.

- Get Data Deduplication information of the drive:

`Get-DedupProperties -DriveLetter 'C'`

- Get Data Deduplication information of the drive using the drive label:

`Get-DedupProperties -FileSystemLabel 'Label'`

- Get Data Dedpulication information of the drive using the input object:

`Get-DedupProperties -InputObject $(Get-Volume -DriveLetter 'E')`
