---
title: "SMB Password Control - Manage Samba User Passwords | Free DevTools"
name: smbpasswd
path: /freedevtools/tldr/linux/smbpasswd
canonical: "https://hexmos.com/freedevtools/tldr/linux/smbpasswd/"
description: "Control SMB passwords with smbpasswd. Manage Samba user accounts, add users, change passwords, and delete accounts effortlessly. Free online tool, no registration required."
category: linux
keywords:
- samba password manager
- smb user control
- linux password utility
- samba account management
- smbpasswd command
- windows network authentication
- samba security tool
- samba user password reset
- linux smbpasswd utility
- smb login control
features:
- Add new Samba users
- Modify existing Samba passwords
- Delete Samba user accounts
- Manage Samba authentication on Linux
- Synchronize Samba passwords with Unix accounts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# smbpasswd

> Add/remove a Samba user or change its password.
> Samba users must have an existing local Unix account.
> More information: <https://manned.org/smbpasswd.8>.

- Change the current user's SMB password:

`smbpasswd`

- Add a specified user to Samba and set password (user should already exist in system):

`sudo smbpasswd -a {{username}}`

- Modify an existing Samba user's password:

`sudo smbpasswd {{username}}`

- Delete a Samba user (use `pdbedit` instead if the Unix account has been deleted):

`sudo smbpasswd -x {{username}}`
