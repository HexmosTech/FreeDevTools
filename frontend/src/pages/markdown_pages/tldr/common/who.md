---
title: "Who - Display Logged-In Users | Free DevTools"
name: who
path: /freedevtools/tldr/common/who
canonical: "https://hexmos.com/freedevtools/tldr/common/who/"
description: "Display logged-in users with Who command. Identify active sessions and system boot time on Linux/macOS. Free online tool, no registration required."
category: common
keywords:
- logged in users
- display users
- user sessions
- linux who
- macos who
- command line users
- active users
- system boot time
- login information
- who command
features:
- Display currently logged-in users
- Show user's username and terminal line
- Report system boot time
- Display all available user information
- Include table headers for output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# who

> Display who is logged in and related data (processes, boot time).
> See also: `whoami`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/who-invocation.html>.

- Display the username, line, and time of all currently logged-in sessions:

`who`

- Display all available information:

`who {{[-a|--all]}}`

- Display all available information with table headers:

`who {{[-aH|--all --heading]}}`
