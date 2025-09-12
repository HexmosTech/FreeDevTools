---
title: "GitHub CLI - Display Help | Free DevTools"
name: gh-help
path: /freedevtools/tldr/common/gh-help
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-help/"
description: "Display help information with GitHub CLI. Get command usage, environment variables and markdown reference. Free online tool, no registration required."
category: common
keywords:
- github cli help
- gh help command
- github command line
- cli reference
- github environment variables
- gh formatting
- gh mintty
- github cli documentation
- command line help
- gh subcommand help
features:
- Display general help for GitHub CLI.
- Show help for specific subcommands and actions.
- Provide information on environment variables used by gh.
- Generate markdown reference of all gh commands.
- Show formatting information for JSON output from gh.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh help

> Display help about the GitHub CLI command.
> More information: <https://cli.github.com/manual/gh_help>.

- Display general help:

`gh help`

- Display help for the `gh help` subcommand:

`gh help --help`

- Display help about environment variables that can be used with `gh`:

`gh help environment`

- Display a markdown reference of all `gh` commands:

`gh help reference`

- Display help about formatting JSON output from `gh` using `jq`:

`gh help formatting`

- Display help about using `gh` with MinTTY:

`gh help mintty`

- Display help for a subcommand:

`gh help {{subcommand}}`

- Display help for a subcommand action:

`gh help {{pr}} {{create}}`
