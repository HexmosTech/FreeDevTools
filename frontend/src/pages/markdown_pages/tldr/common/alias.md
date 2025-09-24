---
title: "Alias - Create Command Shortcuts | Online Free DevTools by Hexmos"
name: alias
path: /freedevtools/tldr/common/alias
canonical: "https://hexmos.com/freedevtools/tldr/common/alias/"
description: "Create command shortcuts with Alias. Define custom aliases for frequently used commands to improve efficiency. Free online tool, no registration required."
category: common
keywords:
- command alias creation
- shell alias definition
- terminal alias shortcut
- bash alias management
- zsh alias configuration
- command line alias
- linux alias
- macos alias
- alias command substitution
- shortcut command generator
features:
- Define custom command shortcuts
- Create persistent aliases in shell configuration files
- List existing aliases
- Remove defined aliases
- Execute complex commands with simple aliases
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# alias

> Create aliases - words that are replaced by a command string.
> Aliases expire with the current shell session unless defined in the shell's configuration file, e.g. `~/.bashrc` for Bash or `~/.zshrc` for Zsh.
> See also: `unalias`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-alias>.

- List all aliases:

`alias`

- Create a generic alias:

`alias {{word}}="{{command}}"`

- View the command associated to a given alias:

`alias {{word}}`

- Remove an aliased command:

`unalias {{word}}`

- Turn `rm` into an interactive command:

`alias {{rm}}="{{rm --interactive}}"`

- Create `la` as a shortcut for `ls --all`:

`alias {{la}}="{{ls --all}}"`
