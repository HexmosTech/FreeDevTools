---
title: "Docker PS - List Docker Containers | Online Free DevTools by Hexmos"
name: docker-ps
path: "/freedevtools/tldr/docker/docker-ps/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-ps/"
description: "List Docker containers quickly with Docker PS. Inspect container status, filter by name or image, and manage container lifecycles easily. Free online tool, no registration required."
category: common
keywords:
- docker container list
- docker ps command
- docker list containers
- docker container status
- docker container management
- docker container filter
- docker container image
- docker container name
- docker container exited code
- docker container volume
features:
- List currently running Docker containers
- List all Docker containers including stopped ones
- Show the latest created container
- Filter containers by name substring
- Filter containers by ancestor image
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker ps

> List Docker containers.
> More information: <https://docs.docker.com/reference/cli/docker/container/ls/>.

- List currently running Docker containers:

`docker ps`

- List all Docker containers (running and stopped):

`docker ps {{[-a|--all]}}`

- Show the latest created container (includes all states):

`docker ps {{[-l|--latest]}}`

- Filter containers that contain a substring in their name:

`docker ps {{[-f|--filter]}} "name={{name}}"`

- Filter containers that share a given image as an ancestor:

`docker ps {{[-f|--filter]}} "ancestor={{image}}:{{tag}}"`

- Filter containers by exit status code:

`docker ps {{[-a|--all]}} {{[-f|--filter]}} "exited={{code}}"`

- Filter containers by status (created, running, removing, paused, exited and dead):

`docker ps {{[-f|--filter]}} "status={{status}}"`

- Filter containers that mount a specific volume or have a volume mounted in a specific path:

`docker ps {{[-f|--filter]}} "volume={{path/to/directory}}" --format "table {{.ID}}\t{{.Image}}\t{{.Names}}\t{{.Mounts}}"`
