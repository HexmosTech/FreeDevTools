---
title: "Systemd-nspawn - Create Linux Containers | Online Free DevTools by Hexmos"
name: systemd-nspawn
path: /freedevtools/tldr/linux/systemd-nspawn
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-nspawn/"
description: "Create Linux containers with systemd-nspawn. Easily spawn commands and OS in lightweight containers. Free online tool, no registration required."
category: linux
keywords:
- linux container creation
- systemd-nspawn container
- lightweight container linux
- linux container command
- systemd container management
- nspawn linux os
- linux namespace isolation
- container process management
- systemd container runtime
- linux virtual environment
features:
- Spawn commands within a lightweight container
- Run a full Linux-based OS in a container
- Execute commands as PID 2 inside the container
- Specify the machine name and hostname for containers
- Isolate processes and resources using namespaces
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-nspawn

> Spawn a command or OS in a lightweight container.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-nspawn.html>.

- Run a command in a container:

`systemd-nspawn {{[-D|--directory]}} {{path/to/container_root}}`

- Run a full Linux-based OS in a container:

`systemd-nspawn {{[-b|--boot]}} {{[-D|--directory]}} {{path/to/container_root}}`

- Run the specified command as PID 2 in the container (as opposed to PID 1) using a stub init process:

`systemd-nspawn {{[-D|--directory]}} {{path/to/container_root}} {{[-a|--as-pid2]}}`

- Specify the machine name and hostname:

`systemd-nspawn {{[-M|--machine]}} {{container_name}} --hostname {{container_host}} {{[-D|--directory]}} {{path/to/container_root}}`
