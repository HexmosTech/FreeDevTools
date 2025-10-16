---
title: "Query User Sessions - Display Processes | Online Free DevTools by Hexmos"
name: query
path: "/freedevtools/tldr/windows/query/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/query/"
description: "Display user sessions with Query command. Retrieve information about running processes and user sessions. Free online tool, no registration required."
category: windows
keywords:
- windows query
- windows query session
- query process
- windows command line
- user session viewer
- process information
- remote session query
- process monitor
- command line query
- windows task management
features:
- Display all active user sessions on Windows.
- Retrieve session information on remote servers.
- List all running processes by session.
- Filter processes by user name.
- Identify logged-in users on the system.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# query

> Display information about user sessions and process.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/query>.

- Display all user sessions:

`query session`

- Display the current user sessions on a remote computer:

`query session /server:{{hostname}}`

- Display logged in users:

`query user`

- Display all user sessions on a remote computer:

`query session /server:{{hostname}}`

- Display all running processes:

`query process`

- Display running processes by session or user name:

`query process {{session_name|user_name}}`
