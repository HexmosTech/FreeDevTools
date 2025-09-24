---
title: "Create Dev Containers - Docker Development with devcontainer | Online Free DevTools by Hexmos"
name: devcontainer
path: /freedevtools/tldr/common/devcontainer
canonical: "https://hexmos.com/freedevtools/tldr/common/devcontainer/"
description: "Create and manage Docker development environments with devcontainer. Build images, apply templates, and execute commands easily. Free online tool, no registration required."
category: common
keywords:
- devcontainer Docker development
- Docker container development environment
- Dev container configuration
- devcontainer build image
- devcontainer templates apply
- devcontainer exec command
- VS Code devcontainer
- Containerized development workflow
- Dockerized development environment
- Remote development containers
features:
- Create and run development containers
- Apply Dev Container Templates to workspaces
- Execute commands in running Dev Containers
- Build Dev Container images from `devcontainer.json`
- Read Dev Container configuration from `devcontainer.json`
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# devcontainer

> Use a Docker container as a development environment.
> More information: <https://containers.dev/implementors/reference/>.

- Create and run a Dev Container:

`devcontainer up`

- Apply a Dev Container Template to a workspace:

`devcontainer templates apply {{[-t|--template-id]}} {{template_id}} {{[-a|--template-args]}} {{template_args}} {{[-w|--workspace-folder]}} {{path/to/workspace}}`

- Execute a command on a running Dev Container in the current workspace:

`devcontainer exec {{command}}`

- Build a Dev Container image from `devcontainer.json`:

`devcontainer build {{path/to/workspace}}`

- Open a Dev Container in VS Code (the path is optional):

`devcontainer open {{path/to/workspace}}`

- Read and print the configuration of a Dev Container from `devcontainer.json`:

`devcontainer read-configuration`
