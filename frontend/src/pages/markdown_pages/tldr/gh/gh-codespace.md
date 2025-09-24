---
title: "GitHub Codespace - Manage Cloud Dev Environments | Online Free DevTools by Hexmos"
name: gh-codespace
path: /freedevtools/tldr/gh/gh-codespace
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-codespace/"
description: "Manage cloud development environments with GitHub Codespace.  Connect, list, and delete codespaces seamlessly. Free online tool, no registration required."
category: common
keywords:
- github codespace manager
- cloud development environment
- remote development tool
- github cli codespace
- vscode remote development
- ssh codespace connection
- github codespace delete
- dev environment management
- github codespaces list
- github codespace create
features:
- Create a codespace directly from the command line.
- List all available codespaces on GitHub.
- Connect to a remote codespace via SSH.
- Transfer files between your local machine and a codespace.
- Display logs and manage ports for a codespace.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gh codespace

> Connect and manage your codespaces in GitHub.
> More information: <https://cli.github.com/manual/gh_codespace>.

- Create a codespace in GitHub interactively:

`gh codespace create`

- List all available codespaces:

`gh codespace list`

- Connect to a codespace via SSH interactively:

`gh codespace ssh`

- Transfer a specific file to a codespace interactively:

`gh codespace cp {{path/to/source_file}} remote:{{path/to/remote_file}}`

- List the ports of a codespace interactively:

`gh codespace ports`

- Display the logs from a codespace interactively:

`gh codespace logs`

- Delete a codespace interactively:

`gh codespace delete`

- Display help for a subcommand:

`gh codespace {{code|cp|create|delete|edit|...}} --help`
