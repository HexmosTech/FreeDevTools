---
title: "Edit Quotas - Manage Disk Usage with edquota | Online Free DevTools by Hexmos"
name: edquota
path: "/freedevtools/tldr/linux/edquota/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/edquota/"
description: "Manage disk usage with edquota, a command-line tool for controlling user and group quotas. Edit quota limits and grace periods easily. Free online tool, no registration required."
category: linux
keywords:
  - linux disk quota management
  - edquota command-line tool
  - user quota modification
  - group quota modification
  - filesystem quota control
  - linux system administration
  - quota grace period editing
  - edquota usage examples
  - command-line quota tool
  - unix disk quota
features:
  - Edit user disk quotas
  - Edit group disk quotas
  - Set quota limits for filesystems
  - Modify default grace periods for exceeding quotas
  - Duplicate quotas between users
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# edquota

> Edit quotas for a user or group. By default it operates on all filesystems with quotas.
> Quota information is stored permanently in the `quota.user` and `quota.group` files in the root of the filesystem.
> More information: <https://manned.org/edquota>.

- Edit quota of the current user:

`edquota {{[-u|--user]}} $(whoami)`

- Edit quota of a specific user:

`sudo edquota {{[-u|--user]}} {{username}}`

- Edit quota for a group:

`sudo edquota {{[-g|--group]}} {{group}}`

- Restrict operations to a given filesystem (by default edquota operates on all filesystems with quotas):

`sudo edquota {{[-f|--file-system]}} {{filesystem}}`

- Edit the default grace period:

`sudo edquota {{[-t|--edit-period]}}`

- Duplicate a quota to other users:

`sudo edquota {{[-p|--prototype]}} {{reference_user}} {{destination_user1 destination_user2 ...}}`
