---
title: "Docker Run - Run Containers | Online Free DevTools by Hexmos"
name: docker-run
path: /freedevtools/tldr/docker/docker-run
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-run/"
description: "Run Docker containers with Docker Run. Easily manage and execute commands within isolated environments. Free online tool, no registration required."
category: common
keywords:
- docker container run
- docker image execute
- containerized application
- docker CLI command
- docker run detached
- docker run interactive
- docker run environment variables
- docker run volume mount
- docker run port publish
- docker run network
features:
- Run commands in new Docker containers
- Execute containers in detached mode
- Start interactive containers with a pseudo-TTY
- Pass environment variables to containers
- Mount volumes to containers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker run

> Run a command in a new Docker container.
> More information: <https://docs.docker.com/reference/cli/docker/container/run/>.

- Run command in a new container from a tagged image:

`docker run {{image:tag}} {{command}}`

- Run command in a new container in background and display its ID:

`docker run {{[-d|--detach]}} {{image}} {{command}}`

- Run command in a one-off container in interactive mode and pseudo-TTY:

`docker run --rm {{[-it|--interactive --tty]}} {{image}} {{command}}`

- Run command in a new container with passed environment variables:

`docker run {{[-e|--env]}} '{{variable}}={{value}}' {{[-e|--env]}} {{variable}} {{image}} {{command}}`

- Run command in a new container with bind mounted volumes:

`docker run {{[-v|--volume]}} /{{path/to/host_path}}:/{{path/to/container_path}} {{image}} {{command}}`

- Run command in a new container with published ports:

`docker run {{[-p|--publish]}} {{host_port}}:{{container_port}} {{image}} {{command}}`

- Run command in a new container overwriting the entrypoint of the image:

`docker run --entrypoint {{command}} {{image}}`

- Run command in a new container connecting it to a network:

`docker run --network {{network}} {{image}}`
