---
title: "Toolbox Run - Execute Commands in Linux Containers | Free DevTools"
name: toolbox-run
path: /freedevtools/tldr/linux/toolbox-run
canonical: "https://hexmos.com/freedevtools/tldr/linux/toolbox-run/"
description: "Execute commands in Linux containers with Toolbox Run. Manage containerized applications, development environments, and system utilities easily. Free online tool, no registration required."
category: linux
keywords:
- Linux container command execution
- Toolbox container run command
- Linux environment management
- Containerized application execution
- Fedora toolbox execution
- Distro release command execution
- Linux command line tools
- Container command runner
- CLI toolbox utility
- Linux system containerization
features:
- Execute commands in existing toolbox containers.
- Specify a container by name for command execution.
- Run commands in containers for specific distribution releases.
- Manage development environments within containers.
- Execute system utilities inside toolbox environments.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# toolbox run

> Run a command in an existing `toolbox` container.
> See also: `toolbox enter`.
> More information: <https://manned.org/toolbox-run>.

- Run a command inside a specific `toolbox` container:

`toolbox run {{[-c|--container]}} {{container_name}} {{command}}`

- Run a command inside a `toolbox` container for a specific release of a distribution:

`toolbox run {{[-d|--distro]}} {{distribution}} {{[-r|--release]}} {{release}} {{command}}`

- Run `emacs` inside a `toolbox` container using the default image for Fedora 39:

`toolbox run {{[-d|--distro]}} {{fedora}} {{[-r|--release]}} {{f39}} {{emacs}}`
