---
title: "Switch User - Manage Linux User Sessions | Online Free DevTools by Hexmos"
name: su
path: /freedevtools/tldr/linux/su
canonical: "https://hexmos.com/freedevtools/tldr/linux/su/"
description: "Manage Linux user sessions with Switch User (su). Gain root privileges, change users, and execute commands securely. Free online tool, no registration required."
category: linux
keywords:
- linux switch user
- su command linux
- linux user management
- root access linux
- linux command line
- shell access linux
- linux su command
- switch user command
- linux security
- linux user shell
features:
- Switch to the superuser account
- Change the current user session
- Execute commands as another user
- Simulate a full login shell
- Obtain root privileges on Linux
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# su

> Switch shell to another user.
> More information: <https://manned.org/su>.

- Switch to superuser (requires the root password):

`su`

- Switch to a given user (requires the user's password):

`su {{username}}`

- Switch to a given user and simulate a full login shell:

`su - {{username}}`

- Execute a command as another user:

`su - {{username}} {{[-c|--command]}} "{{command}}"`
