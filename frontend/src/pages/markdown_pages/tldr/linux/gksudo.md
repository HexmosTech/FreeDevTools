---
title: "Run Graphical Sudo - Execute Commands with Root | Online Free DevTools by Hexmos"
name: gksudo
path: /freedevtools/tldr/linux/gksudo
canonical: "https://hexmos.com/freedevtools/tldr/linux/gksudo/"
description: "Execute commands with graphical sudo. Run graphical applications requiring root privileges securely and easily. Free online tool, no registration required."
category: linux
keywords:
- graphical sudo command
- linux sudo graphical interface
- gksudo linux alternative
- execute command as root linux
- run GUI as root
- elevate privileges linux
- deprecated sudo replacement
- pkexec linux alternative
- su mode execution linux
- sudo mode execution linux
features:
- Run graphical commands with root privileges
- Execute commands as a specific user
- Preserve the current environment during execution
- Force execution via `su` or `sudo`
- Output debug information for commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gksudo

> Frontend for `sudo`.
> Allows you to run graphical commands which need root access without having to run an X terminal emulator.
> Note: This command is deprecated in favor of commands like `pkexec`, and is no longer maintained.
> See also: `gksu`.
> More information: <https://manned.org/man/gksudo>.

- Run a command as a specific user:

`gksudo {{[-u|--user]}} {{userid}} {{command}}`

- Run the command while preserving the current environments:

`gksudo {{[-u|--user]}} {{userid}} {{[-k|--preserve-env]}} {{command}}`

- Force `gksudo` to use `su` to run the command:

`gksu {{[-u|--user]}} {{userid}} {{[-w|--su-mode]}} {{command}}`

- Force `gksudo` to use `sudo` to run the command:

`gksudo {{[-u|--user]}} {{userid}} {{[-S|--sudo-mode]}} {{command}}`

- Output debug info for the given command:

`gksudo {{[-u|--user]}} {{userid}} {{[-d|--debug]}} {{command}}`
