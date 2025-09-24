---
title: "Control Fish Shell - Execute Commands Interactively | Online Free DevTools by Hexmos"
name: fish
path: /freedevtools/tldr/common/fish
canonical: "https://hexmos.com/freedevtools/tldr/common/fish/"
description: "Control interactive shells with Fish Shell. Customize startup configs and execute scripts efficiently using command line. Free online tool, no registration required."
category: common
keywords:
- fish shell command
- interactive shell commands
- fish shell script execution
- shell command execution
- fish shell configuration
- fish shell private mode
- shell environment variable
- shell command syntax
- shell script checker
- command line interpreter
features:
- Start interactive shell sessions
- Execute shell commands and scripts
- Check shell scripts for syntax errors
- Manage shell environment variables
- Operate shell in private mode
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fish

> The Friendly Interactive SHell, a command-line interpreter designed to be user friendly.
> More information: <https://fishshell.com/docs/current/cmds/fish.html>.

- Start an interactive shell session:

`fish`

- Start an interactive shell session without loading startup configs:

`fish {{[-N|--no-config]}}`

- Execute specific commands:

`fish {{[-c|--command]}} "{{echo 'fish is executed'}}"`

- Execute a specific script:

`fish {{path/to/script.fish}}`

- Check a specific script for syntax errors:

`fish {{[-N|--no-execute]}} {{path/to/script.fish}}`

- Execute specific commands from `stdin`:

`{{echo "echo 'fish is executed'"}} | fish`

- Start an interactive shell session in private mode, where the shell does not access old history or save new history:

`fish {{[-P|--private]}}`

- Define and export an environmental variable that persists across shell restarts (builtin):

`set {{[-U|--universal]}} {{[-x|--export]}} {{variable_name}} {{variable_value}}`
