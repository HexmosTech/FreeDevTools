---
title: "Groupmod - Modify User Groups | Online Free DevTools by Hexmos"
name: groupmod
path: "/freedevtools/tldr/linux/groupmod"
canonical: "https://hexmos.com/freedevtools/tldr/linux/groupmod/"
description: "Modify user groups with Groupmod. Easily change group names and IDs on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux group modification
- user group manager linux
- group name change linux
- group id change linux
- linux groupmod command
- linux user management
- modify linux group
- group administration linux
- linux command line tools
- system administration linux
features:
- Change an existing group's name
- Modify an existing group's ID (GID)
- Administer user groups through command line
- Provide secure user and group access control
- Integrate with existing Linux system administration practices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# groupmod

> Modify existing user groups in the system.
> See also: `groups`, `groupadd`, `groupdel`.
> More information: <https://manned.org/groupmod>.

- Change the group name:

`sudo groupmod {{[-n|--new-name]}} {{new_group}} {{group_name}}`

- Change the group ID:

`sudo groupmod {{[-g|--gid]}} {{new_id}} {{group_name}}`
