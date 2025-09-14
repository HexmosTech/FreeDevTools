---
title: "Avo CLI - Control Avo Analytics Workspaces | Free DevTools"
name: avo
path: /freedevtools/tldr/common/avo
canonical: "https://hexmos.com/freedevtools/tldr/common/avo/"
description: "Control your Avo analytics workspaces with the Avo CLI. Manage branches, pull wrappers, and resolve conflicts effortlessly. Free online tool, no registration required."
category: common
keywords:
- Avo CLI tool
- Avo analytics command line
- Avo workspace manager
- Avo branch manager
- Avo implementation status
- Avo conflict resolver
- Avo pull request manager
- Avo init command
- Avo login command
- Avo edit command
features:
- Initialize a new Avo workspace
- Log in to the Avo platform
- Switch between existing Avo branches
- Pull analytics wrappers for your current path
- Resolve Git conflicts in Avo files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# avo

> The official interface for Avo.
> More information: <https://www.avo.app/docs/implementation/cli>.

- Initialize a workspace in the current directory:

`avo init`

- Log into the Avo platform:

`avo login`

- Switch to an existing Avo branch:

`avo checkout {{branch_name}}`

- Pull analytics wrappers for the current path:

`avo pull`

- Display the status of the Avo implementation:

`avo status`

- Resolve Git conflicts in Avo files:

`avo conflict`

- Open the current Avo workspace in the default web browser:

`avo edit`

- Display help for a subcommand:

`avo {{subcommand}} --help`
