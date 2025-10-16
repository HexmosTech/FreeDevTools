---
title: "User List - Display Logged-In Users | Online Free DevTools by Hexmos"
name: users
path: "/freedevtools/tldr/common/users/"
canonical: "https://hexmos.com/freedevtools/tldr/common/users/"
description: "Display users logged into the system with the Users command. Check current user sessions and improve system monitoring. Free online tool, no registration required."
category: common
keywords:
- logged in users list
- display active users
- linux users command
- macos users command
- unix users command
- show logged in usernames
- system user monitoring
- wtmp file users
- coreutils users
- terminal user sessions
features:
- Print a list of currently logged-in usernames
- Display usernames from a specified wtmp file
- Report all users across the system
- List users based on login records
- Provide system activity information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# users

> Display a list of logged in users.
> See also: `useradd`, `userdel`, `usermod`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/users-invocation.html>.

- Print logged in usernames:

`users`

- Print logged in usernames according to a given file:

`users {{/var/log/wmtp}}`
