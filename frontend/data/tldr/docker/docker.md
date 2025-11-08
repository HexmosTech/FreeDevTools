---
title: "Docker - Manage Containers & Images | Online Free DevTools by Hexmos"
name: docker
path: "/freedevtools/tldr/docker/docker/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker/"
description: "Manage Docker containers and images efficiently with Docker command. Pull images, run containers, and execute commands effortlessly. Free online tool, no registration required."
category: common
keywords:
- Docker container management
- Docker image manipulation
- Docker command line
- Docker CLI tool
- Container runtime environment
- Linux container management
- Docker image registry
- Docker container start stop
- Docker command examples
- Docker container removal
features:
- List and manage Docker containers
- Run Docker containers with custom names
- Pull Docker images from registries
- Execute commands inside running containers
- Remove stopped Docker containers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker

> Manage Docker containers and images.
> Some subcommands such as `run` have their own usage documentation.
> More information: <https://docs.docker.com/reference/cli/docker/>.

- List all Docker containers (running and stopped):

`docker ps {{[-a|--all]}}`

- Start a container from an image, with a custom name:

`docker run --name {{container_name}} {{image}}`

- Start or stop an existing container:

`docker {{start|stop}} {{container_name}}`

- Pull an image from a Docker registry:

`docker pull {{image}}`

- Display the list of already downloaded images:

`docker images`

- Open an interactive tty with Bourne shell (`sh`) inside a running container:

`docker exec {{[-it|--interactive --tty]}} {{container_name}} {{sh}}`

- Remove stopped containers:

`docker rm {{container1 container2 ...}}`

- Fetch and follow the logs of a container:

`docker logs {{[-f|--follow]}} {{container_name}}`
