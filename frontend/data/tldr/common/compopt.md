---
title: "Control Completion Options - Bash Compopt | Online Free DevTools by Hexmos"
name: compopt
path: "/freedevtools/tldr/common/compopt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/compopt/"
description: "Control Bash completion options with Compopt. Configure command completion behavior, enabling or disabling specific flags. Free online tool, no registration required."
category: common
keywords:
- bash completion options
- compopt command flags
- shell completion configuration
- command line completion
- bash autocomplete settings
- compgen completion control
- linux command completion
- macos command completion
- shell script autocomplete
- compopt bash examples
features:
- Print current completion options for a command
- Enable specific completion options
- Disable specific completion options
- Configure completion behavior for shell scripts
- Modify options for current executing completion
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# compopt

> Print or change the completion options for a command.
> `-o` means enabled and `+o` means disabled.
> See also: `compgen`, `complete`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-compopt>.

- Print the completion options for given command:

`compopt {{command}}`

- Enable or disable a completion option of a command:

`compopt {{-o|+o}} {{option1}} {{-o|+o}} {{option2}} {{command}}`

- Print the options for the currently executing completion:

`compopt`

- Enable or disable a completion option of a command:

`compopt {{-o|+o}} {{option1}} {{-o|+o}} {{option2}}`
