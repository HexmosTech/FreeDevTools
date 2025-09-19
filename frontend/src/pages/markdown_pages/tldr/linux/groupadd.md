---
title: "Create Linux Groups - Manage User Groups | Online Free DevTools by Hexmos"
name: groupadd
path: /freedevtools/tldr/linux/groupadd
canonical: "https://hexmos.com/freedevtools/tldr/linux/groupadd/"
description: "Create Linux user groups easily with groupadd. Add groups, specify group IDs, and manage system groups efficiently. Free online tool, no registration required."
category: linux
keywords:
  - linux group add
  - add user group linux
  - linux group management
  - create linux group command
  - group ID management linux
  - system group creation linux
  - group administration linux
  - linux user management
  - command line group add
  - linux groupadd command
features:
  - Add a new user group to the system
  - Create a new system group for services
  - Specify a custom group ID during group creation
  - Manage group membership for users
  - Simplify user administration via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# groupadd

> Add user groups to the system.
> See also: `groups`, `groupdel`, `groupmod`.
> More information: <https://manned.org/groupadd>.

- Create a new group:

`sudo groupadd {{group_name}}`

- Create a new system group:

`sudo groupadd {{[-r|--system]}} {{group_name}}`

- Create a new group with the specific groupid:

`sudo groupadd {{[-g|--gid]}} {{id}} {{group_name}}`
