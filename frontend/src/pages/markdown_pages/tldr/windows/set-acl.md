---
title: "Set-Acl - Control Permissions in Windows | Online Free DevTools by Hexmos"
name: set-acl
path: /freedevtools/tldr/windows/set-acl
canonical: "https://hexmos.com/freedevtools/tldr/windows/set-acl/"
description: "Control file and registry permissions with Set-Acl in Windows. Quickly modify security descriptors for enhanced system security. Free online tool, no registration required."
category: windows
keywords:
- acl file permissions
- set acl windows
- windows set acl
- powershell set acl
- security descriptor control
- windows file permissions manager
- powershell acl management
- set acl registry key
- acl permissions editor
- file security windows
features:
- Change file security descriptors
- Modify registry key permissions
- Copy security descriptors between objects
- Manage access control lists
- Pass descriptors using the pipeline
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Set-Acl

> Changes the security descriptor of a specified item, such as a file or a registry key.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.security/set-acl>.

- Copy a security descriptor from one file to another:

`$OriginAcl = Get-Acl -Path {{path\to\file}}; Set-Acl -Path {{path\to\file}} -AclObject $OriginAcl`

- Use the pipeline operator to pass a descriptor:

`Get-Acl -Path {{path\to\file}} | Set-Acl -Path {{path\to\file}}`
