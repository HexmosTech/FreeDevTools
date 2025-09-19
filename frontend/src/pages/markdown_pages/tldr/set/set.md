---
title: "Set Shell Options - Control Bash Behavior | Online Free DevTools by Hexmos"
name: set
path: /freedevtools/tldr/set/set
canonical: "https://hexmos.com/freedevtools/tldr/set/set/"
description: "Control Bash shell options instantly with the Set command. Customize shell behavior, manage variables, and debug scripts. Free online tool, no registration required."
category: common
keywords:
- bash shell options
- set command
- shell variable management
- bash debugging
- linux shell configuration
- shell scripting environment
- command line behavior
- posix shell options
- gnu bash set
- interactive shell settings
features:
- Toggle shell options for debugging
- Export shell variables to child processes
- Customize command-line editing mode
- Configure error handling within scripts
- Reset and assign positional parameters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# set

> Toggle shell options or set the values of positional parameters.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#The-Set-Builtin>.

- Display the names and values of shell variables:

`set`

- Export newly initialized variables to child processes:

`set -a`

- Write formatted messages to `stderr` when jobs finish:

`set -b`

- Write and edit text in the command-line with `vi`-like keybindings (e.g. `yy`):

`set -o {{vi}}`

- Return to default mode:

`set -o {{emacs}}`

- List all modes:

`set -o`

- Exit the shell when (some) command fails:

`set -e`

- Reset all shell parameters and assign new ones:

`set -- {{argument1 argument2 ...}}`
