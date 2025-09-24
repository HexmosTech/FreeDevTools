---
title: "FC - Edit and Run Commands | Online Free DevTools by Hexmos"
name: fc
path: /freedevtools/tldr/fc/fc
canonical: "https://hexmos.com/freedevtools/tldr/fc/fc/"
description: "Edit and run commands from your command history with FC. Quickly modify previous shell commands and execute them in Bash. Free online tool, no registration required."
category: common
keywords:
- command history editor
- shell command execution
- bash command history
- command line editing
- fc command linux
- fc command bash
- edit previous commands
- run edited commands
- linux shell history
- command line history
features:
- Opens the last command in a system editor.
- Executes commands after editing.
- Lists recent commands from history.
- Edits and runs commands by number.
- Edits and runs commands in a given interval.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fc

> Open the most recent command for editing and then run it.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-fc>.

- Open the last command in the default system editor and run it after editing:

`fc`

- Specify an editor to open with:

`fc -e {{'emacs'}}`

- List recent commands from history:

`fc -l`

- List recent commands in reverse order:

`fc -l -r`

- Edit and run a command from history:

`fc {{number}}`

- Edit commands in a given interval and run them:

`fc '{{416}}' '{{420}}'`

- Display help:

`fc --help`
