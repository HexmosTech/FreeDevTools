---
title: "Change User Password - Control User Data | Online Free DevTools by Hexmos"
name: chpass
path: "/freedevtools/tldr/osx/chpass/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/chpass/"
description: "Change user password easily with chpass. Update login shell and user database information with this command-line tool. Free online tool, no registration required."
category: osx
keywords:
  - user password change
  - user database update
  - login shell manager
  - chpass command
  - user account settings
  - unix user management
  - freebsd chpass
  - command line user tools
  - system user administration
  - user authentication tool
features:
  - Modify user database information
  - Change user login shell
  - Interact with user account settings
  - Authenticate against directory nodes
  - Update user credentials from command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chpass

> Add or change user database information, including login shell and password.
> Note: It's not possible to change the user's password on Open Directory systems, use `passwd` instead.
> See also: `passwd`.
> More information: <https://man.freebsd.org/cgi/man.cgi?chpass>.

- Add or change user database information for the current user interactively:

`su -c chpass`

- Set a specific login [s]hell for the current user:

`chpass -s {{path/to/shell}}`

- Set a login [s]hell for a specific user:

`chpass -s {{path/to/shell}} {{username}}`

- Edit the user record on the directory node at the given [l]ocation:

`chpass -l {{location}} -s {{path/to/shell}} {{username}}`

- Use the given [u]sername when authenticating to the directory node containing the user:

`chpass -u {{authname}} -s {{path/to/shell}} {{username}}`
