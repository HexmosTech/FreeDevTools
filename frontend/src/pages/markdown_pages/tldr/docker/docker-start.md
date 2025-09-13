---
title: "Docker Start - Start Containers | Free DevTools"
name: docker-start
path: /freedevtools/tldr/common/docker-start
canonical: "https://hexmos.com/freedevtools/tldr/common/docker-start/"
description: "Start Docker containers with Docker Start. Manage container lifecycles and application deployments efficiently using command line. Free online tool, no registration required."
category: common
keywords:
- docker container start
- docker start command
- container lifecycle management
- docker command line
- docker cli
- linux docker
- macos docker
- windows docker
- docker application deployment
- container orchestration
features:
- Start one or more stopped Docker containers.
- Attach to container's standard output and standard error streams.
- Forward signals to the container.
- Start containers using container names.
- Provide help documentation for the docker start command.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker start

> Start stopped containers.
> More information: <https://docs.docker.com/reference/cli/docker/container/start/>.

- Display help:

`docker start --help`

- Start a Docker container:

`docker start {{container}}`

- Start a container, attaching `stdout` and `stderr` and forwarding signals:

`docker start {{[-a|--attach]}} {{container}}`

- Start one or more containers:

`docker start {{container1 container2 ...}}`
