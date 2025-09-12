---
title: "User Database Control - Inspect Users and Groups | Free DevTools"
name: userdbctl
path: /freedevtools/tldr/linux/userdbctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/userdbctl/"
description: "Inspect users and groups with userdbctl. Analyze system user databases and manage memberships. Free online tool, no registration required."
category: linux
keywords:
  - user database control
  - userdbctl command
  - linux user management
  - systemd user database
  - user account inspection
  - group membership analysis
  - user details retrieval
  - group details retrieval
  - systemd user services
  - user database debugging
features:
  - List all known user records
  - Show detailed user information
  - List all known group records
  - Show detailed group information
  - List systemd user database services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# userdbctl

> Inspect users, groups and group memberships on the system.
> More information: <https://www.freedesktop.org/software/systemd/man/userdbctl.html>.

- List all known user records:

`userdbctl user`

- Show details of a specific user:

`userdbctl user {{username}}`

- List all known groups:

`userdbctl group`

- Show details of a specific group:

`userdbctl group {{groupname}}`

- List all services currently providing user/group definitions to the system:

`userdbctl services`
