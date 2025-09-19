---
title: "Run Command as Root - Elevate Privileges | Online Free DevTools by Hexmos"
name: run0
path: /freedevtools/tldr/linux/run0
canonical: "https://hexmos.com/freedevtools/tldr/linux/run0/"
description: "Elevate privileges instantly with Run Command as Root. Execute commands as root or another user via polkit, using systemd service. Free online tool, no registration required."
category: linux
keywords:
  - run command as root
  - elevate privileges linux
  - polkit authentication
  - systemd service command
  - execute command as user
  - run command as group
  - linux privilege escalation
  - command line root access
  - linux run0 command
  - interactive root shell
features:
  - Execute commands as root interactively
  - Run commands as a specific user
  - Run commands as a specific group
  - Authenticate via polkit for privilege elevation
  - Execute commands using a systemd service
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# run0

> Elevate privileges interactively.
> Similar to `sudo`, but it's not a SUID binary, authentication takes place via polkit, and commands are invoked from a `systemd` service.
> More information: <https://www.freedesktop.org/software/systemd/man/run0.html>.

- Run a command as root:

`run0 {{command}}`

- Run a command as another user and/or group:

`run0 {{[-u|--user]}} {{username|uid}} {{[-g|--group]}} {{group_name|gid}} {{command}}`
