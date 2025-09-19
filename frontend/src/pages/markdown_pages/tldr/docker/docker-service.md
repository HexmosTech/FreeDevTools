---
title: "Docker Service - Manage Container Services | Online Free DevTools by Hexmos"
name: docker-service
path: /freedevtools/tldr/docker/docker-service
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-service/"
description: "Manage container services with Docker Service. Easily create, inspect, scale, and remove Docker services. Free online tool, no registration required."
category: common
keywords:
- docker service management
- container service control
- docker swarm service
- docker service scaling
- docker service deployment
- linux docker service
- command line docker service
- docker container orchestration
- docker service update
- docker service removal
features:
- List existing Docker services
- Create new Docker services from images
- Inspect detailed service configurations
- Scale service replicas for load balancing
- Remove unwanted Docker services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker service

> Manage the services on a Docker daemon.
> More information: <https://docs.docker.com/reference/cli/docker/service/>.

- List the services on a Docker daemon:

`docker service ls`

- Create a new service:

`docker service create --name {{service_name}} {{image}}:{{tag}}`

- Display detailed information about one or more services:

`docker service inspect {{service_name_or_ID1 service_name_or_ID2}}`

- List the tasks of one or more services:

`docker service ps {{service_name_or_ID1 service_name_or_ID2 ...}}`

- Scale to a specific number of replicas for a space-separated list of services:

`docker service scale {{service_name}}={{count_of_replicas}}`

- Remove one or more services:

`docker service rm {{service_name_or_ID1 service_name_or_ID2}}`
