---
title: "Display User ID - Manage User Identity | Online Free DevTools by Hexmos"
name: id
path: /freedevtools/tldr/common/id
canonical: "https://hexmos.com/freedevtools/tldr/common/id/"
description: "Display user identity with the id command. Manage user and group IDs, and retrieve user information efficiently. Free online tool, no registration required."
category: common
keywords:
- display user ID
- user ID lookup
- group ID lookup
- linux user identity
- macos user identity
- display user groups
- command line user info
- user account details
- unix user identity
- posix user info
features:
- Display current user's UID, GID, and groups.
- Display user identity by name or number.
- Display primary group identity.
- Retrieve user information for a specified user.
- Show user and group IDs numerically.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# id

> Display current user and group identity.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/id-invocation.html>.

- Display current user's ID (UID), group ID (GID) and groups to which they belong:

`id`

- Display the current user identity:

`id {{[-un|--user --name]}}`

- Display the current user identity as a number:

`id {{[-u|--user]}}`

- Display the current primary group identity:

`id {{[-gn|--group --name]}}`

- Display the current primary group identity as a number:

`id {{[-g|--group]}}`

- Display an arbitrary user's ID (UID), group ID (GID) and groups to which they belong:

`id {{username}}`
