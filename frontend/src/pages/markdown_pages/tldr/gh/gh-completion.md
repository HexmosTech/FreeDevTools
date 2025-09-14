---
title: "Generate GitHub CLI Completion - Shell Scripts | Free DevTools"
name: gh-completion
path: /freedevtools/tldr/gh/gh-completion
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-completion/"
description: "Generate completion scripts with GitHub CLI. Enhance shell usability and streamline command input on bash, zsh, fish, and powershell. Free online tool, no registration required."
category: common
keywords:
- github cli completion script
- shell completion generator
- bash completion script
- zsh completion script
- fish completion script
- powershell completion script
- cli auto completion
- github command line tools
- github cli shortcuts
- command line completion generator
features:
- Generate shell completion scripts for GitHub CLI.
- Support completion for bash shell.
- Support completion for zsh shell.
- Support completion for fish shell.
- Support completion for powershell shell.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh completion

> Generate shell completion scripts for GitHub CLI commands.
> More information: <https://cli.github.com/manual/gh_completion>.

- Print a completion script:

`gh completion {{[-s|--shell]}} {{bash|zsh|fish|powershell}}`

- Append the `gh` completion script to `~/.bashrc`:

`gh completion {{[-s|--shell]}} {{bash}} >> {{~/.bashrc}}`

- Append the `gh` completion script to `~/.zshrc`:

`gh completion {{[-s|--shell]}} {{zsh}} >> {{~/.zshrc}}`

- Display the subcommand help:

`gh completion`
