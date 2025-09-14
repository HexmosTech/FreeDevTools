---
title: "Docker Load - Import Docker Images from Files | Free DevTools"
name: docker-load
path: /freedevtools/tldr/docker/docker-load
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-load/"
description: "Load Docker images easily with Docker Load. Import images from tar files or stdin. Simplify container deployment with this free online tool, no registration required."
category: common
keywords:
- docker image load
- docker load command
- docker image import
- docker image from file
- docker image stdin
- docker image archive
- docker containerization
- docker cli
- docker deployment
- container image management
features:
- Load Docker images from standard input
- Load Docker images from specified files
- Quietly load images, suppressing output
- Import images without unpacking layers
- Streamline container image restoration from archives
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker load

> Load Docker images from files or `stdin`.
> More information: <https://docs.docker.com/reference/cli/docker/image/load/>.

- Load a Docker image from `stdin`:

`docker load < {{path/to/image_file.tar}}`

- Load a Docker image from a specific file:

`docker load {{[-i|--input]}} {{path/to/image_file.tar}}`

- Load a Docker image from a specific file in quiet mode:

`docker load {{[-q|--quiet]}} {{[-i|--input]}} {{path/to/image_file.tar}}`
