---
title: "Pdbedit - Edit Samba User Database | Online Free DevTools by Hexmos"
name: pdbedit
path: /freedevtools/tldr/linux/pdbedit
canonical: "https://hexmos.com/freedevtools/tldr/linux/pdbedit/"
description: "Edit user database with pdbedit, a powerful Samba management tool. Manage user accounts and security settings efficiently on Linux. Free online tool, no registration required."
category: linux
keywords:
- samba user management
- linux user database
- pdbedit command line
- samba account editor
- user password reset
- samba user list
- samba user delete
- linux samba configuration
- samba user account
- pdbedit linux command
features:
- List all Samba user accounts with details
- Add existing Unix users to the Samba database
- Delete Samba user accounts
- Reset a Samba user's failed password counter
- Edit Samba user account properties
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdbedit

> Edit the Samba user database.
> For simple user add/remove/password, you can also use `smbpasswd`.
> More information: <https://manned.org/pdbedit>.

- List all Samba users (use verbose flag to show their settings):

`sudo pdbedit --list --verbose`

- Add an existing Unix user to Samba (will prompt for password):

`sudo pdbedit --user {{username}} --create`

- Remove a Samba user:

`sudo pdbedit --user {{username}} --delete`

- Reset a Samba user's failed password counter:

`sudo pdbedit --user {{username}} --bad-password-count-reset`
