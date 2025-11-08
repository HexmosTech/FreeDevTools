---
title: "chpass Command - Manage User Accounts | Online Free DevTools by Hexmos"
name: chpass
path: "/freedevtools/tldr/freebsd/chpass/"
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/chpass/"
description: "Manage user accounts with the chpass command.  Modify user database information, including passwords and shells. Free online tool, no registration required."
category: freebsd
keywords:
  - user account management command
  - linux user management
  - chpass command tutorial
  - unix user account control
  - change user password command
  - manage login shell command
  - set user account expiration
  - chpass nis server configuration
  - modify user database information
  - system user administration
features:
  - Interactively add or change user database information.
  - Set or change a user's login shell.
  - Modify a user's account expiration time.
  - Change a user's password securely.
  - Configure NIS server settings for user account management.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chpass

> Add or change user database information, including login shell and password.
> See also: `passwd`.
> More information: <https://man.freebsd.org/cgi/man.cgi?chpass>.

- Add or change user database information for the current user interactively:

`su -c chpass`

- Set a specific login [s]hell for the current user:

`chpass -s {{path/to/shell}}`

- Set a login [s]hell for a specific user:

`chpass -s {{path/to/shell}} {{username}}`

- Change the account [e]xpire time (in seconds from the epoch, UTC):

`su -c 'chpass -e {{time}} {{username}}'`

- Change a user's password:

`su -c 'chpass -p {{encrypted_password}} {{username}}'`

- Specify the [h]ostname or address of an NIS server to query:

`su -c 'chpass -h {{hostname}} {{username}}'`

- Specify a particular NIS [d]omain (system domain name by default):

`su -c 'chpass -d {{domain}} {{username}}'`
