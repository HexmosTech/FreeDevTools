---
title: "Docker Tag - Assign Tags to Docker Images | Free DevTools"
name: docker-tag
path: /freedevtools/tldr/common/docker-tag
canonical: "https://hexmos.com/freedevtools/tldr/common/docker-tag/"
description: "Assign tags to existing Docker images with Docker Tag. Easily manage and organize your container images using the command line. Free online tool, no registration required."
category: common
keywords:
- docker image tag
- docker image tagging
- docker tag command
- docker image management
- docker container tagging
- docker image alias
- docker tag rename
- docker image versioning
- docker tag latest
- docker tag command line
features:
- Assign a name and tag to a Docker image by ID
- Assign a new tag to an existing Docker image
- Retag Docker images for version control
- Manage multiple tags for a single Docker image
- Simplify Docker image identification and organization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker tag

> Assign tags to existing Docker images.
> More information: <https://docs.docker.com/reference/cli/docker/image/tag/>.

- Assign a name and tag to a specific image ID:

`docker tag {{id}} {{name}}:{{tag}}`

- Assign a tag to a specific image:

`docker tag {{image}}:{{current_tag}} {{image}}:{{new_tag}}`

- Display help:

`docker tag`
