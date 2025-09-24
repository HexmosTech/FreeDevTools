---
title: "Podman Container Control - Manage Pods and Images | Online Free DevTools by Hexmos"
name: podman
path: /freedevtools/tldr/podman/podman
canonical: "https://hexmos.com/freedevtools/tldr/podman/podman/"
description: "Control Podman containers easily with this tool. Manage pods, images, and containers efficiently on Linux systems with a Docker-compatible CLI. Free online tool, no registration required."
category: common
keywords:
- podman container management
- linux container runtime
- docker cli alternative
- podman image management
- pod container tool
- podman command line
- container orchestration tool
- podman tutorial
- podman commands cheat sheet
- podman container commands
features:
- List all running and stopped containers
- Create containers from images with custom names
- Start and stop existing containers easily
- Pull images from registries like Docker Hub
- Execute commands inside running containers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# podman

> Simple management tool for pods, containers and images.
> Podman provides a Docker-CLI comparable command-line. Simply put: `alias docker=podman`.
> More information: <https://github.com/containers/podman/blob/main/commands-demo.md>.

- List all containers (both running and stopped):

`podman ps --all`

- Create a container from an image, with a custom name:

`podman run --name {{container_name}} {{image}}`

- Start or stop an existing container:

`podman {{start|stop}} {{container_name}}`

- Pull an image from a registry (defaults to Docker Hub):

`podman pull {{image}}`

- Display the list of already downloaded images:

`podman images`

- Open a shell inside an already running container:

`podman exec --interactive --tty {{container_name}} {{sh}}`

- Remove a stopped container:

`podman rm {{container_name}}`

- Display the logs of one or more containers and follow log output:

`podman logs --follow {{container_name}} {{container_id}}`
