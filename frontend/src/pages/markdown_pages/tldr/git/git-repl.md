---
title: "Control Git REPL - Interactive Git Shell | Online Free DevTools by Hexmos"
name: git-repl
path: /freedevtools/tldr/git/git-repl
canonical: "https://hexmos.com/freedevtools/tldr/git/git-repl/"
description: "Control Git workflow with Git REPL, an interactive Git shell. Execute commands, run external programs, and manage repositories efficiently. Free online tool, no registration required."
category: common
keywords:
- git repl command
- git interactive shell
- git command line
- git extras
- git workflow management
- git repository manipulation
- linux git shell
- macos git repl
- windows git repl
- command-line git interface
features:
- Launch an interactive Git shell environment.
- Execute Git commands within the interactive shell.
- Run external commands from within the Git shell.
- Utilize tab completion for command suggestions.
- Exit the Git shell using the 'exit' command or Ctrl+D.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git repl

> Git REPL (read-evaluate-print-loop) - an interactive Git shell.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-repl>.

- Start an interactive Git shell:

`git repl`

- Run a Git command while in the interactive Git shell:

`{{git_subcommand}} {{command_arguments}}`

- Run an external (non-Git) command while in the interactive Git shell:

`!{{command}} {{command_arguments}}`

- Exit the interactive Git shell (or press `<Ctrl d>`):

`exit`
