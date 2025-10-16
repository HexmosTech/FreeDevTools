---
title: "Create Docker Machines - Manage Containers | Online Free DevTools by Hexmos"
name: docker-machine
path: "/freedevtools/tldr/docker/docker-machine/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-machine/"
description: "Create Docker machines effortlessly with Docker-Machine. Quickly manage containers on virtual hosts and orchestrate deployments. Free online tool, no registration required."
category: common
keywords:
- docker machine creation
- docker container management
- virtual machine docker
- docker host management
- docker machine command line
- docker vm control
- docker machine linux
- docker machine macos
- docker machine windows
- docker container orchestration
features:
- Create new Docker machines
- Start and stop Docker machines
- Inspect Docker machine details
- List available Docker machines
- Manage Docker containers on created machines
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker-machine

> Create and manage machines running Docker.
> More information: <https://github.com/docker/machine>.

- List currently running Docker machines:

`docker-machine ls`

- Create a new Docker machine with specific name:

`docker-machine create {{name}}`

- Get the status of a machine:

`docker-machine status {{name}}`

- Start a machine:

`docker-machine start {{name}}`

- Stop a machine:

`docker-machine stop {{name}}`

- Inspect information about a machine:

`docker-machine inspect {{name}}`
