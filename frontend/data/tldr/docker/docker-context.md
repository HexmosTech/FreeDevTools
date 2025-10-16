---
title: "Docker Context - Control Docker Environments | Online Free DevTools by Hexmos"
name: docker-context
path: "/freedevtools/tldr/docker/docker-context/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-context/"
description: "Control Docker environments with Docker Context. Manage multiple Docker instances and switch between them effortlessly. Free online tool, no registration required."
category: common
keywords:
- docker context manager
- docker environment management
- docker remote context
- docker cli context
- docker context switch
- docker multiple environments
- docker context list
- docker context create
- docker orchestration
- docker remote access
features:
- Create contexts using specific Docker endpoints
- Manage multiple Docker environments simultaneously
- Switch between Docker contexts easily
- List all available Docker contexts
- Use DOCKER_HOST environment variable to create contexts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker context

> Switch between contexts to manage multiple Docker environments.
> More information: <https://docs.docker.com/reference/cli/docker/context/>.

- Create a context using a specific Docker endpoint:

`docker context create {{my_context}} --docker "host={{tcp://remote-host:2375}}"`

- Create a context based on the `DOCKER_HOST` environment variable:

`docker context create {{my_context}}`

- Switch to a context:

`docker context use {{my_context}}`

- List all contexts:

`docker context ls`
