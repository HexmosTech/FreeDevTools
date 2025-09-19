---
title: "Change Password - Manage User Info on OpenBSD | Online Free DevTools by Hexmos"
name: chpass
path: "/freedevtools/tldr/openbsd/chpass"
canonical: "https://hexmos.com/freedevtools/tldr/openbsd/chpass/"
description: "Manage user information with Change Password (chpass) on OpenBSD. Update login shells, passwords, and user database entries quickly. Free online tool, no registration required."
category: openbsd
keywords:
- "user password manager"
- "OpenBSD user account"
- "login shell editor"
- "user database modifier"
- "chpass OpenBSD"
- "password encryption"
- "user ID control"
- "group ID control"
- "user account settings"
- "OpenBSD security"
features:
- "Modify user login shell"
- "Change user password securely"
- "Update user database information"
- "Specify user entry in passwd format"
- "Manage OpenBSD user accounts"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chpass

> Add or change user database information, including login shell and password.
> See also: `passwd`.
> More information: <https://man.openbsd.org/chpass>.

- Set a specific login shell for the current user interactively:

`doas chpass`

- Set a specific login [s]hell for the current user:

`doas chpass -s {{path/to/shell}}`

- Set a login [s]hell for a specific user:

`doas chpass -s {{path/to/shell}} {{username}}`

- Specify a user database entry in the `passwd` file format:

`doas chpass -a {{username:encrypted_password:uid:gid:...}}`
