---
title: "GH Config - Change GitHub CLI Settings | Online Free DevTools by Hexmos"
name: gh-config
path: /freedevtools/tldr/gh/gh-config
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-config/"
description: "Change GitHub CLI configuration with gh config. Manage git protocol, set text editor, disable prompts, and customize settings. Free online tool, no registration required."
category: common
keywords:
- github cli configuration
- gh config settings
- github command line tool
- git protocol configuration
- cli editor configuration
- interactive prompt control
- github ssh protocol
- github pager configuration
- github command settings
- gh cli customization
features:
- Configure the Git protocol used by GitHub CLI
- Set the default text editor for command line operations
- Disable or enable interactive prompts for GH commands
- Customize the pager for displaying command output
- Set any specific configuration value for the GitHub CLI
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gh config

> Change configuration for GitHub cli.
> More information: <https://cli.github.com/manual/gh_config>.

- Display what Git protocol is being used:

`gh config get git_protocol`

- Set protocol to SSH:

`gh config set git_protocol {{ssh}}`

- Use `delta` in side-by-side mode as the default pager for all `gh` commands:

`gh config set pager '{{delta --side-by-side}}'`

- Set text editor to Vim:

`gh config set editor {{vim}}`

- Reset to default text editor:

`gh config set editor ""`

- Disable interactive prompts:

`gh config set prompt {{disabled}}`

- Set a specific configuration value:

`gh config set {{key}} {{value}}`
