---
title: "Cmdkey - Create User Credentials | Free DevTools"
name: cmdkey
path: /freedevtools/tldr/windows/cmdkey
canonical: "https://hexmos.com/freedevtools/tldr/windows/cmdkey/"
description: "Create user credentials with Cmdkey on Windows using the command line. Securely store usernames and passwords for network resources. Free online tool, no registration required."
category: windows
keywords:
- windows cmdkey
- cmdkey command
- windows credential manager
- store user credentials
- delete user credentials
- manage passwords windows
- command line credentials
- cmdkey examples
- windows command line tool
- network password manager
features:
- Store usernames and passwords securely
- List existing stored credentials
- Delete credentials for specific targets
- Add credentials for specific servers and users
- Manage network authentication from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cmdkey

> Create, show, and delete stored user names and passwords.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/cmdkey>.

- List all user credentials:

`cmdkey /list`

- Store credentials for a user that accesses a server:

`cmdkey /add:{{server_name}} /user:{{user_name}}`

- Delete credentials for a specific target:

`cmdkey /delete {{target_name}}`
