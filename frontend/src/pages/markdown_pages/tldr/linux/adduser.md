---
title: "Create Users - adduser Command | Free DevTools"
name: adduser
path: /freedevtools/tldr/linux/adduser
canonical: "https://hexmos.com/freedevtools/tldr/linux/adduser/"
description: "Create new users with the adduser command. Manage user accounts, home directories, and group memberships efficiently. Free online tool, no registration required."
category: linux
keywords:
  - user account creation
  - adduser command
  - linux user management
  - system user creation
  - user account management linux
  - create linux user
  - adduser tutorial
  - command line user creation
  - manage user accounts
  - linux adduser
features:
  - Create new user accounts with custom home directories.
  - Specify the login shell for new users.
  - Add users to specific groups.
  - Create users without home directories.
  - Set user passwords during account creation.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# adduser

> User addition utility.
> More information: <https://manned.org/adduser>.

- Create a new user with a default home directory and prompt the user to set a password:

`adduser {{username}}`

- Create a new user without a home directory:

`adduser --no-create-home {{username}}`

- Create a new user with a home directory at the specified path:

`adduser --home {{path/to/home}} {{username}}`

- Create a new user with the specified shell set as the login shell:

`adduser --shell {{path/to/shell}} {{username}}`

- Create a new user belonging to the specified group:

`adduser --ingroup {{group}} {{username}}`
