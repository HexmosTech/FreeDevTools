---
title: "APX Stacks - Create and Manage Stacks | Free DevTools"
name: apx-stacks
path: /freedevtools/tldr/linux/apx-stacks
canonical: "https://hexmos.com/freedevtools/tldr/linux/apx-stacks/"
description: "Create and manage application stacks with APX Stacks on Linux. Streamline application management and configuration with ease. Free online tool, no registration required."
category: linux
keywords:
- apx stacks management
- linux application stacks
- apx configuration manager
- application stack creator
- apx stack export
- apx stack import
- linux stack configuration
- apx package management
- linux apx command
- create apx stacks
features:
- Interactively create new stack configurations
- Update existing stack configurations
- List all available stack configurations
- Remove specified stack configurations
- Export stack configurations to YAML files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apx stacks

> Manage stacks in `apx`.
> Note: User-created stack configurations are stored in `~/.local/share/apx/stacks`.
> More information: <https://github.com/Vanilla-OS/apx>.

- Interactively create a new stack configuration:

`apx stacks new`

- Interactively update a stack configuration:

`apx stacks update {{name}}`

- List all available stack configurations:

`apx stacks list`

- Remove a specified stack configuration:

`apx stacks rm --name {{string}}`

- Import a stack configuration:

`apx stacks import --input {{path/to/stack.yml}}`

- Export the stack configuration (Note: The output flag is optional, it is exported to the current working directory by default):

`apx stacks export --name {{string}} --output {{path/to/output_file}}`
