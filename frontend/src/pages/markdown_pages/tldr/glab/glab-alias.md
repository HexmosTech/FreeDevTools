---
title: "GLab Alias - Manage GitLab CLI Aliases | Online Free DevTools by Hexmos"
name: glab-alias
path: /freedevtools/tldr/glab/glab-alias
canonical: "https://hexmos.com/freedevtools/tldr/glab/glab-alias/"
description: "Manage GitLab CLI aliases with Glab. Create shortcuts for common GitLab commands, simplify workflows, and increase efficiency. Free online tool, no registration required."
category: common
keywords:
- glab alias manager
- gitlab cli alias
- command alias tool
- glab shortcut creator
- gitlab cli helper
- terminal alias tool
- glab configuration
- glab alias delete
- glab alias set
- gitlab alias list
features:
- Create custom GitLab CLI aliases
- List all configured Glab aliases
- Set shell commands as Glab subcommands
- Delete existing command shortcuts
- Display subcommand help information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# glab alias

> Manage GitLab CLI command aliases.
> More information: <https://gitlab.com/gitlab-org/cli/-/blob/main/docs/source/alias/index.md>.

- List all the aliases `glab` is configured to use:

`glab alias list`

- Create a `glab` subcommand alias:

`glab alias set {{mrv}} '{{mr view}}'`

- Set a shell command as a `glab` subcommand:

`glab alias set {{[-s|--shell]}} {{alias_name}} {{command}}`

- Delete a command shortcut:

`glab alias delete {{alias_name}}`

- Display the subcommand help:

`glab alias`
