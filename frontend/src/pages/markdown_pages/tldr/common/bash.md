---
title: "Bash Shell - Control Command-Line Processes | Online Free DevTools by Hexmos"
name: bash
path: /freedevtools/tldr/common/bash
canonical: "https://hexmos.com/freedevtools/tldr/common/bash/"
description: "Control command-line processes with Bash Shell. Execute commands, scripts, and manage shell sessions efficiently. Free online tool, no registration required."
category: common
keywords:
- bash shell commands
- shell script execution
- command-line interpreter
- linux bash scripting
- macOS terminal commands
- shell session management
- interactive bash shell
- restricted bash shell
- bash environment variables
- execute shell commands
features:
- Start interactive shell sessions
- Execute bash scripts
- Control command execution
- Manage shell environments
- Run restricted shell sessions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bash

> Bourne-Again SHell, an `sh`-compatible command-line interpreter.
> See also: `zsh`, `histexpand` (history expansion).
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Invoking-Bash>.

- Start an interactive shell session:

`bash`

- Start an interactive shell session without loading startup configs:

`bash --norc`

- Execute specific [c]ommands:

`bash -c "{{echo 'bash is executed'}}"`

- Execute a specific script:

`bash {{path/to/script.sh}}`

- E[x]ecute a specific script, printing each command before executing it:

`bash -x {{path/to/script.sh}}`

- Execute a specific script and stop at the first [e]rror:

`bash -e {{path/to/script.sh}}`

- Execute specific commands from `stdin`:

`{{echo "echo 'bash is executed'"}} | bash`

- Start a [r]estricted shell session:

`bash -r`
