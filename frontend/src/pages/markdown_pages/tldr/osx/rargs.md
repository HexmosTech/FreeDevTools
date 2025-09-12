---
title: "Execute Command Rargs - Pattern Matching Command Exec | Free DevTools"
name: rargs
path: /freedevtools/tldr/osx/rargs
canonical: "https://hexmos.com/freedevtools/tldr/osx/rargs/"
description: "Execute commands with Rargs for pattern matching. Automate complex command execution workflows with text manipulation. Free online tool, no registration required."
category: osx
keywords:
- rargs command
- pattern matching command execution
- command-line argument generator
- standard input command executor
- text processing rargs
- osx command line tools
- parallel command execution
- nul character separated input
- batch command processor
- mass file renamer
features:
- Execute commands for each line of input
- Perform dry runs to preview commands
- Rename files using pattern matching
- Execute commands in parallel for faster processing
- Handle input separated by NUL characters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rargs

> Execute a command for each line of standard input.
> Like `xargs`, but with pattern matching support.
> More information: <https://github.com/lotabout/rargs>.

- Execute a command for every line of input, just like `xargs` (`{0}` indicates where to substitute in the text):

`{{command}} | rargs {{command}} {0}`

- Do a dry run, which prints the commands that would be run instead of executing them:

`{{command}} | rargs -e {{command}} {0}`

- Remove the `.bak` extension from every file in a list:

`{{command}} | rargs -p '(.*).bak mv {0} {1}`

- Execute commands in parallel:

`{{command}} | rargs -w {{max-procs}}`

- Consider each line of input to be separated by a NUL character (`\0`) instead of a newline (`\n`):

`{{command}} | rargs -0 {{command}} {0}`
