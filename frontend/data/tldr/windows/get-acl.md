---
title: "Get-Acl - Control Resource Access | Online Free DevTools by Hexmos"
name: get-acl
path: "/freedevtools/tldr/windows/get-acl/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-acl/"
description: "Control resource access with Get-Acl. Retrieve security descriptors for files, directories, and registry keys. Free online tool, no registration required."
category: windows
keywords:
- access control list
- file permission viewer
- registry key security
- get acl windows
- powershell get-acl
- windows acl manager
- security descriptor
- access rights enumeration
- ntfs permissions
- object security

features:
- Retrieve ACLs for files and directories
- Display security descriptors for registry keys
- Identify access permissions for users and groups
- List all objects security information
- Enumerate access control entries (ACEs)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Get-Acl

> Get the security descriptor for a resource, such as a file or registry key.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-acl>.

- Display the ACL for a specific directory:

`Get-Acl {{path\to\directory}}`

- Get an ACL for a registry key:

`Get-Acl -Path {{HKLM:\System\CurrentControlSet\Control}} | Format-List`
