---
title: "GH Alias - Create CLI Aliases for GitHub Commands | Online Free DevTools by Hexmos"
name: gh-alias
path: /freedevtools/tldr/gh/gh-alias
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-alias/"
description: "Create custom command aliases with GH Alias for enhanced GitHub CLI efficiency. Streamline workflows and improve productivity using this free online tool, no registration required."
category: common
keywords:
- gh alias manager
- github cli alias
- command alias creation
- cli shortcut tool
- github workflow automation
- command line alias tool
- gh alias configuration
- custom github commands
- github cli productivity
- terminal alias manager
features:
- Define custom shortcuts for GitHub CLI commands
- Manage and list existing GitHub CLI aliases
- Set shell commands as GitHub CLI subcommands
- Delete existing command aliases
- Display help information for the GH alias subcommand
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gh alias

> Manage GitHub CLI command aliases.
> More information: <https://cli.github.com/manual/gh_alias>.

- List all the aliases `gh` is configured to use:

`gh alias list`

- Create a `gh` subcommand alias:

`gh alias set {{pv}} '{{pr view}}'`

- Set a shell command as a `gh` subcommand:

`gh alias set {{[-s|--shell]}} {{alias_name}} {{command}}`

- Delete a command shortcut:

`gh alias delete {{alias_name}}`

- Display the subcommand help:

`gh alias`
