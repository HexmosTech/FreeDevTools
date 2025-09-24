---
title: "Doskey - Manage Windows Commands | Online Free DevTools by Hexmos"
name: doskey
path: /freedevtools/tldr/windows/doskey
canonical: "https://hexmos.com/freedevtools/tldr/windows/doskey/"
description: "Manage Windows commands with Doskey. Create macros, manage command-lines, and recall commands. Free online tool, no registration required."
category: windows
keywords:
- windows command macro
- doskey macro management
- command-line alias windows
- windows command history
- doskey command recall
- windows batch script alias
- doskey command substitution
- windows macro definition
- doskey macro creation
- windows command-line editor
features:
- Define aliases for frequently used commands
- Create macros with parameter substitution
- Store and recall command history
- Manage command-line editing
- Execute complex command sequences with a single alias
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doskey

> Manage macros, windows commands and command-lines.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/doskey>.

- List available macros:

`doskey /macros`

- Create a new macro:

`doskey {{name}} = "{{command}}"`

- Create a new macro for a specific executable:

`doskey /exename={{executable}} {{name}} = "{{command}}"`

- Remove a macro:

`doskey {{name}} =`

- Display all commands that are stored in memory:

`doskey /history`

- Save macros to a file for portability:

`doskey /macros > {{path\to\macinit_file}}`

- Load macros from a file:

`doskey /macrofile = {{path\to\macinit_file}}`
