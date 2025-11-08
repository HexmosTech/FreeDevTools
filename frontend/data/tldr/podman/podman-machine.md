---
title: "Podman Machine - Create VMs | Online Free DevTools by Hexmos"
name: podman-machine
path: "/freedevtools/tldr/podman/podman-machine/"
canonical: "https://hexmos.com/freedevtools/tldr/podman/podman-machine/"
description: "Create virtual machines with Podman Machine. Manage, start, stop, and inspect Podman VMs using the command line interface. Free online tool, no registration required."
category: common
keywords:
- podman machine creation
- podman vm manager
- linux container management
- podman virtual machine
- command line vm
- podman machine command
- container orchestration tool
- podman vm control
- podman vm inspection
- docker alternative vm
features:
- Create and initialize Podman virtual machines
- Start and stop virtual machines via command line
- Connect to VMs using SSH for remote access
- Inspect VM configuration and status details
- Manage VM resources such as CPU, memory, and disk space
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# podman machine

> Create and manage virtual machines running Podman.
> Included with Podman version 4 or greater.
> More information: <https://docs.podman.io/en/latest/markdown/podman-machine.1.html>.

- List existing machines:

`podman machine ls`

- Create a new default machine:

`podman machine init`

- Create a new machine with a specific name:

`podman machine init {{name}}`

- Create a new machine with different resources:

`podman machine init --cpus={{4}} --memory={{4096}} --disk-size={{50}}`

- Start or stop a machine:

`podman machine {{start|stop}} {{name}}`

- Connect to a running machine via SSH:

`podman machine ssh {{name}}`

- Inspect information about a machine:

`podman machine inspect {{name}}`
