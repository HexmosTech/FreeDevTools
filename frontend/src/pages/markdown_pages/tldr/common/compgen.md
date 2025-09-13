---
title: "Generate Completion Matches - compgen | Free DevTools"
name: compgen
path: /freedevtools/tldr/common/compgen
canonical: "https://hexmos.com/freedevtools/tldr/common/compgen/"
description: "Generate completion matches with compgen, a Bash built-in command. Simplify command line usage and automate complex tasks. Free online tool, no registration required."
category: common
keywords:
- bash completion generator
- command line completion
- shell completion script
- bash autocomplete
- compgen bash function
- linux command completion
- bash built-in command
- shell script completion
- custom bash completion
- dynamic completion bash
features:
- Generate possible completion matches in Bash
- List shell built-ins, aliases, functions and executables
- Match against a wordlist for completions
- Show shell reserved keywords
- List users on the system for completion
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# compgen

> Bash built-in command for generating possible completion matches in Bash.
> Usually used within custom completion functions.
> See also: `complete`, `compopt`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-compgen>.

- List all shell built-ins, aliases, functions and executables that you could run:

`compgen -c`

- List all commands that you could run that start with a specified string and save results to `COMPREPLY`:

`compgen -V COMPREPLY -c {{str}}`

- Match against a wordlist:

`compgen -W "{{apple orange banana}}" {{a}}`

- List all aliases:

`compgen -a`

- List all functions that you could run:

`compgen -A function`

- Show shell reserved keywords:

`compgen -k`

- See all available commands/aliases starting with 'ls':

`compgen -ac {{ls}}`

- List all users on the system:

`compgen -u`
