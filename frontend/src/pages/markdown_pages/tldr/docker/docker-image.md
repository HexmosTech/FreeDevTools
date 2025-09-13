---
title: "Manage Docker Images - Control Container Images | Free DevTools"
name: docker-image
path: /freedevtools/tldr/docker/docker-image
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-image/"
description: "Manage Docker images with this command line tool. Delete unused images, view history, and optimize container storage. Free online tool, no registration required."
category: common
keywords:
- Docker image management
- Container image prune
- Docker image history
- Docker image delete
- Docker image ls
- Linux Docker commands
- macOS Docker commands
- CLI image tools
- Docker storage optimization
- Container image cleanup
features:
- List local Docker images
- Delete unused Docker images
- Show Docker image history
- Prune all unused images
- Access docker image documentation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker image

> Manage Docker images.
> See also: `docker build`, `docker import`, `docker pull`.
> More information: <https://docs.docker.com/reference/cli/docker/image/>.

- List local Docker images:

`docker image ls`

- Delete unused local Docker images:

`docker image prune`

- Delete all unused images (not just those without a tag):

`docker image prune {{[-a|--all]}}`

- Show the history of a local Docker image:

`docker image history {{image}}`

- View documentation for `docker image rm`:

`tldr docker rmi`
