---
title: "Userdel - Remove Linux User Accounts | Online Free DevTools by Hexmos"
name: userdel
path: /freedevtools/tldr/linux/userdel
canonical: "https://hexmos.com/freedevtools/tldr/linux/userdel/"
description: "Remove Linux user accounts efficiently with Userdel. Manage user permissions and system security with this command-line tool. Free online tool, no registration required."
category: linux
keywords:
- linux userdel
- user account deletion
- linux user management
- remove linux user
- userdel command
- linux system administration
- delete user account linux
- linux user permissions
- command line user management
- user account removal
features:
- Remove user accounts from the Linux system
- Delete user home directories and mail spools
- Remove user accounts from specific root directories
- Manage user permissions through command line
- Securely delete user accounts from the system
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# userdel

> Remove a user account or remove a user from a group.
> See also: `users`, `useradd`, `usermod`.
> More information: <https://manned.org/userdel>.

- Remove a user:

`sudo userdel {{username}}`

- Remove a user in other root directory:

`sudo userdel {{[-R|--root]}} {{path/to/other/root}} {{username}}`

- Remove a user along with the home directory and mail spool:

`sudo userdel {{[-r|--remove]}} {{username}}`
