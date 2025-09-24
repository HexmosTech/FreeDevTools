---
title: "Manage GitHub Extensions - Enhance CLI Functionality | Online Free DevTools by Hexmos"
name: gh-extension
path: /freedevtools/tldr/gh/gh-extension
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-extension/"
description: "Manage GitHub CLI extensions efficiently with gh-extension. Install, list, upgrade, and remove extensions to customize your GitHub workflow. Free online tool, no registration required."
category: common
keywords:
- GitHub CLI extension manager
- gh extension installer
- GitHub CLI upgrade extension
- gh extension list
- gh extension remove
- GitHub command-line extensions
- GitHub CLI extension development
- gh extension update all
- GitHub CLI customization
- gh extension project
features:
- Install extensions from GitHub repositories
- List all installed GitHub CLI extensions
- Upgrade individual or all extensions
- Remove unwanted extensions from GitHub CLI
- Initialize new extension projects
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gh extension

> Manage extensions for the GitHub CLI.
> More information: <https://cli.github.com/manual/gh_extension>.

- Initialize a new GitHub CLI extension project in a directory of the same name:

`gh {{[ext|extension]}} create {{extension_name}}`

- Install an extension from a GitHub repository:

`gh {{[ext|extension]}} install {{owner}}/{{repository}}`

- List installed extensions:

`gh {{[ext|extension]}} list`

- Upgrade a specific extension:

`gh {{[ext|extension]}} upgrade {{extension_name}}`

- Upgrade all extensions:

`gh {{[ext|extension]}} upgrade --all`

- List installed extensions:

`gh {{[ext|extension]}} list`

- Remove an extension:

`gh {{[ext|extension]}} remove {{extension_name}}`

- Display help about a subcommand:

`gh {{[ext|extension]}} {{subcommand}} --help`
