---
title: "Shell Script Executor - Run Shell Scripts with Dash | Free DevTools"
name: dash
path: /freedevtools/tldr/common/dash
canonical: "https://hexmos.com/freedevtools/tldr/common/dash/"
description: "Execute shell scripts quickly with Dash, a POSIX-compliant shell. Debug, run, and test your shell scripts efficiently using this free online tool, no registration required."
category: common
keywords:
- shell script executor
- posix shell interpreter
- dash shell commands
- linux shell scripting
- debian almquist shell
- command line shell
- shell syntax checker
- shell script debugger
- sh script execution
- dash shell tutorial
features:
- Execute shell scripts from the command line
- Check shell scripts for syntax errors
- Execute commands with detailed tracing output
- Stop script execution on the first error
- Execute commands directly from standard input
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dash

> Debian Almquist Shell, a modern, POSIX-compliant implementation of `sh` (not Bash-compatible).
> More information: <https://manned.org/dash>.

- Start an interactive shell session:

`dash`

- Execute specific [c]ommands:

`dash -c "{{echo 'dash is executed'}}"`

- Execute a specific script:

`dash {{path/to/script.sh}}`

- Check a specific script for syntax errors:

`dash -n {{path/to/script.sh}}`

- Execute a specific script while printing each command before executing it:

`dash -x {{path/to/script.sh}}`

- Execute a specific script and stop at the first [e]rror:

`dash -e {{path/to/script.sh}}`

- Execute specific commands from `stdin`:

`{{echo "echo 'dash is executed'"}} | dash`
