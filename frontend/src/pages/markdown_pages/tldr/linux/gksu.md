---
title: "Run Graphical Commands - Control Root Access | Free DevTools"
name: gksu
path: /freedevtools/tldr/unknown/gksu
canonical: "https://hexmos.com/freedevtools/tldr/unknown/gksu/"
description: "Run graphical commands with Gksu, a frontend for 'su'. Execute programs requiring root privileges without an X terminal. Free online tool, no registration required."
category: unknown
keywords:
- graphical command execution
- root access control
- su frontend
- privileged command runner
- gksu command linux
- gksu root privileges
- graphical sudo alternative
- linux root command
- pkexec alternative
- command line root access
features:
- Execute graphical applications with root privileges
- Run commands as a specified user account
- Preserve existing environment variables during execution
- Force command execution using either 'su' or 'sudo'
- Output debugging information for command analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gksu

> Frontend for `su`.
> Allows you to run graphical commands which need root access without having to run an X terminal emulator.
> Note: This command is deprecated in favor of commands like `pkexec`, and is no longer maintained.
> See also: `gksudo`.
> More information: <https://manned.org/man/gksudo>.

- Run a command as a specific user:

`gksu {{[-u|--user]}} {{userid}} {{command}}`

- Run the command while preserving the current environments:

`gksu {{[-u|--user]}} {{userid}} {{[-k|--preserve-env]}} {{command}}`

- Force `gksu` to use `su` to run the command:

`gksu {{[-u|--user]}} {{userid}} {{[-w|--su-mode]}} {{command}}`

- Force `gksu` to use `sudo` to run the command:

`gksu {{[-u|--user]}} {{userid}} {{[-S|--sudo-mode]}} {{command}}`

- Output debug info for the given command:

`gksu {{[-u|--user]}} {{userid}} {{[-d|--debug]}} {{command}}`
