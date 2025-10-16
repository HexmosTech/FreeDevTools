---
title: "Nushell - Execute Shell Commands | Online Free DevTools by Hexmos"
name: nu
path: "/freedevtools/tldr/common/nu/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nu/"
description: "Execute shell commands with Nushell, a modern structured shell. Automate tasks and manage your system with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- nushell commands
- shell scripting
- command line tool
- cross platform shell
- structured shell
- nushell scripting
- nu shell
- command execution
- linux shell
- macos shell
features:
- Execute shell commands interactively
- Execute specific commands directly from the command line
- Execute Nushell scripts
- Log script execution with various levels
- Automate tasks with scripting capabilities
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nu

> Nushell ("a new type of shell") takes a modern, structured approach to your command-line.
> See also: `elvish`.
> More information: <https://www.nushell.sh>.

- Start an interactive shell session:

`nu`

- Execute specific commands:

`nu --commands "{{echo 'nu is executed'}}"`

- Execute a specific script:

`nu {{path/to/script.nu}}`

- Execute a specific script with logging:

`nu --log-level {{error|warn|info|debug|trace}} {{path/to/script.nu}}`
