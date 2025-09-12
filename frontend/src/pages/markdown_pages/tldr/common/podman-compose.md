---
title: "Compose Control - Manage Containers with Podman-Compose | Free DevTools"
name: podman-compose
path: /freedevtools/tldr/common/podman-compose
canonical: "https://hexmos.com/freedevtools/tldr/common/podman-compose/"
description: "Control container definitions easily with Podman-Compose. Manage and orchestrate multi-container applications using Compose specification. Free online tool, no registration required."
category: common
keywords:
- Compose container management
- Podman compose specification
- Container orchestration tool
- Docker compose alternative
- YAML container definition
- Linux container manager
- Podman container commands
- Container networking tool
- Compose file execution
- Multi-container deployment
features:
- Define and run multi-container applications using Compose specification
- Manage container lifecycle with start, stop, and down commands
- Build images and start containers in a single command
- View container logs for debugging and monitoring
- Execute one-time commands within container services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# podman-compose

> Run and manage Compose Specification container definition.
> More information: <https://github.com/containers/podman-compose>.

- List all running containers:

`podman-compose ps`

- Create and start all containers in the background using a local `docker-compose.yml`:

`podman-compose up {{[-d|--detach]}}`

- Start all containers, building if needed:

`podman-compose up --build`

- Start all containers using an alternate compose file:

`podman-compose {{[-f|--file]}} {{path/to/file.yaml}} up`

- Stop all running containers:

`podman-compose stop`

- Remove all containers, networks, and volumes:

`podman-compose down {{[-v|--volumes]}}`

- Follow logs for a container (omit all container names):

`podman-compose logs {{[-f|--follow]}} {{container_name}}`

- Run a one-time command in a service with no ports mapped:

`podman-compose run {{service_name}} {{command}}`
