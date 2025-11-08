---
title: "Homectl - Control Home Directories on Linux | Online Free DevTools by Hexmos"
name: homectl
path: "/freedevtools/tldr/linux/homectl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/homectl/"
description: "Control home directories on Linux with Homectl. Manage user accounts, passwords, and disk space effortlessly using command line. Free online tool, no registration required."
category: linux
keywords:
- linux home directory manager
- homectl command line tool
- user account management linux
- linux user password reset
- home directory resize linux
- systemd homed service
- create linux user account
- remove linux user account
- linux home directory lock
- linux user directory control
features:
- Create and manage user home directories
- Change user passwords via command line
- Resize home directory disk space allocations
- Lock and unlock user home directories securely
- Execute commands within a specific user's home directory context
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# homectl

> Create, remove, change or inspect home directories using the systemd-homed service.
> More information: <https://manned.org/homectl>.

- List user accounts and their associated home directories:

`homectl list`

- Create a user account and their associated home directory:

`sudo homectl create {{username}}`

- Remove a specific user and the associated home directory:

`sudo homectl remove {{username}}`

- Change the password for a specific user:

`sudo homectl passwd {{username}}`

- Run a shell or a command with access to a specific home directory:

`sudo homectl with {{username}} -- {{command}} {{command_arguments}}`

- Lock or unlock a specific home directory:

`sudo homectl {{lock|unlock}} {{username}}`

- Change the disk space assigned to a specific home directory to 100 GiB:

`sudo homectl resize {{username}} {{100G}}`

- Display help:

`homectl {{[-h|--help]}}`
