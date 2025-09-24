---
title: "Distrobox Enter - Access Containers | Online Free DevTools by Hexmos"
name: distrobox-enter
path: /freedevtools/tldr/linux/distrobox-enter
canonical: "https://hexmos.com/freedevtools/tldr/linux/distrobox-enter/"
description: "Access Distrobox containers easily with the distrobox-enter command.  Manage Linux containers and execute commands within them. Free online tool, no registration required."
category: linux
keywords:
  - distrobox container access
  - linux container management
  - distrobox command line
  - container shell access
  - headless container execution
  - distrobox enter command
  - linux container entry
  - manage linux containers
  - distrobox usage
  - command line container
features:
  - Access Distrobox containers directly.
  - Execute commands within a container at login.
  - Run commands without a tty (headless mode).
  - Specify custom shells or commands for container entry.
  - Seamless integration with existing Distrobox setups.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# distrobox-enter

> Enter a Distrobox container.
> Default command executed is your SHELL, but you can specify different shells or entire commands to execute. If used inside a script, an application, or a service, you can use the `--headless` mode to disable the tty and interactivity.
> See also: `distrobox`.
> More information: <https://distrobox.it/usage/distrobox-enter>.

- Enter a Distrobox container:

`distrobox-enter {{container_name}}`

- Enter a Distrobox container and run a command at login:

`distrobox-enter {{container_name}} -- {{sh -l}}`

- Enter a Distrobox container without instantiating a tty:

`distrobox-enter {{[-n|--name]}} {{container_name}} -- {{uptime --pretty}}`
