---
title: "Navi Cheatsheet - Browse Commands Interactively | Online Free DevTools by Hexmos"
name: navi
path: /freedevtools/tldr/linux/navi
canonical: "https://hexmos.com/freedevtools/tldr/linux/navi/"
description: "Browse commands interactively with Navi cheatsheet. Quickly access and execute commands from your terminal. Free online tool, no registration required."
category: linux
keywords:
  - command-line cheatsheet
  - interactive cheatsheet
  - terminal commands
  - cli navigator
  - navi cheatsheet tool
  - shell commands
  - command reference
  - application launcher
  - cheatsheet browser
  - command-line application
features:
  - Browse through all available cheatsheets
  - Access specific cheatsheets by name
  - Print commands without execution
  - Generate shell widget source code
  - Autoselect and execute commands based on query
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# navi

> An interactive cheatsheet tool for the command-line and application launchers.
> More information: <https://github.com/denisidoro/navi>.

- Browse through all available cheatsheets:

`navi`

- Browse the cheatsheet for `navi` itself:

`navi fn welcome`

- Print a command from the cheatsheet without executing it:

`navi --print`

- Output shell widget source code (It automatically detects your shell if possible, but can also be specified manually):

`navi widget {{shell}}`

- Autoselect and execute the snippet that best matches a query:

`navi --query '{{query}}' --best-match`
