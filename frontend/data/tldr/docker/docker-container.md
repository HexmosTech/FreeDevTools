---
title: "Docker Container - Manage Containers Easily | Online Free DevTools by Hexmos"
name: docker-container
path: "/freedevtools/tldr/docker/docker-container/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-container/"
description: "Manage Docker containers effectively with Docker Container command. List, start, stop, pause, and inspect containers. Free online tool, no registration required."
category: common
keywords:
- docker container management
- docker container list
- docker container start
- docker container stop
- docker container pause
- docker container inspect
- docker container export
- docker container commit
- linux container management
- command line docker
features:
- List running Docker containers
- Start and stop containers
- Pause and unpause containers
- Inspect container details
- Export container filesystems
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker container

> Manage Docker containers.
> More information: <https://docs.docker.com/reference/cli/docker/container/>.

- List currently running Docker containers:

`docker container ls`

- Start one or more stopped containers:

`docker container start {{container1_name}} {{container2_name}}`

- Kill one or more running containers:

`docker container kill {{container_name}}`

- Stop one or more running containers:

`docker container stop {{container_name}}`

- Pause all processes within one or more containers:

`docker container pause {{container_name}}`

- Display detailed information on one or more containers:

`docker container inspect {{container_name}}`

- Export a container's filesystem as a tar archive:

`docker container export {{container_name}}`

- Create a new image from a container's changes:

`docker container commit {{container_name}}`
