---
title: "Whoami - Display User Details | Online Free DevTools by Hexmos"
name: whoami
path: "/freedevtools/tldr/windows/whoami/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/whoami/"
description: "Display user details with Whoami. Show username, groups, privileges, and logon ID. A comprehensive user information retrieval tool. Free online tool, no registration required."
category: windows
keywords:
  - user details
  - display user
  - user information
  - username lookup
  - group membership
  - user privileges
  - logon ID
  - user principal name
  - user identity
  - command line user
features:
  - Display current user's username
  - List user's group memberships
  - Show user's assigned privileges
  - Retrieve user principal name (UPN)
  - Display user's logon ID
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# whoami

> Display details about the current user.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/whoami>.

- Display the username of the current user:

`whoami`

- Display the groups that the current user is a member of:

`whoami /groups`

- Display the privileges of the current user:

`whoami /priv`

- Display the user principal name (UPN) of the current user:

`whoami /upn`

- Display the logon ID of the current user:

`whoami /logonid`

- Display all information for the current user:

`whoami /all`
