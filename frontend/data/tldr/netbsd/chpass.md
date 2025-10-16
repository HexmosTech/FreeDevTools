---
title: "Change Password - Manage User Passwords | Online Free DevTools by Hexmos"
name: chpass
path: "/freedevtools/tldr/netbsd/chpass/"
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/chpass/"
description: "Manage user passwords easily with chpass. Update user database information and login shell on NetBSD systems. Free online tool, no registration required."
category: netbsd
keywords:
  - netbsd user password management
  - change user account password
  - modify login shell netbsd
  - netbsd user database update
  - update password file netbsd
  - manage user information netbsd
  - netbsd system administration
  - configure user environment
  - update local password netbsd
  - command line user management
features:
  - set a specific login shell interactively
  - update user database entries
  - modify password information locally
  - change yP password database entry
  - update local password file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chpass

> Add or change user database information, including login shell and password.
> See also: `passwd`.
> More information: <https://man.netbsd.org/chpass>.

- Set a specific login shell for the current user interactively:

`su -c chpass`

- Set a specific login [s]hell for the current user:

`chpass -s {{path/to/shell}}`

- Set a login [s]hell for a specific user:

`chpass -s {{path/to/shell}} {{username}}`

- Specify a user database entry in the `passwd` file format:

`su -c 'chpass -a {{username:encrypted_password:uid:gid:...}} -s {{path/to/file}}' {{username}}`

- Only update the [l]ocal password file:

`su -c 'chpass -l -s {{path/to/shell}}' {{username}}`

- Forcedly change the database [y]P password database entry:

`su -c 'chpass -y -s {{path/to/shell}}' {{username}}`
