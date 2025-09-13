---
title: "Schroot - Control Root Directories | Free DevTools"
name: schroot
path: /freedevtools/tldr/linux/schroot
canonical: "https://hexmos.com/freedevtools/tldr/linux/schroot/"
description: "Control root directories with Schroot. Easily manage chroot environments and run commands in isolated systems. Free online tool, no registration required."
category: linux
keywords:
- linux schroot
- schroot command
- chroot manager
- root directory control
- isolated environment
- debian schroot
- linux container
- schroot session
- schroot user
- schroot interactive shell
features:
- Manage multiple chroot environments
- Run commands in isolated environments
- Start interactive shells within a chroot
- Begin and connect to schroot sessions
- Execute commands as a specific user within a chroot
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# schroot

> Run a command or start an interactive shell with a different root directory. More customizable than `chroot`.
> More information: <https://wiki.debian.org/Schroot>.

- List available chroots:

`schroot --list`

- Run a command in a specific chroot:

`schroot --chroot {{chroot}} {{command}}`

- Run a command with options in a specific chroot:

`schroot --chroot {{chroot}} {{command}} -- {{command_options}}`

- Run a command in all available chroots:

`schroot --all {{command}}`

- Start an interactive shell within a specific chroot as a specific user:

`schroot --chroot {{chroot}} --user {{user}}`

- Begin a new session (a unique session ID is returned on `stdout`):

`schroot --begin-session --chroot {{chroot}}`

- Connect to an existing session:

`schroot --run-session --chroot {{session_id}}`

- End an existing session:

`schroot --end-session --chroot {{session_id}}`
