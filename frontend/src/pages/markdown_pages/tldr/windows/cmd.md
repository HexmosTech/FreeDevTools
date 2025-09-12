---
title: "Control Windows CMD - Command Interpreter | Free DevTools"
name: cmd
path: /freedevtools/tldr/unknown/cmd
canonical: "https://hexmos.com/freedevtools/tldr/unknown/cmd/"
description: "Control Windows CMD commands with this command interpreter. Execute batch scripts, run specific commands, and manage system processes. Free online tool, no registration required."
category: unknown
keywords:
- windows command interpreter
- cmd command execution
- batch script runner
- windows shell commands
- command prompt syntax
- interactive shell session
- command line arguments
- windows batch processing
- windows system commands
- windows command extensions
features:
- Execute individual commands or batch scripts
- Launch an interactive command-line session
- Enable or disable command extensions
- Enable or disable delayed variable expansion
- Execute commands with unicode encoding
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cmd

> The Windows command interpreter.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/cmd>.

- Start an interactive shell session:

`cmd`

- Execute specific [c]ommands:

`cmd /c {{echo Hello world}}`

- Execute a specific script:

`cmd {{path\to\script.bat}}`

- Execute specific commands and then enter an interactive shell:

`cmd /k {{echo Hello world}}`

- Start an interactive shell session where `echo` is disabled in command output:

`cmd /q`

- Start an interactive shell session with delayed [v]ariable expansion enabled or disabled:

`cmd /v:{{on|off}}`

- Start an interactive shell session with command [e]xtensions enabled or disabled:

`cmd /e:{{on|off}}`

- Start an interactive shell session with used [u]nicode encoding:

`cmd /u`
