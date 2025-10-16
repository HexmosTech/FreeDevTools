---
title: "Usermod Command - Manage Linux Users | Online Free DevTools by Hexmos"
name: usermod
path: "/freedevtools/tldr/linux/usermod/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/usermod/"
description: "Manage Linux user accounts with the usermod command. Modify usernames, UIDs, groups, home directories, and account status. Free online tool, no registration required."
category: linux
keywords:
  - linux user management
  - usermod command
  - linux account modification
  - manage linux users
  - modify user details
  - linux usermod tutorial
  - change user id linux
  - linux user shell change
  - add user to group linux
  - remove user from group linux
features:
  - Modify usernames
  - Change user IDs (UIDs)
  - Manage user groups (add or remove)
  - Update user home directories
  - Lock and unlock user accounts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# usermod

> Modify a user account.
> See also: `users`, `useradd`, `userdel`.
> More information: <https://manned.org/usermod>.

- Change a username:

`sudo usermod {{[-l|--login]}} {{new_username}} {{username}}`

- Change a user ID:

`sudo usermod {{[-u|--uid]}} {{id}} {{username}}`

- Change a user shell:

`sudo usermod {{[-s|--shell]}} {{path/to/shell}} {{username}}`

- Add a user to supplementary groups (mind the lack of whitespace):

`sudo usermod {{[-aG|--append --groups]}} {{group1,group2,...}} {{username}}`

- Remove a user from specific groups:

`sudo usermod {{[-rG|--remove --groups]}} {{group1,group2,...}} {{username}}`

- Change a user home directory:

`sudo usermod {{[-m|--move-home]}} {{[-d|--home]}} {{path/to/new_home}} {{username}}`

- Lock an account:

`sudo usermod {{[-L|--lock]}} {{username}}`

- Unlock an account:

`sudo usermod {{[-U|--unlock]}} {{username}}`
