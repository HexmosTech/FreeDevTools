---
title: "Atuin - Search Shell History | Online Free DevTools by Hexmos"
name: atuin
path: "/freedevtools/tldr/common/atuin/"
canonical: "https://hexmos.com/freedevtools/tldr/common/atuin/"
description: "Search shell history efficiently with Atuin. Store, sync, and search your shell history across machines with encryption. Free online tool, no registration required."
category: common
keywords:
- shell history database
- command line history
- atuin shell history
- zsh history search
- bash history search
- fish history search
- encrypted shell history
- synced shell history
- cross platform history
- searchable command history
features:
- Store shell history in a database.
- Sync encrypted history across machines.
- Search shell history for specific commands.
- Import history from shell default history files.
- Register and login to a sync server for history synchronization.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# atuin

> Store your shell history in a searchable database.
> Optionally sync your encrypted history between machines.
> More information: <https://atuin.sh/docs/commands>.

- Install atuin into your shell:

`eval "$(atuin init {{bash|zsh|fish}})"`

- Import history from the shell default history file:

`atuin import auto`

- Search shell history for a specific command:

`atuin search {{command}}`

- Register an account on the default sync server using the specified [u]sername, [e]mail and [p]assword:

`atuin register -u {{username}} -e {{email}} -p {{password}}`

- Login to the default sync server:

`atuin login -u {{username}} -p {{password}}`

- Sync history with the sync server:

`atuin sync`
