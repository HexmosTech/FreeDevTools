---
title: "Complete - Autocomplete Shell Commands | Online Free DevTools by Hexmos"
name: complete
path: "/freedevtools/tldr/common/complete/"
canonical: "https://hexmos.com/freedevtools/tldr/common/complete/"
description: "Autocomplete shell commands with Complete. Configure command completion in Bash and improve your command-line efficiency. Free online tool, no registration required."
category: common
keywords:
- bash completion
- command autocomplete
- shell completion
- bash complete command
- autocomplete script
- bash tab completion
- command line completion
- linux autocomplete
- unix shell completion
- custom bash completion
features:
- Define custom autocompletion rules for commands
- Autocomplete arguments using functions in Bash
- Complete commands based on shell builtins
- Control whether a space is appended after completion
- List all loaded completion specifications
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# complete

> Get and set argument autocompletion rules of shell commands in Bash.
> The specified completions will be invoked when `<Tab>` is pressed in Bash.
> See also: `compgen`, `compopt`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-complete>.

- Set arguments of a command to autocomplete through a function (completion response is sent in `COMPREPLY` variable):

`complete -F {{function}} {{command}}`

- Set arguments of a command to autocomplete through another command (`$1` is the command, `$2` is the argument the cursor is on, and `$3` is the argument preceding the cursor):

`complete -C {{autocomplete_command}} {{command}}`

- Set arguments of a command to autocomplete to shell builtins:

`complete -b {{command}}`

- Apply autocompletion without appending a space to the completed word:

`complete -o nospace -F {{function}} {{command}}`

- List all loaded complete specifications:

`complete -p`

- List loaded complete specifications for a command:

`complete -p {{command}}`
