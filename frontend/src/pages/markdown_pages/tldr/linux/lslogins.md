---
title: "Lslogins - Show User Logins on Linux | Online Free DevTools by Hexmos"
name: lslogins
path: /freedevtools/tldr/linux/lslogins
canonical: "https://hexmos.com/freedevtools/tldr/linux/lslogins/"
description: "Display Linux user logins with lslogins. Quickly review user accounts, last logins, and group memberships on your system. Free online tool, no registration required."
category: linux
keywords:
  - linux user logins
  - show user logins linux
  - linux login information
  - command line user data
  - user account details linux
  - system user accounts
  - last login details linux
  - linux group memberships
  - linux account management
  - linux security auditing
features:
  - Display all user accounts on the system
  - Filter users by group membership
  - Show last login timestamps
  - List system accounts separately
  - Display supplementary groups for users
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lslogins

> Show information about users on a Linux system.
> More information: <https://manned.org/lslogins>.

- Display users in the system:

`lslogins`

- Display users belonging to a specific group:

`lslogins {{[-g|--groups]}} {{groups}}`

- Display user accounts:

`lslogins {{[-u|--user-accs]}}`

- Display last logins:

`lslogins {{[-L|--last]}}`

- Display system accounts:

`lslogins {{[-s|--system-accs]}}`

- Display supplementary groups:

`lslogins {{[-G|--supp-groups]}}`
