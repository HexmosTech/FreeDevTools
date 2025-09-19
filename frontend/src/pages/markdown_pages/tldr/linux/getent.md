---
title: "Getent - Retrieve System Database Entries | Online Free DevTools by Hexmos"
name: getent
path: /freedevtools/tldr/linux/getent
canonical: "https://hexmos.com/freedevtools/tldr/linux/getent/"
description: "Retrieve system database entries with Getent. Access group, user, service, and host information using Name Service Switch. Free online tool, no registration required."
category: linux
keywords:
  - getent entries
  - getent database lookup
  - getent group information
  - getent user information
  - getent services list
  - getent host lookup
  - getent passwd
  - getent hosts
  - linux getent
  - nsswitch lookup
features:
  - Retrieve user account information by UID
  - Perform reverse DNS lookups for hosts
  - List all available groups
  - Display members of a specific group
  - Retrieve a list of all available services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# getent

> Get entries from Name Service Switch libraries.
> More information: <https://manned.org/getent>.

- Get list of all groups:

`getent group`

- See the members of a group:

`getent group {{group_name}}`

- Get list of all services:

`getent services`

- Find a username by UID:

`getent passwd 1000`

- Perform a reverse DNS lookup:

`getent hosts {{host}}`
