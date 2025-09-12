---
title: "Execute Command - Control Processes | Free DevTools"
name: exec
path: /freedevtools/tldr/unknown/exec
canonical: "https://hexmos.com/freedevtools/tldr/unknown/exec/"
description: "Execute commands directly with exec. Control processes, modify environments, and run login shells. Free online tool, no registration required."
category: unknown
keywords:
- command execution
- shell command
- process control
- bash command
- linux exec
- macos exec
- command line execution
- environment modification
- login shell
- script execution
features:
- Execute commands in the current shell.
- Modify the environment before execution.
- Execute commands as a login shell.
- Change the command name during execution.
- Execute commands with a clean environment.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# exec

> Execute a command without creating a child process.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-exec>.

- Execute a specific command:

`exec {{command -with -flags}}`

- Execute a command with a (mostly) empty environment:

`exec -c {{command -with -flags}}`

- Execute a command as a login shell:

`exec -l {{command -with -flags}}`

- Execute a command with a different name:

`exec -a {{name}} {{command -with -flags}}`
