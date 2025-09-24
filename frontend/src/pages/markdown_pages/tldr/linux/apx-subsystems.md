---
title: "APX Subsystems - Manage Containers | Online Free DevTools by Hexmos"
name: apx-subsystems
path: /freedevtools/tldr/linux/apx-subsystems
canonical: "https://hexmos.com/freedevtools/tldr/linux/apx-subsystems/"
description: "Manage Linux subsystems with APX. Create, list, reset, and remove containerized environments for customized development. Free online tool, no registration required."
category: linux
keywords:
  - APX Subsystems management
  - Linux container control
  - Containerized environment manager
  - APX development tool
  - Subsystem reset command
  - Linux APX command line
  - VanillaOS APX subsystems
  - Container removal tool
  - Software stack management
  - APX container creation
features:
  - Create new subsystems based on pre-existing stacks
  - List available subsystems for management
  - Reset subsystems to their initial state
  - Force reset subsystems for troubleshooting
  - Remove subsystems from the APX environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apx subsystems

> Manage subsystems in `apx`.
> Subsystems are containers that can be created based on pre-existing stacks.
> More information: <https://docs.vanillaos.org/docs/en/apx-manpage#subsystems>.

- Interactively create a new subsystem:

`apx subsystems new`

- List all available subsystems:

`apx subsystems list`

- Reset a specific subsystem to its initial state:

`apx subsystems reset {{[-n|--name]}} {{string}}`

- Force reset a specific subsystem:

`apx subsystems reset {{[-n|--name]}} {{string}} {{[-f|--force]}}`

- Remove a specific subsystem:

`apx subsystems rm {{[-n|--name]}} {{string}}`

- Force remove a specific subsystem:

`apx subsystems rm {{[-n|--name]}} {{string}} {{[-f|--force]}}`
