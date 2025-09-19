---
title: "Sudo - Execute Commands as Superuser | Online Free DevTools by Hexmos"
name: sudo
path: /freedevtools/tldr/common/sudo
canonical: "https://hexmos.com/freedevtools/tldr/common/sudo/"
description: "Execute commands as superuser with Sudo. Control system access and perform administrative tasks. Free online tool, no registration required."
category: common
keywords:
- sudo command
- execute as root
- superuser privileges
- linux sudo
- macos sudo
- command line sudo
- administrator access
- escalated privileges
- user management
- system administration
features:
- Execute commands with elevated privileges
- Run commands as a different user
- Edit files as the superuser
- Launch a shell with superuser privileges
- List allowed commands for a user
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sudo

> Executes a single command as the superuser or another user.
> More information: <https://www.sudo.ws/sudo.html>.

- Run a command as the superuser:

`sudo {{less /var/log/syslog}}`

- Edit a file as the superuser with your default editor:

`sudo {{[-e|--edit]}} {{/etc/fstab}}`

- Run a command as another user and/or group:

`sudo {{[-u|--user]}} {{user}} {{[-g|--group]}} {{group}} {{id -a}}`

- Repeat the last command prefixed with `sudo` (only in Bash, Zsh, etc.):

`sudo !!`

- Launch the default shell with superuser privileges and run login-specific files (`.profile`, `.bash_profile`, etc.):

`sudo {{[-i|--login]}}`

- Launch the default shell with superuser privileges without changing the environment:

`sudo {{[-s|--shell]}}`

- Launch the default shell as the specified user, loading the user's environment and reading login-specific files (`.profile`, `.bash_profile`, etc.):

`sudo {{[-i|--login]}} {{[-u|--user]}} {{user}}`

- List the allowed (and forbidden) commands for the invoking user:

`sudo {{[-ll|--list --list]}}`
