---
title: "Gpasswd - Manage Unix Groups | Online Free DevTools by Hexmos"
name: gpasswd
path: /freedevtools/tldr/linux/gpasswd
canonical: "https://hexmos.com/freedevtools/tldr/linux/gpasswd/"
description: "Manage Unix user groups with Gpasswd. Add, remove, and administer group members efficiently. Free online tool, no registration required."
category: linux
keywords:
  - Unix group management
  - Gpasswd command
  - Linux group admin
  - Add user to group
  - Remove user from group
  - Group password manager
  - ETC group administration
  - Gshadow management
  - User role management
  - Command-line group tools
features:
  - Define group administrators
  - Set group membership list
  - Create group passwords
  - Add users to groups
  - Remove users from groups
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gpasswd

> Administer `/etc/group` and `/etc/gshadow`.
> More information: <https://manned.org/gpasswd>.

- Define group administrators:

`sudo gpasswd {{[-A|--administrators]}} {{user1,user2}} {{group}}`

- Set the list of group members:

`sudo gpasswd {{[-M|--members]}} {{user1,user2}} {{group}}`

- Create a password for the named group:

`gpasswd {{group}}`

- Add a user to the named group:

`gpasswd {{[-a|--add]}} {{user}} {{group}}`

- Remove a user from the named group:

`gpasswd {{[-d|--delete]}} {{user}} {{group}}`
