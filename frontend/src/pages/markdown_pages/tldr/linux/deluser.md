---
title: "Delete User - Manage System Users | Free DevTools"
name: deluser
path: /freedevtools/tldr/linux/deluser
canonical: "https://hexmos.com/freedevtools/tldr/linux/deluser/"
description: "Delete users efficiently with deluser. Manage user accounts, remove home directories, and backup user data on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux user management
- delete linux user
- deluser command
- remove user account linux
- linux user account deletion
- user account management
- command line user deletion
- backup user data linux
- remove user home directory
- linux system administration
features:
- Remove a user account from the system
- Delete a user's home directory
- Backup a user's home directory before deletion
- Remove all files owned by a specified user
- Manage user accounts via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# deluser

> Delete a user from the system.
> More information: <https://manned.org/deluser>.

- Remove a user:

`sudo deluser {{username}}`

- Remove a user and their home directory:

`sudo deluser --remove-home {{username}}`

- Remove a user and their home, but backup their files into a `.tar.gz` file in the specified directory:

`sudo deluser --backup-to {{path/to/backup_directory}} --remove-home {{username}}`

- Remove a user, and all files owned by them:

`sudo deluser --remove-all-files {{username}}`
