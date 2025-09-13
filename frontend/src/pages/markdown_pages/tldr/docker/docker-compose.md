---
title: "Docker Compose - Control Multi-Container Apps | Free DevTools"
name: docker-compose
path: /freedevtools/tldr/docker/docker-compose
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-compose/"
description: "Control multi-container apps with Docker Compose. Easily manage and orchestrate Docker applications with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- docker compose management
- container orchestration tool
- docker compose up command
- docker compose down command
- docker compose logs command
- docker multi-container apps
- docker compose YAML
- docker application deployment
- docker compose CLI
- linux docker compose
features:
- Start and stop multi-container Docker applications
- Define and manage application services using docker-compose.yml
- View logs for individual containers or the entire application
- Rebuild containers automatically when changes are detected
- Scale and update applications seamlessly
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker compose

> Run and manage multi container Docker applications.
> More information: <https://docs.docker.com/reference/cli/docker/compose/>.

- List all running containers:

`docker compose ps`

- Create and start all containers in the background using a `docker-compose.yml` file from the current directory:

`docker compose up {{[-d|--detach]}}`

- Start all containers, rebuild if necessary:

`docker compose up --build`

- Start all containers by specifying a project name and using an alternate compose file:

`docker compose {{[-p|--project-name]}} {{project_name}} {{[-f|--file]}} {{path/to/file}} up`

- Stop all running containers:

`docker compose stop`

- Stop and remove all containers, networks, images, and volumes:

`docker compose down --rmi all {{[-v|--volumes]}}`

- Follow logs for all containers:

`docker compose logs {{[-f|--follow]}}`

- Follow logs for a specific container:

`docker compose logs {{[-f|--follow]}} {{container_name}}`
