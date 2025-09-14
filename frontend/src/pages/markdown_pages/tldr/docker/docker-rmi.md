---
title: "Docker RMI - Remove Docker Images Easily | Free DevTools"
name: docker-rmi
path: /freedevtools/tldr/docker/docker-rmi
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-rmi/"
description: "Remove Docker images efficiently with Docker RMI. Delete unused images, reclaim disk space and manage container environments. Free online tool, no registration required."
category: common
keywords:
- Docker image removal
- Container image deletion
- Docker RMI command
- Docker image cleanup
- Linux container management
- Docker image force remove
- Docker no prune image delete
- Docker untagged image removal
- Docker image space reclaim
- CLI container management
features:
- Remove one or more Docker images by name
- Force removal of Docker images
- Delete images without removing untagged parents
- Display help information for the docker rmi command
- Manage container disk space through image deletion
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker rmi

> Remove Docker images.
> More information: <https://docs.docker.com/reference/cli/docker/image/rm/>.

- Display help:

`docker rmi`

- Remove one or more images given their names:

`docker rmi {{image1 image2 ...}}`

- Force remove an image:

`docker rmi {{[-f|--force]}} {{image}}`

- Remove an image without deleting untagged parents:

`docker rmi --no-prune {{image}}`
