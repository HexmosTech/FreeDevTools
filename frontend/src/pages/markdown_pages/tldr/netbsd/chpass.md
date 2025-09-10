---
title: chpass
name: chpass
path: /freedevtools/tldr/netbsd/chpass
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/chpass/"
description: Add or change user database information, including login shell and password.
category: netbsd
keywords:
- user account management
- change user password
- modify user login shell
- system administration tasks
- manage user database
- update password file
- modify user information
- netbsd user management
- configure user environment
- command line utility
features:
- set a specific login shell
- update user database entries
- modify password information
- update local password file
- change yP password database entry
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
