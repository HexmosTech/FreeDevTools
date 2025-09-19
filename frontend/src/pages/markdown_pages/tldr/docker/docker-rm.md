---
title: "Docker Remove - Delete Containers | Online Free DevTools by Hexmos"
name: docker-rm
path: /freedevtools/tldr/docker/docker-rm
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-rm/"
description: "Remove Docker containers instantly with Docker Remove. Force remove, delete volumes and manage containers using the command line. Free online tool, no registration required."
category: common
keywords:
- docker container remove
- docker container deletion
- docker force remove container
- docker volume deletion
- docker container management
- linux docker commands
- macos docker commands
- windows docker commands
- command line docker
- docker container cleanup
features:
- Force remove running Docker containers
- Delete Docker containers and associated volumes
- Remove multiple Docker containers simultaneously
- Display help information for the docker rm command
- Remove containers with a single command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker rm

> Remove containers.
> More information: <https://docs.docker.com/reference/cli/docker/container/rm/>.

- Remove containers:

`docker rm {{container1 container2 ...}}`

- Force remove a container:

`docker rm {{[-f|--force]}} {{container1 container2 ...}}`

- Remove a container and its volumes:

`docker rm {{[-v|--volumes]}} {{container}}`

- Display help:

`docker rm {{[-h|--help]}}`
