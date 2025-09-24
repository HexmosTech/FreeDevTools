---
title: "Command Execution - Control Shell Commands | Online Free DevTools by Hexmos"
name: command
path: /freedevtools/tldr/common/command
canonical: "https://hexmos.com/freedevtools/tldr/common/command/"
description: "Control shell command execution with Command. Bypass functions and aliases, guaranteeing precise program execution. Free online tool, no registration required."
category: common
keywords:
- shell command execution
- command line bypass
- program execution control
- bash command override
- linux command utility
- command path resolution
- shell builtins ignore
- alias bypassing command
- force program execution
- command definition display
features:
- Execute programs bypassing shell functions and aliases.
- Force execution using the default `$PATH`.
- Display the path to the executable command.
- Resolve command definitions and aliases.
- Guarantee execution of standard utilities.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# command

> Command forces the shell to execute the program and ignore any functions, builtins and aliases with the same name.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-command>.

- Execute the `ls` program literally, even if an `ls` alias exists:

`command {{ls}}`

- Find and execute a command using a default `$PATH` (`/bin:/usr/bin:/sbin:/usr/sbin:/etc:/usr/etc`) that guarantees to find all standard utilities:

`command -p {{command_name}}`

- Display the path to the executable or the alias definition of a specific command:

`command -v {{command_name}}`
