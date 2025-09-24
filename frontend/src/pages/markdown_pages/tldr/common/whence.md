---
title: "Interpret Command Type - Check Command Path | Online Free DevTools by Hexmos"
name: whence
path: /freedevtools/tldr/common/whence
canonical: "https://hexmos.com/freedevtools/tldr/common/whence/"
description: "Interpret command type with whence. Determine location of commands, search command path and show function content. Free online tool, no registration required."
category: common
keywords:
- command type indicator
- zsh command path
- shell command location
- find command origin
- shell function content
- zsh builtin command
- linux command lookup
- macos command type
- shell command interpreter
- command resolution
features:
- Determine command type (alias, builtin, function, file)
- Locate commands on the command path
- Display shell function content
- Search the PATH environment variable
- List all occurrences of a command
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# whence

> A Zsh builtin to indicate how a command would be interpreted.
> More information: <https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html#index-whence>.

- Interpret `command`, with expansion if defined as an `alias` (similar to the `command -v` builtin):

`whence "{{command}}"`

- Display type of `command`, with location if defined as a function, or binary (equivalent to the `type` and `command -V` builtins):

`whence -v "{{command}}"`

- Same as above, except display content of shell functions instead of location (equivalent to `which` builtin):

`whence -c "{{command}}"`

- Same as above, but show all occurrences on command path (equivalent to the `where` builtin):

`whence -ca "{{command}}"`

- Search only the `PATH` for `command`, ignoring builtins, aliases or shell functions (equivalent to the `where` command):

`whence -p "{{command}}"`
