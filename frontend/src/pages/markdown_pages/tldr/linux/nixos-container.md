---
title: "NixOS Container - Create & Manage Containers | Free DevTools"
name: nixos-container
path: /freedevtools/tldr/linux/nixos-container
canonical: "https://hexmos.com/freedevtools/tldr/linux/nixos-container/"
description: "Create and manage NixOS containers easily with nixos-container.  Start, stop, and run commands within containers using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - nixos container management
  - linux container creation
  - nixos container commands
  - container orchestration nixos
  - nixos container runtime
  - manage nixos containers
  - linux container tools
  - nixos system containers
  - create nixos containers
  - run commands in nixos containers
features:
  - Create NixOS containers from configuration files.
  - Start, stop, terminate, and destroy containers.
  - Run commands inside running containers.
  - Update container configurations dynamically.
  - Access an interactive shell within a container.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nixos-container

> Starts NixOS containers using Linux containers.
> More information: <https://nixos.org/manual/nixos/stable/#ch-containers>.

- List running containers:

`sudo nixos-container list`

- Create a NixOS container with a specific configuration file:

`sudo nixos-container create {{container_name}} --config-file {{nix_config_file_path}}`

- Start, stop, terminate, or destroy a specific container:

`sudo nixos-container {{start|stop|terminate|destroy|status}} {{container_name}}`

- Run a command in a running container:

`sudo nixos-container run {{container_name}} -- {{command}} {{command_arguments}}`

- Update a container configuration:

`sudo $EDITOR /var/lib/container/{{container_name}}/etc/nixos/configuration.nix && sudo nixos-container update {{container_name}}`

- Enter an interactive shell session on an already-running container:

`sudo nixos-container root-login {{container_name}}`
