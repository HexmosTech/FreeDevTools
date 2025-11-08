---
title: "Logoff - Terminate Login Sessions | Online Free DevTools by Hexmos"
name: logoff
path: "/freedevtools/tldr/windows/logoff/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/logoff/"
description: "Terminate login sessions with Logoff, a Windows command-line tool. Quickly end user sessions and manage remote desktop connections. Free online tool, no registration required."
category: windows
keywords:
- windows logoff command
- terminate login session
- windows command line
- remote desktop logoff
- rdp session termination
- windows session manager
- windows logoff script
- force user logoff
- windows server logoff
- logoff by session id
features:
- Terminate the current user session.
- Logoff a user session by name or ID.
- Logoff sessions on remote servers through RDP.
- Forcefully terminate inactive user sessions.
- Manage and control user access via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# logoff

> Terminate a login session.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/logoff>.

- Terminate the current session:

`logoff`

- Terminate a session by its name or ID:

`logoff {{session_name|session_id}}`

- Terminate a session on a specific server connected through RDP:

`logoff {{session_name|session_id}} /server:{{servername}}`
