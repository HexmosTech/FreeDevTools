---
title: "Getfacl - Control File Access Lists on Linux | Online Free DevTools by Hexmos"
name: getfacl
path: /freedevtools/tldr/linux/getfacl
canonical: "https://hexmos.com/freedevtools/tldr/linux/getfacl/"
description: "Control file access lists (ACLs) with Getfacl on Linux. Manage permissions and enhance system security using file access lists. Free online tool, no registration required."
category: linux
keywords:
- linux file ACL
- getfacl file permissions
- access control list linux
- linux permission manager
- file system access control
- getfacl command linux
- linux getfacl tool
- file ACL linux command
- manage linux file permissions
- linux access control tool
features:
- Display file access control lists
- Show numeric user and group IDs
- Output in tabular format
- Manage file system permissions
- Control access to files and directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# getfacl

> Get file access control lists (ACL).
> More information: <https://manned.org/getfacl>.

- Display the file access control list:

`getfacl {{path/to/file_or_directory}}`

- Display the file access control list with numeric user and group IDs:

`getfacl {{[-n|--numeric]}} {{path/to/file_or_directory}}`

- Display the file access control list with tabular output format:

`getfacl {{[-t|--tabular]}} {{path/to/file_or_directory}}`
