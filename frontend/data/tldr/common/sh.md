---
title: "Bourne Shell - Execute Commands | Online Free DevTools by Hexmos"
name: sh
path: "/freedevtools/tldr/common/sh/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sh/"
description: "Execute commands using Bourne Shell, the standard command language interpreter. Run scripts and manage shell sessions easily. Free online tool, no registration required."
category: common
keywords:
- bourne shell command
- shell script execution
- sh command line
- bash alternative
- unix shell interpreter
- linux shell scripting
- posix shell commands
- command language interpreter
- interactive shell session
- execute shell script
features:
- Start an interactive shell session
- Execute a single command directly
- Run shell scripts from file paths
- Read and execute commands from stdin
- Use `histexpand` for command history expansion
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sh

> Bourne shell, the standard command language interpreter.
> See also: `histexpand` for history expansion.
> More information: <https://manned.org/sh>.

- Start an interactive shell session:

`sh`

- Execute a command and then exit:

`sh -c "{{command}}"`

- Execute a script:

`sh {{path/to/script.sh}}`

- Read and execute commands from `stdin`:

`sh -s`
