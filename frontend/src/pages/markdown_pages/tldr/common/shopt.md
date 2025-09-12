---
title: "Shopt - Manage Bash Shell Options | Free DevTools"
name: shopt
path: /freedevtools/tldr/common/shopt
canonical: "https://hexmos.com/freedevtools/tldr/common/shopt/"
description: "Manage Bash shell options with Shopt. Configure shell behavior and customize your environment using simple commands. Free online tool, no registration required."
category: common
keywords:
- bash shell options
- shell configuration
- bash settings
- bash variables
- shopt command
- linux shell
- bash customize
- shell environment
- bash scripting
- command-line interface
features:
- List all available shell options
- Enable specific shell options
- Disable specific shell options
- Print options as executable commands
- Display help documentation for shopt
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# shopt

> Manage Bash shell options: variables (stored in `$BASHOPTS`) that control behavior specific to the Bash shell.
> Generic POSIX shell variables (stored in `$SHELLOPTS`) are managed with the `set` command instead.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#The-Shopt-Builtin>.

- List of all settable options and whether they are set:

`shopt`

- Set an option:

`shopt -s {{option_name}}`

- Unset an option:

`shopt -u {{option_name}}`

- Print a list of all options and their status formatted as runnable `shopt` commands:

`shopt -p`

- Display help:

`help shopt`
