---
title: "Runuser - Execute Commands as Different User | Online Free DevTools by Hexmos"
name: runuser
path: /freedevtools/tldr/linux/runuser
canonical: "https://hexmos.com/freedevtools/tldr/linux/runuser/"
description: "Execute commands with runuser as another user. Manage user permissions and execute specific commands using different user accounts. Free online tool, no registration required."
category: linux
keywords:
- linux runuser command
- execute commands as user linux
- linux su alternative
- linux user context switch
- linux privilege escalation
- linux command execution as other user
- runuser without password
- run commands as different group linux
- linux user impersonation tool
- linux root user management
features:
- Execute commands as a specified user
- Switch user and group context for command execution
- Start a login shell as a specific user
- Preserve environment variables during user switch
- Specify a custom shell for command execution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# runuser

> Run commands as a user and group without asking for password (needs root privileges).
> More information: <https://manned.org/runuser>.

- Run command as a different user:

`runuser {{user}} {{[-c|--command]}} '{{command}}'`

- Run command as a different user and group:

`runuser {{user}} {{[-g|--group]}} {{group}} {{[-c|--command]}} '{{command}}'`

- Start a login shell as a specific user:

`runuser {{user}} {{[-l|--login]}}`

- Specify a shell for running instead of the default shell (also works for login):

`runuser {{user}} {{[-s|--shell]}} {{/bin/sh}}`

- Preserve the entire environment of root (only if `--login` is not specified):

`runuser {{user}} {{[-p|--preserve-environment]}} {{[-c|--command]}} '{{command}}'`
