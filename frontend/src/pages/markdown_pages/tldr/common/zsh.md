---
title: "Control Zsh Shell - Execute Commands | Free DevTools"
name: zsh
path: /freedevtools/tldr/common/zsh
canonical: "https://hexmos.com/freedevtools/tldr/common/zsh/"
description: "Execute shell commands with Zsh Shell. Run scripts, check syntax, and customize your terminal environment. Free online tool, no registration required."
category: common
keywords:
- zsh shell commands
- zsh script execution
- zsh command line interpreter
- zsh syntax checker
- bash compatible shell
- shell scripting linux
- shell scripting macOS
- zsh interactive shell
- zsh command pipeline
- zsh globbing disable
features:
- Execute commands interactively
- Run zsh scripts
- Check script syntax without execution
- Execute commands from stdin
- Disable globbing for specific commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zsh

> Z SHell, a Bash-compatible command-line interpreter.
> See also: `bash`, `histexpand`.
> More information: <https://zsh.sourceforge.io/Doc/Release/Invocation.html#Invocation>.

- Start an interactive shell session:

`zsh`

- Execute specific [c]ommands:

`zsh -c "{{echo Hello world}}"`

- Execute a specific script:

`zsh {{path/to/script.zsh}}`

- Check a specific script for syntax errors without executing it:

`zsh --no-exec {{path/to/script.zsh}}`

- Execute specific commands from `stdin`:

`{{echo Hello world}} | zsh`

- Execute a specific script, printing each command in the script before executing it:

`zsh --xtrace {{path/to/script.zsh}}`

- Start an interactive shell session in verbose mode, printing each command before executing it:

`zsh --verbose`

- Execute a specific command inside `zsh` with disabled glob patterns:

`noglob {{command}}`
