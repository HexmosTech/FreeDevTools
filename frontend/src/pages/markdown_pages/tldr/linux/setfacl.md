---
title: "Setfacl - Control File Access Lists on Linux | Online Free DevTools by Hexmos"
name: setfacl
path: /freedevtools/tldr/linux/setfacl
canonical: "https://hexmos.com/freedevtools/tldr/linux/setfacl/"
description: "Control file access lists with Setfacl. Manage permissions on Linux systems, set default ACLs, and remove specific user access. Free online tool, no registration required."
category: linux
keywords:
- setfacl linux
- linux acl
- file access control linux
- setfacl command
- linux permissions management
- setfacl modify access
- setfacl remove access
- setfacl default acl
- linux file permissions
- acl permissions linux
features:
- Modify file access control lists for specific users
- Set default ACLs for newly created files in a directory
- Remove ACL entries for specified users
- Remove all ACL entries from a file or directory
- Manage file permissions using ACLs on Linux
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# setfacl

> Set file access control lists (ACL).
> More information: <https://manned.org/setfacl>.

- Modify ACL of a file for user with read and write access:

`setfacl {{[-m|--modify]}} u:{{username}}:rw {{path/to/file_or_directory}}`

- Modify default ACL of a file for all users:

`setfacl {{[-m|--modify]}} {{[-d|--default]}} u::rw {{path/to/file_or_directory}}`

- Remove ACL of a file for a user:

`setfacl {{[-x|--remove]}} u:{{username}} {{path/to/file_or_directory}}`

- Remove all ACL entries of a file:

`setfacl {{[-b|--remove-all]}} {{path/to/file_or_directory}}`
