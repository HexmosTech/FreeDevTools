---
title: "Nerdctl - Control Containerd Containers | Online Free DevTools by Hexmos"
name: nerdctl
path: /freedevtools/tldr/linux/nerdctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/nerdctl/"
description: "Control containerd containers with Nerdctl. Manage container lifecycle and images directly from the command line. Free online tool, no registration required."
category: linux
keywords:
- containerd container control
- nerdctl container manager
- linux container runtime
- container image management
- docker compatible cli
- container lifecycle management
- nerdctl command reference
- nerdctl linux commands
- container cli tool
- command line container control
features:
- List running and stopped containers
- Manage container lifecycle (start, stop, remove)
- Pull container images from registries
- Execute commands inside running containers
- Fetch and follow container logs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nerdctl

> Docker-compatible CLI for containerd.
> More information: <https://github.com/containerd/nerdctl/blob/main/docs/command-reference.md>.

- List all containers (running and stopped):

`nerdctl ps {{[-a|--all]}}`

- Start a container from an image, with a custom name:

`nerdctl run --name {{container_name}} {{image}}`

- Start or stop an existing container:

`nerdctl {{start|stop}} {{container_name}}`

- Pull an image from a container registry:

`nerdctl pull {{image}}`

- Display the list of already downloaded images:

`nerdctl images`

- Open an interactive tty with Bourne shell (`sh`) inside a running container:

`nerdctl exec {{[-it|--interactive --tty]}} {{container_name}} sh`

- Remove stopped containers:

`nerdctl rm {{container1 container2 ...}}`

- Fetch and follow the logs of a container:

`nerdctl logs {{[-f|--follow]}} {{container_name}}`
